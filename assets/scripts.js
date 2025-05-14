function whenMapReady(callback) {
  function check() {
    if (document.getElementById('map')) {
      callback();
    } else {
      setTimeout(check, 50);
    }
  }
  check();
}

whenMapReady(() => {
/* === Détection mobile === */
// Déclarez isMobile comme une variable globale
var isMobile = false;

// Détecter mobile
function detectMobile() {
  isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) || window.innerWidth <= 768;
  if (isMobile) {
    document.body.classList.add('is-mobile');
    console.log('Mode mobile activé');
  } else {
    document.body.classList.remove('is-mobile');
    console.log('Mode desktop activé');
  }
}

// Appeler la fonction au chargement de la page
detectMobile();

// Réagir aux changements de taille de la fenêtre
window.addEventListener('resize', detectMobile);

/* === Configuration de la carte === */
// Centrage et zoom selon device
var mapCenter = isMobile ? [50, 10] : [20, 0];
var mapZoom = isMobile ? 4 : 4;

// Vérifiez si une carte existe déjà
if (typeof map !== 'undefined' && map !== null) {
  map.remove(); // Supprime l'instance existante de la carte
}

// Définir les limites de déplacement (bounds)
var bounds = L.latLngBounds(
  L.latLng(-85, -180), // Coin sud-ouest
  L.latLng(85, 180)    // Coin nord-est
);

// Initialiser la carte avec les limites et les options
var map = L.map('map', {
  center: mapCenter,
  zoom: mapZoom,
  maxZoom: 6,
  minZoom: 4,
  maxBounds: bounds, // Applique les limites
  maxBoundsViscosity: 1.0 // Empêche tout mouvement en dehors des limites
});

// === Suivi manuel du plein écran ===
let isInFullscreen = false;

map.on('enterFullscreen', () => {
  isInFullscreen = true;
});

map.on('exitFullscreen', () => {
  isInFullscreen = false;
});


// Ajouter les tuiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 6,
  noWrap: true
}).addTo(map);



// Couches de base
var baseMaps = {
  "Standard": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};



/* === Gestion des événements de la carte === */
// Détection de mouvement de la carte
map.on('dragstart', function () {
  map.closePopup();
  var fullscreenTooltip = document.getElementById('fullscreen-tooltip');
  var closeTooltip = document.getElementById('close-tooltip');
  if (fullscreenTooltip) fullscreenTooltip.style.display = 'none';
  if (closeTooltip) closeTooltip.style.display = 'none';
  document.body.classList.remove('tooltip-open');
});

// Détection de clic sur la carte
map.on('click', function () {
  map.closePopup();
  var fullscreenTooltip = document.getElementById('fullscreen-tooltip');
  var closeTooltip = document.getElementById('close-tooltip');
  if (fullscreenTooltip) fullscreenTooltip.style.display = 'none';
  if (closeTooltip) closeTooltip.style.display = 'none';
  document.body.classList.remove('tooltip-open');
});

/* === Chargement des données GeoJSON === */
function style(feature) {
  var code = feature.properties.shapeGroup || feature.properties.GID_0;
  var cat = getCountryCategory(code);
  return {
    fillColor: cat.color,
    color: 'black',
    weight: 1,
    fillOpacity: 0.7
  };
}

fetch('./all_countries.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: style,
      onEachFeature: function (feature, layer) {
        var code = feature.properties.shapeGroup || feature.properties.GID_0;
        if (countryMessages[code]) {
          layer.bindPopup(
            countryMessages[code].replace(
              '<h3>',
              '<h3><img src="https://flagcdn.com/32x24/' +
              iso3to2[code] +
              '.png" class="flag-icon"> '
            ),
            { className: 'custom-tooltip', maxWidth: 250 }
          );
        }
      }
    }).addTo(map);
  })
  .catch(err => console.error('Erreur lors du chargement du GeoJSON', err));

const attentionIcon = L.icon({
  iconUrl: attentionPng, // PAS un chemin texte, mais la variable importée
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const dangerIcon = L.icon({
  iconUrl: dangerPng,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});


/* === Ajout des marqueurs === */
Object.keys(countryIcons).forEach(function (code) {
  var coords = countryIcons[code],
    cat = getCountryCategory(code);
  if (!cat.icon) return;

  var marker = L.marker(coords, { icon: cat.icon }).addTo(map);
  marker.bindPopup(
    countryMessages[code]
      ? countryMessages[code].replace('<h3>', '<h3><img src="https://flagcdn.com/32x24/' + iso3to2[code] + '.png" class="flag-icon"> ')
      : "Pas de message défini",
    { className: 'custom-tooltip', maxWidth: 250 }
  );

  marker.on('click', function () {
    marker.openPopup();
    console.log('Popup affiché pour le marqueur :', code);
  });
});

/* === Légende === */
var legend = L.control({ position: 'bottomright' });
legend.onAdd = function () {
  var div = L.DomUtil.create('div', 'info legend');
  var cols = ['green', 'orange', 'red'];
  var labs = ['Aucune restriction', 'Certaines restrictions', 'Interdiction'];

  if (isMobile) {
    div.innerHTML = '<button id="legend-toggle">Afficher légende</button>' +
      '<div id="legend-content" style="display:none;"></div>';
    setTimeout(() => {
      var content = document.getElementById('legend-content');
      var btn = document.getElementById('legend-toggle');
      cols.forEach(function (c, i) {
        content.innerHTML += '<i style="background:' + c + ';width:18px;height:18px;display:inline-block;margin-right:8px"></i>' +
          labs[i] + '<br>';
      });
      btn.addEventListener('click', function () {
        if (content.style.display === 'none') {
          content.style.display = 'block';
          btn.textContent = 'Masquer légende';
        } else {
          content.style.display = 'none';
          btn.textContent = 'Afficher légende';
        }
      });
    }, 0);
  } else {
    cols.forEach(function (c, i) {
      div.innerHTML += '<i style="background:' + c + ';width:18px;height:18px;display:inline-block;margin-right:8px"></i>' +
        labs[i] + '<br>';
    });
  }
  return div;
};
legend.addTo(map);


/* === Gestion des tooltips plein écran === */
document.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('more-info')) {
    e.preventDefault();
    var code = e.target.getAttribute('data-code');
    var content = detailedInfo[code] || "<h2>Informations non disponibles</h2><p>Désolé, nous n'avons pas encore de détails pour ce pays.</p>";

    if (isInFullscreen) map.toggleFullscreen();

    var tooltipContent = document.getElementById('tooltip-content');
    var fullscreenTooltip = document.getElementById('fullscreen-tooltip');
    var closeTooltip = document.getElementById('close-tooltip');

    if (tooltipContent && fullscreenTooltip && closeTooltip) {
      tooltipContent.innerHTML = content;
      fullscreenTooltip.style.display = 'block';
      closeTooltip.style.display = 'block';
      document.body.classList.add('tooltip-open');
      console.log('Tooltip affiché');
    } else {
      console.error('Les éléments DOM nécessaires pour les tooltips fullscreen sont introuvables.');
    }
  }
});

var closeTooltip = document.getElementById('close-tooltip');
if (closeTooltip) {
  closeTooltip.addEventListener('click', function () {
    var fullscreenTooltip = document.getElementById('fullscreen-tooltip');
    if (fullscreenTooltip) fullscreenTooltip.style.display = 'none';
    closeTooltip.style.display = 'none';
    document.body.classList.remove('tooltip-open');
  });
} else {
  console.error('Le bouton #close-tooltip est introuvable dans le DOM.');
}
});