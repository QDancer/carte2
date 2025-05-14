import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './assets/scripts.js'; // ✅ Ne pas mettre dans une fonction
import 'leaflet.fullscreen/Control.FullScreen.js';
import 'leaflet.fullscreen/Control.FullScreen.css';
import './assets/styles.css';
import './assets/countries.js';

// Assurer que attentionPng et dangerPng sont bien définis
import attentionPng from './assets/attention.png';
import dangerPng from './assets/danger.png';

// Injecte dynamiquement la feuille de style
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = '/dist/carte.bundle.css';
document.head.appendChild(style);

// Exposer Leaflet et les images globalement
window.L = L;
window.attentionPng = attentionPng;
window.dangerPng = dangerPng;

// Attendre que le DOM soit prêt avant d'injecter et exécuter le script
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <noscript>
      <p style="color: red; text-align: center; font-weight: bold;">
        Cette carte interactive nécessite JavaScript pour fonctionner.
      </p>
    </noscript>

    <div id="map" style="width: 100%; height: 100vh;"></div>

    <div id="fullscreen-tooltip" style="display: none;">
      <button id="close-tooltip">×</button>
      <div class="tooltip-container">
        <div id="tooltip-content"></div>
        <h3>Préparez votre voyage !</h3>
        <div class="btn-group">
          <a href="https://fr.vapingpost.com/voyager-en-avion-avec-sa-cigarette-electronique/" class="btn">Je voyage en avion</a>
          <a href="https://fr.vapingpost.com/voyager-en-train-avec-sa-cigarette-electronique/" class="btn">Je voyage en train</a>
          <a href="https://fr.vapingpost.com/voyager-en-bus-avec-sa-cigarette-electronique/" class="btn">Je voyage en bus</a>
        </div>
      </div>
    </div>
  `;


});
