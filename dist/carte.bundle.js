(function(){"use strict";var ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yn(D){return D&&D.__esModule&&Object.prototype.hasOwnProperty.call(D,"default")?D.default:D}var Yt={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var ei;function ii(){return ei||(ei=1,function(D,T){(function(c,gt){gt(T)})(ti,function(c){var gt="1.9.4";function A(t){var e,i,n,s;for(i=1,n=arguments.length;i<n;i++){s=arguments[i];for(e in s)t[e]=s[e]}return t}var h=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();function f(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var z=0;function m(t){return"_leaflet_id"in t||(t._leaflet_id=++z),t._leaflet_id}function U(t,e,i){var n,s,o,a;return a=function(){n=!1,s&&(o.apply(i,s),s=!1)},o=function(){n?s=arguments:(t.apply(i,arguments),setTimeout(a,e),n=!0)},o}function _(t,e,i){var n=e[1],s=e[0],o=n-s;return t===n&&i?t:((t-s)%o+o)%o+s}function x(){return!1}function B(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function Z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function V(t){return Z(t).split(/\s+/)}function M(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?h(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function Jt(t,e,i){var n=[];for(var s in t)n.push(encodeURIComponent(i?s.toUpperCase():s)+"="+encodeURIComponent(t[s]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var In=/\{ *([\w_ -]+) *\}/g;function ni(t,e){return t.replace(In,function(i,n){var s=e[n];if(s===void 0)throw new Error("No value provided for variable "+i);return typeof s=="function"&&(s=s(e)),s})}var nt=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function _e(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var Xt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function ve(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var si=0;function oi(t){var e=+new Date,i=Math.max(0,16-(e-si));return si=e+i,window.setTimeout(t,i)}var ye=window.requestAnimationFrame||ve("RequestAnimationFrame")||oi,ai=window.cancelAnimationFrame||ve("CancelAnimationFrame")||ve("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function K(t,e,i){if(i&&ye===oi)t.call(e);else return ye.call(window,f(t,e))}function $(t){t&&ai.call(window,t)}var qn={__proto__:null,extend:A,create:h,bind:f,get lastId(){return z},stamp:m,throttle:U,wrapNum:_,falseFn:x,formatNum:B,trim:Z,splitWords:V,setOptions:M,getParamString:Jt,template:ni,isArray:nt,indexOf:_e,emptyImageUrl:Xt,requestFn:ye,cancelFn:ai,requestAnimFrame:K,cancelAnimFrame:$};function ct(){}ct.extend=function(t){var e=function(){M(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=h(i);n.constructor=e,e.prototype=n;for(var s in this)Object.prototype.hasOwnProperty.call(this,s)&&s!=="prototype"&&s!=="__super__"&&(e[s]=this[s]);return t.statics&&A(e,t.statics),t.includes&&(On(t.includes),A.apply(null,[n].concat(t.includes))),A(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?h(i.options):{},A(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var o=0,a=n._initHooks.length;o<a;o++)n._initHooks[o].call(this)}},e},ct.include=function(t){var e=this.prototype.options;return A(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},ct.mergeOptions=function(t){return A(this.prototype.options,t),this},ct.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function On(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=nt(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Q={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=V(t);for(var s=0,o=t.length;s<o;s++)this._on(t[s],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=V(t);for(var s=arguments.length===1,o=0,a=t.length;o<a;o++)s?this._off(t[o]):this._off(t[o],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var s={fn:e,ctx:i};n&&(s.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(s)}},_off:function(t,e,i){var n,s,o;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(s=0,o=n.length;s<o;s++)n[s].fn=x;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var a=this._listens(t,e,i);if(a!==!1){var r=n[a];this._firingCount&&(r.fn=x,this._events[t]=n=n.slice()),n.splice(a,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=A({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var o=0,a=s.length;o<a;o++){var r=s[o],l=r.fn;r.once&&this.off(t,l,r.ctx),l.call(r.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var s=e;typeof e!="function"&&(n=!!e,s=void 0,i=void 0);var o=this._events&&this._events[t];if(o&&o.length&&this._listens(t,s,i)!==!1)return!0;if(n){for(var a in this._eventParents)if(this._eventParents[a].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var s=0,o=n.length;s<o;s++)if(n[s].fn===e&&n[s].ctx===i)return s;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=V(t);for(var s=0,o=t.length;s<o;s++)this._on(t[s],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[m(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[m(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,A({layer:t.target,propagatedFrom:t.target},t),!0)}};Q.addEventListener=Q.on,Q.removeEventListener=Q.clearAllEventListeners=Q.off,Q.addOneTimeEventListener=Q.once,Q.fireEvent=Q.fire,Q.hasEventListeners=Q.listens;var qt=ct.extend(Q);function y(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var ri=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};y.prototype={clone:function(){return new y(this.x,this.y)},add:function(t){return this.clone()._add(v(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(v(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new y(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new y(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ri(this.x),this.y=ri(this.y),this},distanceTo:function(t){t=v(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=v(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=v(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+B(this.x)+", "+B(this.y)+")"}};function v(t,e,i){return t instanceof y?t:nt(t)?new y(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new y(t.x,t.y):new y(t,e,i)}function q(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}q.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof y||typeof t[0]=="number"||"x"in t)e=i=v(t);else if(t=Y(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return v((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return v(this.min.x,this.max.y)},getTopRight:function(){return v(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof y?t=v(t):t=Y(t),t instanceof q?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=Y(t);var e=this.min,i=this.max,n=t.min,s=t.max,o=s.x>=e.x&&n.x<=i.x,a=s.y>=e.y&&n.y<=i.y;return o&&a},overlaps:function(t){t=Y(t);var e=this.min,i=this.max,n=t.min,s=t.max,o=s.x>e.x&&n.x<i.x,a=s.y>e.y&&n.y<i.y;return o&&a},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,s=Math.abs(e.y-i.y)*t;return Y(v(e.x-n,e.y-s),v(i.x+n,i.y+s))},equals:function(t){return t?(t=Y(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function Y(t,e){return!t||t instanceof q?t:new q(t,e)}function J(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}J.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,s;if(t instanceof E)n=t,s=t;else if(t instanceof J){if(n=t._southWest,s=t._northEast,!n||!s)return this}else return t?this.extend(S(t)||R(t)):this;return!e&&!i?(this._southWest=new E(n.lat,n.lng),this._northEast=new E(s.lat,s.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(s.lat,i.lat),i.lng=Math.max(s.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new J(new E(e.lat-n,e.lng-s),new E(i.lat+n,i.lng+s))},getCenter:function(){return new E((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new E(this.getNorth(),this.getWest())},getSouthEast:function(){return new E(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof E||"lat"in t?t=S(t):t=R(t);var e=this._southWest,i=this._northEast,n,s;return t instanceof J?(n=t.getSouthWest(),s=t.getNorthEast()):n=s=t,n.lat>=e.lat&&s.lat<=i.lat&&n.lng>=e.lng&&s.lng<=i.lng},intersects:function(t){t=R(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),o=s.lat>=e.lat&&n.lat<=i.lat,a=s.lng>=e.lng&&n.lng<=i.lng;return o&&a},overlaps:function(t){t=R(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),o=s.lat>e.lat&&n.lat<i.lat,a=s.lng>e.lng&&n.lng<i.lng;return o&&a},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=R(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function R(t,e){return t instanceof J?t:new J(t,e)}function E(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}E.prototype={equals:function(t,e){if(!t)return!1;t=S(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+B(this.lat,t)+", "+B(this.lng,t)+")"},distanceTo:function(t){return _t.distance(this,S(t))},wrap:function(){return _t.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return R([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new E(this.lat,this.lng,this.alt)}};function S(t,e,i){return t instanceof E?t:nt(t)&&typeof t[0]!="object"?t.length===3?new E(t[0],t[1],t[2]):t.length===2?new E(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new E(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new E(t,e,i)}var dt={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),s=this.transformation.transform(e.max,i);return new q(n,s)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?_(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?_(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new E(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,s=e.lng-i.lng;if(n===0&&s===0)return t;var o=t.getSouthWest(),a=t.getNorthEast(),r=new E(o.lat-n,o.lng-s),l=new E(a.lat-n,a.lng-s);return new J(r,l)}},_t=A({},dt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,s=e.lat*i,o=Math.sin((e.lat-t.lat)*i/2),a=Math.sin((e.lng-t.lng)*i/2),r=o*o+Math.cos(n)*Math.cos(s)*a*a,l=2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r));return this.R*l}}),li=6378137,be={R:li,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=Math.sin(n*e);return new y(this.R*t.lng*e,this.R*Math.log((1+s)/(1-s))/2)},unproject:function(t){var e=180/Math.PI;return new E((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){var t=li*Math.PI;return new q([-t,-t],[t,t])}()};function Le(t,e,i,n){if(nt(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}Le.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new y((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function Ot(t,e,i,n){return new Le(t,e,i,n)}var we=A({},_t,{code:"EPSG:3857",projection:be,transformation:function(){var t=.5/(Math.PI*be.R);return Ot(t,.5,-t,.5)}()}),Bn=A({},we,{code:"EPSG:900913"});function ui(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ci(t,e){var i="",n,s,o,a,r,l;for(n=0,o=t.length;n<o;n++){for(r=t[n],s=0,a=r.length;s<a;s++)l=r[s],i+=(s?"L":"M")+l.x+" "+l.y;i+=e?p.svg?"z":"x":""}return i||"M0 0"}var xe=document.documentElement.style,Qt="ActiveXObject"in window,Zn=Qt&&!document.addEventListener,di="msLaunchUri"in navigator&&!("documentMode"in document),Pe=at("webkit"),hi=at("android"),pi=at("android 2")||at("android 3"),Nn=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Dn=hi&&at("Google")&&Nn<537&&!("AudioNode"in window),Te=!!window.opera,mi=!di&&at("chrome"),fi=at("gecko")&&!Pe&&!Te&&!Qt,Rn=!mi&&at("safari"),gi=at("phantom"),_i="OTransition"in xe,Fn=navigator.platform.indexOf("Win")===0,vi=Qt&&"transition"in xe,Se="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!pi,yi="MozPerspective"in xe,jn=!window.L_DISABLE_3D&&(vi||Se||yi)&&!_i&&!gi,Bt=typeof orientation<"u"||at("mobile"),Hn=Bt&&Pe,Un=Bt&&Se,bi=!window.PointerEvent&&window.MSPointerEvent,Li=!!(window.PointerEvent||bi),wi="ontouchstart"in window||!!window.TouchEvent,Wn=!window.L_NO_TOUCH&&(wi||Li),Vn=Bt&&Te,Gn=Bt&&fi,Kn=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Yn=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",x,e),window.removeEventListener("testPassiveEventSupport",x,e)}catch{}return t}(),Jn=function(){return!!document.createElement("canvas").getContext}(),Ce=!!(document.createElementNS&&ui("svg").createSVGRect),Xn=!!Ce&&function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Qn=!Ce&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}}(),$n=navigator.platform.indexOf("Mac")===0,ts=navigator.platform.indexOf("Linux")===0;function at(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var p={ie:Qt,ielt9:Zn,edge:di,webkit:Pe,android:hi,android23:pi,androidStock:Dn,opera:Te,chrome:mi,gecko:fi,safari:Rn,phantom:gi,opera12:_i,win:Fn,ie3d:vi,webkit3d:Se,gecko3d:yi,any3d:jn,mobile:Bt,mobileWebkit:Hn,mobileWebkit3d:Un,msPointer:bi,pointer:Li,touch:Wn,touchNative:wi,mobileOpera:Vn,mobileGecko:Gn,retina:Kn,passiveEvents:Yn,canvas:Jn,svg:Ce,vml:Qn,inlineSvg:Xn,mac:$n,linux:ts},xi=p.msPointer?"MSPointerDown":"pointerdown",Pi=p.msPointer?"MSPointerMove":"pointermove",Ti=p.msPointer?"MSPointerUp":"pointerup",Si=p.msPointer?"MSPointerCancel":"pointercancel",Ae={touchstart:xi,touchmove:Pi,touchend:Ti,touchcancel:Si},Ci={touchstart:as,touchmove:$t,touchend:$t,touchcancel:$t},Tt={},Ai=!1;function es(t,e,i){return e==="touchstart"&&os(),Ci[e]?(i=Ci[e].bind(this,i),t.addEventListener(Ae[e],i,!1),i):(console.warn("wrong event specified:",e),x)}function is(t,e,i){if(!Ae[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(Ae[e],i,!1)}function ns(t){Tt[t.pointerId]=t}function ss(t){Tt[t.pointerId]&&(Tt[t.pointerId]=t)}function ki(t){delete Tt[t.pointerId]}function os(){Ai||(document.addEventListener(xi,ns,!0),document.addEventListener(Pi,ss,!0),document.addEventListener(Ti,ki,!0),document.addEventListener(Si,ki,!0),Ai=!0)}function $t(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in Tt)e.touches.push(Tt[i]);e.changedTouches=[e],t(e)}}function as(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&W(e),$t(t,e)}function rs(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var ls=200;function us(t,e){t.addEventListener("dblclick",e);var i=0,n;function s(o){if(o.detail!==1){n=o.detail;return}if(!(o.pointerType==="mouse"||o.sourceCapabilities&&!o.sourceCapabilities.firesTouchEvents)){var a=qi(o);if(!(a.some(function(l){return l instanceof HTMLLabelElement&&l.attributes.for})&&!a.some(function(l){return l instanceof HTMLInputElement||l instanceof HTMLSelectElement}))){var r=Date.now();r-i<=ls?(n++,n===2&&e(rs(o))):n=1,i=r}}}return t.addEventListener("click",s),{dblclick:e,simDblclick:s}}function cs(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var ke=ie(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Zt=ie(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Mi=Zt==="webkitTransition"||Zt==="OTransition"?Zt+"End":"transitionend";function Ei(t){return typeof t=="string"?document.getElementById(t):t}function Nt(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function k(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function O(t){var e=t.parentNode;e&&e.removeChild(t)}function te(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function St(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function Ct(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function Me(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=ee(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function w(t,e){if(t.classList!==void 0)for(var i=V(e),n=0,s=i.length;n<s;n++)t.classList.add(i[n]);else if(!Me(t,e)){var o=ee(t);Ee(t,(o?o+" ":"")+e)}}function N(t,e){t.classList!==void 0?t.classList.remove(e):Ee(t,Z((" "+ee(t)+" ").replace(" "+e+" "," ")))}function Ee(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function ee(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function tt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&ds(t,e)}function ds(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function ie(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function bt(t,e,i){var n=e||new y(0,0);t.style[ke]=(p.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function F(t,e){t._leaflet_pos=e,p.any3d?bt(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Lt(t){return t._leaflet_pos||new y(0,0)}var Dt,Rt,ze;if("onselectstart"in document)Dt=function(){b(window,"selectstart",W)},Rt=function(){I(window,"selectstart",W)};else{var Ft=ie(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Dt=function(){if(Ft){var t=document.documentElement.style;ze=t[Ft],t[Ft]="none"}},Rt=function(){Ft&&(document.documentElement.style[Ft]=ze,ze=void 0)}}function Ie(){b(window,"dragstart",W)}function qe(){I(window,"dragstart",W)}var ne,Oe;function Be(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(se(),ne=t,Oe=t.style.outlineStyle,t.style.outlineStyle="none",b(window,"keydown",se))}function se(){ne&&(ne.style.outlineStyle=Oe,ne=void 0,Oe=void 0,I(window,"keydown",se))}function zi(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Ze(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var hs={__proto__:null,TRANSFORM:ke,TRANSITION:Zt,TRANSITION_END:Mi,get:Ei,getStyle:Nt,create:k,remove:O,empty:te,toFront:St,toBack:Ct,hasClass:Me,addClass:w,removeClass:N,setClass:Ee,getClass:ee,setOpacity:tt,testProp:ie,setTransform:bt,setPosition:F,getPosition:Lt,get disableTextSelection(){return Dt},get enableTextSelection(){return Rt},disableImageDrag:Ie,enableImageDrag:qe,preventOutline:Be,restoreOutline:se,getSizedParentNode:zi,getScale:Ze};function b(t,e,i,n){if(e&&typeof e=="object")for(var s in e)De(t,s,e[s],i);else{e=V(e);for(var o=0,a=e.length;o<a;o++)De(t,e[o],i,n)}return this}var rt="_leaflet_events";function I(t,e,i,n){if(arguments.length===1)Ii(t),delete t[rt];else if(e&&typeof e=="object")for(var s in e)Re(t,s,e[s],i);else if(e=V(e),arguments.length===2)Ii(t,function(r){return _e(e,r)!==-1});else for(var o=0,a=e.length;o<a;o++)Re(t,e[o],i,n);return this}function Ii(t,e){for(var i in t[rt]){var n=i.split(/\d/)[0];(!e||e(n))&&Re(t,n,null,null,i)}}var Ne={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function De(t,e,i,n){var s=e+m(i)+(n?"_"+m(n):"");if(t[rt]&&t[rt][s])return this;var o=function(r){return i.call(n||t,r||window.event)},a=o;!p.touchNative&&p.pointer&&e.indexOf("touch")===0?o=es(t,e,o):p.touch&&e==="dblclick"?o=us(t,o):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Ne[e]||e,o,p.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(o=function(r){r=r||window.event,je(t,r)&&a(r)},t.addEventListener(Ne[e],o,!1)):t.addEventListener(e,a,!1):t.attachEvent("on"+e,o),t[rt]=t[rt]||{},t[rt][s]=o}function Re(t,e,i,n,s){s=s||e+m(i)+(n?"_"+m(n):"");var o=t[rt]&&t[rt][s];if(!o)return this;!p.touchNative&&p.pointer&&e.indexOf("touch")===0?is(t,e,o):p.touch&&e==="dblclick"?cs(t,o):"removeEventListener"in t?t.removeEventListener(Ne[e]||e,o,!1):t.detachEvent("on"+e,o),t[rt][s]=null}function wt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Fe(t){return De(t,"wheel",wt),this}function jt(t){return b(t,"mousedown touchstart dblclick contextmenu",wt),t._leaflet_disable_click=!0,this}function W(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function xt(t){return W(t),wt(t),this}function qi(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function Oi(t,e){if(!e)return new y(t.clientX,t.clientY);var i=Ze(e),n=i.boundingClientRect;return new y((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var ps=p.linux&&p.chrome?window.devicePixelRatio:p.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Bi(t){return p.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/ps:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function je(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var ms={__proto__:null,on:b,off:I,stopPropagation:wt,disableScrollPropagation:Fe,disableClickPropagation:jt,preventDefault:W,stop:xt,getPropagationPath:qi,getMousePosition:Oi,getWheelDelta:Bi,isExternalTarget:je,addListener:b,removeListener:I},Zi=qt.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Lt(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=K(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),F(this._el,i),this.fire("step")},_complete:function(){$(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),C=qt.extend({options:{crs:we,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=M(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=f(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(S(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Zt&&p.any3d&&!p.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),b(this._proxy,Mi,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(S(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=A({animate:i.animate},i.zoom),i.pan=A({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(p.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(p.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),o=t instanceof y?t:this.latLngToContainerPoint(t),a=o.subtract(s).multiplyBy(1-1/n),r=this.containerPointToLatLng(s.add(a));return this.setView(r,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():R(t);var i=v(e.paddingTopLeft||e.padding||[0,0]),n=v(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n));if(s=typeof e.maxZoom=="number"?Math.min(e.maxZoom,s):s,s===1/0)return{center:t.getCenter(),zoom:s};var o=n.subtract(i).divideBy(2),a=this.project(t.getSouthWest(),s),r=this.project(t.getNorthEast(),s),l=this.unproject(a.add(r).divideBy(2).add(o),s);return{center:l,zoom:s}},fitBounds:function(t,e){if(t=R(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=v(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Zi,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){w(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!p.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),s=this.project(t),o=this.getSize(),a=this._zoom;t=S(t),e=e===void 0?a:e;var r=Math.max(o.x,o.y),l=r*this.getZoomScale(a,e),u=s.distanceTo(n)||1,d=1.42,g=d*d;function P(j){var ge=j?-1:1,io=j?l:r,no=l*l-r*r+ge*g*g*u*u,so=2*io*g*u,$e=no/so,vn=Math.sqrt($e*$e+1)-$e,oo=vn<1e-9?-18:Math.log(vn);return oo}function G(j){return(Math.exp(j)-Math.exp(-j))/2}function H(j){return(Math.exp(j)+Math.exp(-j))/2}function it(j){return G(j)/H(j)}var X=P(0);function It(j){return r*(H(X)/H(X+d*j))}function Qs(j){return r*(H(X)*it(X+d*j)-G(X))/g}function $s(j){return 1-Math.pow(1-j,1.5)}var to=Date.now(),gn=(P(1)-X)/d,eo=i.duration?1e3*i.duration:1e3*gn*.8;function _n(){var j=(Date.now()-to)/eo,ge=$s(j)*gn;j<=1?(this._flyToFrame=K(_n,this),this._move(this.unproject(n.add(s.subtract(n).multiplyBy(Qs(ge)/u)),a),this.getScaleZoom(r/It(ge),a),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),_n.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=R(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,R(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=v(e.paddingTopLeft||e.padding||[0,0]),n=v(e.paddingBottomRight||e.padding||[0,0]),s=this.project(this.getCenter()),o=this.project(t),a=this.getPixelBounds(),r=Y([a.min.add(i),a.max.subtract(n)]),l=r.getSize();if(!r.contains(o)){this._enforcingBounds=!0;var u=o.subtract(r.getCenter()),d=r.extend(o).getSize().subtract(l);s.x+=u.x<0?-d.x:d.x,s.y+=u.y<0?-d.y:d.y,this.panTo(this.unproject(s),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=A({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),o=n.subtract(s);return!o.x&&!o.y?this:(t.animate&&t.pan?this.panBy(o):(t.pan&&this._rawPanBy(o),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(f(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=A({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=f(this._handleGeolocationResponse,this),i=f(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new E(e,i),s=n.toBounds(t.coords.accuracy*2),o=this._locateOptions;if(o.setView){var a=this.getBoundsZoom(s);this.setView(n,o.maxZoom?Math.min(a,o.maxZoom):a)}var r={latlng:n,bounds:s,timestamp:t.timestamp};for(var l in t.coords)typeof t.coords[l]=="number"&&(r[l]=t.coords[l]);this.fire("locationfound",r)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),O(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&($(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)O(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=k("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new J(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=R(t),i=v(i||[0,0]);var n=this.getZoom()||0,s=this.getMinZoom(),o=this.getMaxZoom(),a=t.getNorthWest(),r=t.getSouthEast(),l=this.getSize().subtract(i),u=Y(this.project(r,n),this.project(a,n)).getSize(),d=p.any3d?this.options.zoomSnap:1,g=l.x/u.x,P=l.y/u.y,G=e?Math.max(g,P):Math.min(g,P);return n=this.getScaleZoom(G,n),d&&(n=Math.round(n/(d/100))*(d/100),n=e?Math.ceil(n/d)*d:Math.floor(n/d)*d),Math.max(s,Math.min(o,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new y(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new q(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(S(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(v(t),e)},layerPointToLatLng:function(t){var e=v(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(S(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(S(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(R(t))},distance:function(t,e){return this.options.crs.distance(S(t),S(e))},containerPointToLayerPoint:function(t){return v(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return v(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(v(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(S(t)))},mouseEventToContainerPoint:function(t){return Oi(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=Ei(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");b(e,"scroll",this._onScroll,this),this._containerId=m(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&p.any3d,w(t,"leaflet-container"+(p.touch?" leaflet-touch":"")+(p.retina?" leaflet-retina":"")+(p.ielt9?" leaflet-oldie":"")+(p.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=Nt(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),F(this._mapPane,new y(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(w(t.markerPane,"leaflet-zoom-hide"),w(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){F(this._mapPane,new y(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var s=this._zoom!==e;this._moveStart(s,i)._move(t,e)._moveEnd(s),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var s=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((s||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return $(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){F(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[m(this._container)]=this;var e=t?I:b;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),p.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){$(this._resizeRequest),this._resizeRequest=K(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,s=e==="mouseout"||e==="mouseover",o=t.target||t.srcElement,a=!1;o;){if(n=this._targets[m(o)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){a=!0;break}if(n&&n.listens(e,!0)&&(s&&!je(o,t)||(i.push(n),s))||o===this._container)break;o=o.parentNode}return!i.length&&!a&&!s&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&Be(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=A({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var s=this._findEventTargets(t,e);if(i){for(var o=[],a=0;a<i.length;a++)i[a].listens(e,!0)&&o.push(i[a]);s=o.concat(s)}if(s.length){e==="contextmenu"&&W(t);var r=s[0],l={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var u=r.getLatLng&&(!r._radius||r._radius<=10);l.containerPoint=u?this.latLngToContainerPoint(r.getLatLng()):this.mouseEventToContainerPoint(t),l.layerPoint=this.containerPointToLayerPoint(l.containerPoint),l.latlng=u?r.getLatLng():this.layerPointToLatLng(l.layerPoint)}for(a=0;a<s.length;a++)if(s[a].fire(e,l,!0),l.originalEvent._stopped||s[a].options.bubblingMouseEvents===!1&&_e(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Lt(this._mapPane)||new y(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return Y([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),o=new q(n.subtract(s),n.add(s)),a=this._getBoundsOffset(o,i,e);return Math.abs(a.x)<=1&&Math.abs(a.y)<=1?t:this.unproject(n.add(a),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new q(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=Y(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),s=n.min.subtract(t.min),o=n.max.subtract(t.max),a=this._rebound(s.x,-o.x),r=this._rebound(s.y,-o.y);return new y(a,r)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=p.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){N(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=k("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=ke,n=this._proxy.style[i];bt(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){O(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();bt(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),s=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(s)?!1:(K(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,w(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(f(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&N(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function fs(t,e){return new C(t,e)}var st=ct.extend({options:{position:"topright"},initialize:function(t){M(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return w(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(O(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),Ht=function(t){return new st(t)};C.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=k("div",e+"control-container",this._container);function n(s,o){var a=e+s+" "+e+o;t[s+o]=k("div",a,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)O(this._controlCorners[t]);O(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Ni=st.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){M(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return st.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(m(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){w(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(w(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):N(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return N(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=k("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),jt(e),Fe(e);var n=this._section=k("section",t+"-list");i&&(this._map.on("click",this.collapse,this),b(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var s=this._layersLink=k("a",t+"-toggle",e);s.href="#",s.title="Layers",s.setAttribute("role","button"),b(s,{keydown:function(o){o.keyCode===13&&this._expandSafely()},click:function(o){W(o),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=k("div",t+"-base",n),this._separator=k("div",t+"-separator",n),this._overlaysList=k("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&m(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(f(function(n,s){return this.options.sortFunction(n.layer,s.layer,n.name,s.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;te(this._baseLayersList),te(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,s=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,s+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&s>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(m(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+m(this),i),this._layerControlInputs.push(n),n.layerId=m(t.layer),b(n,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var o=document.createElement("span");e.appendChild(o),o.appendChild(n),o.appendChild(s);var a=t.overlay?this._overlaysList:this._baseLayersList;return a.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],s=[];this._handlingClick=!0;for(var o=t.length-1;o>=0;o--)e=t[o],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||s.push(i);for(o=0;o<s.length;o++)this._map.hasLayer(s[o])&&this._map.removeLayer(s[o]);for(o=0;o<n.length;o++)this._map.hasLayer(n[o])||this._map.addLayer(n[o]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,b(t,"click",W),this.expand();var e=this;setTimeout(function(){I(t,"click",W),e._preventClick=!1})}}),gs=function(t,e,i){return new Ni(t,e,i)},He=st.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=k("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,s){var o=k("a",i,n);return o.innerHTML=t,o.href="#",o.title=e,o.setAttribute("role","button"),o.setAttribute("aria-label",e),jt(o),b(o,"click",xt),b(o,"click",s,this),b(o,"click",this._refocusOnMap,this),o},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";N(this._zoomInButton,e),N(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(w(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(w(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});C.mergeOptions({zoomControl:!0}),C.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new He,this.addControl(this.zoomControl))});var _s=function(t){return new He(t)},Di=st.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=k("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=k("div",e,i)),t.imperial&&(this._iScale=k("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,s;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(s=this._getRoundNum(e),this._updateScale(this._iScale,s+" ft",s/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),vs=function(t){return new Di(t)},ys='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Ue=st.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(p.inlineSvg?ys+" ":"")+"Leaflet</a>"},initialize:function(t){M(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=k("div","leaflet-control-attribution"),jt(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});C.mergeOptions({attributionControl:!0}),C.addInitHook(function(){this.options.attributionControl&&new Ue().addTo(this)});var bs=function(t){return new Ue(t)};st.Layers=Ni,st.Zoom=He,st.Scale=Di,st.Attribution=Ue,Ht.layers=gs,Ht.zoom=_s,Ht.scale=vs,Ht.attribution=bs;var lt=ct.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});lt.addTo=function(t,e){return t.addHandler(e,this),this};var Ls={Events:Q},Ri=p.touch?"touchstart mousedown":"mousedown",vt=qt.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){M(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(b(this._dragStartTarget,Ri,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(vt._dragging===this&&this.finishDrag(!0),I(this._dragStartTarget,Ri,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!Me(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){vt._dragging===this&&this.finishDrag();return}if(!(vt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(vt._dragging=this,this._preventOutline&&Be(this._element),Ie(),Dt(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=zi(this._element);this._startPoint=new y(e.clientX,e.clientY),this._startPos=Lt(this._element),this._parentScale=Ze(i);var n=t.type==="mousedown";b(document,n?"mousemove":"touchmove",this._onMove,this),b(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new y(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,W(t),this._moved||(this.fire("dragstart"),this._moved=!0,w(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),w(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),F(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){N(document.body,"leaflet-dragging"),this._lastTarget&&(N(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),I(document,"mousemove touchmove",this._onMove,this),I(document,"mouseup touchend touchcancel",this._onUp,this),qe(),Rt();var e=this._moved&&this._moving;this._moving=!1,vt._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Fi(t,e,i){var n,s=[1,4,2,8],o,a,r,l,u,d,g,P;for(o=0,d=t.length;o<d;o++)t[o]._code=Pt(t[o],e);for(r=0;r<4;r++){for(g=s[r],n=[],o=0,d=t.length,a=d-1;o<d;a=o++)l=t[o],u=t[a],l._code&g?u._code&g||(P=oe(u,l,g,e,i),P._code=Pt(P,e),n.push(P)):(u._code&g&&(P=oe(u,l,g,e,i),P._code=Pt(P,e),n.push(P)),n.push(l));t=n}return t}function ji(t,e){var i,n,s,o,a,r,l,u,d;if(!t||t.length===0)throw new Error("latlngs not passed");et(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var g=S([0,0]),P=R(t),G=P.getNorthWest().distanceTo(P.getSouthWest())*P.getNorthEast().distanceTo(P.getNorthWest());G<1700&&(g=We(t));var H=t.length,it=[];for(i=0;i<H;i++){var X=S(t[i]);it.push(e.project(S([X.lat-g.lat,X.lng-g.lng])))}for(r=l=u=0,i=0,n=H-1;i<H;n=i++)s=it[i],o=it[n],a=s.y*o.x-o.y*s.x,l+=(s.x+o.x)*a,u+=(s.y+o.y)*a,r+=a*3;r===0?d=it[0]:d=[l/r,u/r];var It=e.unproject(v(d));return S([It.lat+g.lat,It.lng+g.lng])}function We(t){for(var e=0,i=0,n=0,s=0;s<t.length;s++){var o=S(t[s]);e+=o.lat,i+=o.lng,n++}return S([e/n,i/n])}var ws={__proto__:null,clipPolygon:Fi,polygonCenter:ji,centroid:We};function Hi(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=Ts(t,i),t=Ps(t,i),t}function Ui(t,e,i){return Math.sqrt(Ut(t,e,i,!0))}function xs(t,e,i){return Ut(t,e,i)}function Ps(t,e){var i=t.length,n=typeof Uint8Array!=void 0+""?Uint8Array:Array,s=new n(i);s[0]=s[i-1]=1,Ve(t,s,e,0,i-1);var o,a=[];for(o=0;o<i;o++)s[o]&&a.push(t[o]);return a}function Ve(t,e,i,n,s){var o=0,a,r,l;for(r=n+1;r<=s-1;r++)l=Ut(t[r],t[n],t[s],!0),l>o&&(a=r,o=l);o>i&&(e[a]=1,Ve(t,e,i,n,a),Ve(t,e,i,a,s))}function Ts(t,e){for(var i=[t[0]],n=1,s=0,o=t.length;n<o;n++)Ss(t[n],t[s])>e&&(i.push(t[n]),s=n);return s<o-1&&i.push(t[o-1]),i}var Wi;function Vi(t,e,i,n,s){var o=n?Wi:Pt(t,i),a=Pt(e,i),r,l,u;for(Wi=a;;){if(!(o|a))return[t,e];if(o&a)return!1;r=o||a,l=oe(t,e,r,i,s),u=Pt(l,i),r===o?(t=l,o=u):(e=l,a=u)}}function oe(t,e,i,n,s){var o=e.x-t.x,a=e.y-t.y,r=n.min,l=n.max,u,d;return i&8?(u=t.x+o*(l.y-t.y)/a,d=l.y):i&4?(u=t.x+o*(r.y-t.y)/a,d=r.y):i&2?(u=l.x,d=t.y+a*(l.x-t.x)/o):i&1&&(u=r.x,d=t.y+a*(r.x-t.x)/o),new y(u,d,s)}function Pt(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function Ss(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function Ut(t,e,i,n){var s=e.x,o=e.y,a=i.x-s,r=i.y-o,l=a*a+r*r,u;return l>0&&(u=((t.x-s)*a+(t.y-o)*r)/l,u>1?(s=i.x,o=i.y):u>0&&(s+=a*u,o+=r*u)),a=t.x-s,r=t.y-o,n?a*a+r*r:new y(s,o)}function et(t){return!nt(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function Gi(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),et(t)}function Ki(t,e){var i,n,s,o,a,r,l,u;if(!t||t.length===0)throw new Error("latlngs not passed");et(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var d=S([0,0]),g=R(t),P=g.getNorthWest().distanceTo(g.getSouthWest())*g.getNorthEast().distanceTo(g.getNorthWest());P<1700&&(d=We(t));var G=t.length,H=[];for(i=0;i<G;i++){var it=S(t[i]);H.push(e.project(S([it.lat-d.lat,it.lng-d.lng])))}for(i=0,n=0;i<G-1;i++)n+=H[i].distanceTo(H[i+1])/2;if(n===0)u=H[0];else for(i=0,o=0;i<G-1;i++)if(a=H[i],r=H[i+1],s=a.distanceTo(r),o+=s,o>n){l=(o-n)/s,u=[r.x-l*(r.x-a.x),r.y-l*(r.y-a.y)];break}var X=e.unproject(v(u));return S([X.lat+d.lat,X.lng+d.lng])}var Cs={__proto__:null,simplify:Hi,pointToSegmentDistance:Ui,closestPointOnSegment:xs,clipSegment:Vi,_getEdgeIntersection:oe,_getBitCode:Pt,_sqClosestPointOnSegment:Ut,isFlat:et,_flat:Gi,polylineCenter:Ki},Ge={project:function(t){return new y(t.lng,t.lat)},unproject:function(t){return new E(t.y,t.x)},bounds:new q([-180,-90],[180,90])},Ke={R:6378137,R_MINOR:6356752314245179e-9,bounds:new q([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,s=this.R_MINOR/i,o=Math.sqrt(1-s*s),a=o*Math.sin(n),r=Math.tan(Math.PI/4-n/2)/Math.pow((1-a)/(1+a),o/2);return n=-i*Math.log(Math.max(r,1e-10)),new y(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,s=Math.sqrt(1-n*n),o=Math.exp(-t.y/i),a=Math.PI/2-2*Math.atan(o),r=0,l=.1,u;r<15&&Math.abs(l)>1e-7;r++)u=s*Math.sin(a),u=Math.pow((1-u)/(1+u),s/2),l=Math.PI/2-2*Math.atan(o*u)-a,a+=l;return new E(a*e,t.x*e/i)}},As={__proto__:null,LonLat:Ge,Mercator:Ke,SphericalMercator:be},ks=A({},_t,{code:"EPSG:3395",projection:Ke,transformation:function(){var t=.5/(Math.PI*Ke.R);return Ot(t,.5,-t,.5)}()}),Yi=A({},_t,{code:"EPSG:4326",projection:Ge,transformation:Ot(1/180,1,-1/180,.5)}),Ms=A({},dt,{projection:Ge,transformation:Ot(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});dt.Earth=_t,dt.EPSG3395=ks,dt.EPSG3857=we,dt.EPSG900913=Bn,dt.EPSG4326=Yi,dt.Simple=Ms;var ot=qt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[m(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[m(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});C.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=m(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=m(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return m(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?nt(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[m(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=m(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var s=this._zoomBoundLayers[n].options;t=s.minZoom===void 0?t:Math.min(t,s.minZoom),e=s.maxZoom===void 0?e:Math.max(e,s.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var At=ot.extend({initialize:function(t,e){M(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return m(t)}}),Es=function(t,e){return new At(t,e)},ht=At.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),At.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),At.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new J;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),zs=function(t,e){return new ht(t,e)},kt=ct.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){M(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var s=v(n),o=v(e==="shadow"&&i.shadowAnchor||i.iconAnchor||s&&s.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),o&&(t.style.marginLeft=-o.x+"px",t.style.marginTop=-o.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return p.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function Is(t){return new kt(t)}var Wt=kt.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof Wt.imagePath!="string"&&(Wt.imagePath=this._detectIconPath()),(this.options.imagePath||Wt.imagePath)+kt.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,s){var o=n.exec(i);return o&&o[s]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=k("div","leaflet-default-icon-path",document.body),e=Nt(t,"background-image")||Nt(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),Ji=lt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new vt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),w(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&N(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,s=this._marker.options.autoPanPadding,o=Lt(e._icon),a=i.getPixelBounds(),r=i.getPixelOrigin(),l=Y(a.min._subtract(r).add(s),a.max._subtract(r).subtract(s));if(!l.contains(o)){var u=v((Math.max(l.max.x,o.x)-l.max.x)/(a.max.x-l.max.x)-(Math.min(l.min.x,o.x)-l.min.x)/(a.min.x-l.min.x),(Math.max(l.max.y,o.y)-l.max.y)/(a.max.y-l.max.y)-(Math.min(l.min.y,o.y)-l.min.y)/(a.min.y-l.min.y)).multiplyBy(n);i.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),F(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=K(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&($(this._panRequest),this._panRequest=K(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Lt(e._icon),s=e._map.layerPointToLatLng(n);i&&F(i,n),e._latlng=s,t.latlng=s,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){$(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),ae=ot.extend({options:{icon:new Wt,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){M(this,e),this._latlng=S(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=S(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),w(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&b(i,"focus",this._panOnFocus,this);var s=t.icon.createShadow(this._shadow),o=!1;s!==this._shadow&&(this._removeShadow(),o=!0),s&&(w(s,e),s.alt=""),this._shadow=s,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),s&&o&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&I(this._icon,"focus",this._panOnFocus,this),O(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&O(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&F(this._icon,t),this._shadow&&F(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(w(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ji)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ji(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&tt(this._icon,t),this._shadow&&tt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?v(e.iconSize):v(0,0),n=e.iconAnchor?v(e.iconAnchor):v(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function qs(t,e){return new ae(t,e)}var yt=ot.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return M(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),re=yt.extend({options:{fill:!0,radius:10},initialize:function(t,e){M(this,e),this._latlng=S(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=S(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return yt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new q(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Os(t,e){return new re(t,e)}var Ye=re.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=A({},i,{radius:e})),M(this,e),this._latlng=S(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new J(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:yt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===_t.distance){var s=Math.PI/180,o=this._mRadius/_t.R/s,a=i.project([e+o,t]),r=i.project([e-o,t]),l=a.add(r).divideBy(2),u=i.unproject(l).lat,d=Math.acos((Math.cos(o*s)-Math.sin(e*s)*Math.sin(u*s))/(Math.cos(e*s)*Math.cos(u*s)))/s;(isNaN(d)||d===0)&&(d=o/Math.cos(Math.PI/180*e)),this._point=l.subtract(i.getPixelOrigin()),this._radius=isNaN(d)?0:l.x-i.project([u,t-d]).x,this._radiusY=l.y-a.y}else{var g=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(g).x}this._updateBounds()}});function Bs(t,e,i){return new Ye(t,e,i)}var pt=yt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){M(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=Ut,s,o,a=0,r=this._parts.length;a<r;a++)for(var l=this._parts[a],u=1,d=l.length;u<d;u++){s=l[u-1],o=l[u];var g=n(t,s,o,!0);g<e&&(e=g,i=n(t,s,o))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ki(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=S(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new J,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return et(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=et(t),n=0,s=t.length;n<s;n++)i?(e[n]=S(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new q;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new y(t,t);this._rawPxBounds&&(this._pxBounds=new q([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof E,s=t.length,o,a;if(n){for(a=[],o=0;o<s;o++)a[o]=this._map.latLngToLayerPoint(t[o]),i.extend(a[o]);e.push(a)}else for(o=0;o<s;o++)this._projectLatlngs(t[o],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,s,o,a,r,l;for(i=0,s=0,o=this._rings.length;i<o;i++)for(l=this._rings[i],n=0,a=l.length;n<a-1;n++)r=Vi(l[n],l[n+1],t,n,!0),r&&(e[s]=e[s]||[],e[s].push(r[0]),(r[1]!==l[n+1]||n===a-2)&&(e[s].push(r[1]),s++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=Hi(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,s,o,a,r,l=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,o=this._parts.length;i<o;i++)for(r=this._parts[i],n=0,a=r.length,s=a-1;n<a;s=n++)if(!(!e&&n===0)&&Ui(t,r[s],r[n])<=l)return!0;return!1}});function Zs(t,e){return new pt(t,e)}pt._flat=Gi;var Mt=pt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ji(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=pt.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof E&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){pt.prototype._setLatLngs.call(this,t),et(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return et(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new y(e,e);if(t=new q(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,s=this._rings.length,o;n<s;n++)o=Fi(this._rings[n],t,!0),o.length&&this._parts.push(o)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,s,o,a,r,l,u;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,l=this._parts.length;o<l;o++)for(i=this._parts[o],a=0,u=i.length,r=u-1;a<u;r=a++)n=i[a],s=i[r],n.y>t.y!=s.y>t.y&&t.x<(s.x-n.x)*(t.y-n.y)/(s.y-n.y)+n.x&&(e=!e);return e||pt.prototype._containsPoint.call(this,t,!0)}});function Ns(t,e){return new Mt(t,e)}var mt=ht.extend({initialize:function(t,e){M(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=nt(t)?t:t.features,i,n,s;if(e){for(i=0,n=e.length;i<n;i++)s=e[i],(s.geometries||s.geometry||s.features||s.coordinates)&&this.addData(s);return this}var o=this.options;if(o.filter&&!o.filter(t))return this;var a=le(t,o);return a?(a.feature=de(t),a.defaultOptions=a.options,this.resetStyle(a),o.onEachFeature&&o.onEachFeature(t,a),this.addLayer(a)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=A({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function le(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,s=[],o=e&&e.pointToLayer,a=e&&e.coordsToLatLng||Je,r,l,u,d;if(!n&&!i)return null;switch(i.type){case"Point":return r=a(n),Xi(o,t,r,e);case"MultiPoint":for(u=0,d=n.length;u<d;u++)r=a(n[u]),s.push(Xi(o,t,r,e));return new ht(s);case"LineString":case"MultiLineString":return l=ue(n,i.type==="LineString"?0:1,a),new pt(l,e);case"Polygon":case"MultiPolygon":return l=ue(n,i.type==="Polygon"?1:2,a),new Mt(l,e);case"GeometryCollection":for(u=0,d=i.geometries.length;u<d;u++){var g=le({geometry:i.geometries[u],type:"Feature",properties:t.properties},e);g&&s.push(g)}return new ht(s);case"FeatureCollection":for(u=0,d=i.features.length;u<d;u++){var P=le(i.features[u],e);P&&s.push(P)}return new ht(s);default:throw new Error("Invalid GeoJSON object.")}}function Xi(t,e,i,n){return t?t(e,i):new ae(i,n&&n.markersInheritOptions&&n)}function Je(t){return new E(t[1],t[0],t[2])}function ue(t,e,i){for(var n=[],s=0,o=t.length,a;s<o;s++)a=e?ue(t[s],e-1,i):(i||Je)(t[s]),n.push(a);return n}function Xe(t,e){return t=S(t),t.alt!==void 0?[B(t.lng,e),B(t.lat,e),B(t.alt,e)]:[B(t.lng,e),B(t.lat,e)]}function ce(t,e,i,n){for(var s=[],o=0,a=t.length;o<a;o++)s.push(e?ce(t[o],et(t[o])?0:e-1,i,n):Xe(t[o],n));return!e&&i&&s.length>0&&s.push(s[0].slice()),s}function Et(t,e){return t.feature?A({},t.feature,{geometry:e}):de(e)}function de(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Qe={toGeoJSON:function(t){return Et(this,{type:"Point",coordinates:Xe(this.getLatLng(),t)})}};ae.include(Qe),Ye.include(Qe),re.include(Qe),pt.include({toGeoJSON:function(t){var e=!et(this._latlngs),i=ce(this._latlngs,e?1:0,!1,t);return Et(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),Mt.include({toGeoJSON:function(t){var e=!et(this._latlngs),i=e&&!et(this._latlngs[0]),n=ce(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),Et(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),At.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Et(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(s){if(s.toGeoJSON){var o=s.toGeoJSON(t);if(i)n.push(o.geometry);else{var a=de(o);a.type==="FeatureCollection"?n.push.apply(n,a.features):n.push(a)}}}),i?Et(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function Qi(t,e){return new mt(t,e)}var Ds=Qi,he=ot.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=R(e),M(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(w(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){O(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&St(this._image),this},bringToBack:function(){return this._map&&Ct(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=R(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:k("img");if(w(e,"leaflet-image-layer"),this._zoomAnimated&&w(e,"leaflet-zoom-animated"),this.options.className&&w(e,this.options.className),e.onselectstart=x,e.onmousemove=x,e.onload=f(this.fire,this,"load"),e.onerror=f(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;bt(this._image,i,e)},_reset:function(){var t=this._image,e=new q(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();F(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){tt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Rs=function(t,e,i){return new he(t,e,i)},$i=he.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:k("video");if(w(e,"leaflet-image-layer"),this._zoomAnimated&&w(e,"leaflet-zoom-animated"),this.options.className&&w(e,this.options.className),e.onselectstart=x,e.onmousemove=x,e.onloadeddata=f(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],s=0;s<i.length;s++)n.push(i[s].src);this._url=i.length>0?n:[e.src];return}nt(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var a=k("source");a.src=this._url[o],e.appendChild(a)}}});function Fs(t,e,i){return new $i(t,e,i)}var tn=he.extend({_initImage:function(){var t=this._image=this._url;w(t,"leaflet-image-layer"),this._zoomAnimated&&w(t,"leaflet-zoom-animated"),this.options.className&&w(t,this.options.className),t.onselectstart=x,t.onmousemove=x}});function js(t,e,i){return new tn(t,e,i)}var ut=ot.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof E||nt(t))?(this._latlng=S(t),M(this,e)):(M(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&tt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&tt(this._container,1),this.bringToFront(),this.options.interactive&&(w(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(tt(this._container,0),this._removeTimeout=setTimeout(f(O,void 0,this._container),200)):O(this._container),this.options.interactive&&(N(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=S(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&St(this._container),this},bringToBack:function(){return this._map&&Ct(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof ht){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=v(this.options.offset),i=this._getAnchor();this._zoomAnimated?F(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,s=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=s+"px"}},_getAnchor:function(){return[0,0]}});C.include({_initOverlay:function(t,e,i,n){var s=e;return s instanceof t||(s=new t(n).setContent(e)),i&&s.setLatLng(i),s}}),ot.include({_initOverlay:function(t,e,i,n){var s=i;return s instanceof t?(M(s,n),s._source=this):(s=e&&!n?e:new t(n,this),s.setContent(i)),s}});var pe=ut.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,ut.prototype.openOn.call(this,t)},onAdd:function(t){ut.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof yt||this._source.on("preclick",wt))},onRemove:function(t){ut.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof yt||this._source.off("preclick",wt))},getEvents:function(){var t=ut.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=k("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=k("div",t+"-content-wrapper",e);if(this._contentNode=k("div",t+"-content",i),jt(e),Fe(this._contentNode),b(e,"contextmenu",wt),this._tipContainer=k("div",t+"-tip-container",e),this._tip=k("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=k("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',b(n,"click",function(s){W(s),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,o="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",w(t,o)):N(t,o),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();F(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(Nt(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,s=new y(this._containerLeft,-i-this._containerBottom);s._add(Lt(this._container));var o=t.layerPointToContainerPoint(s),a=v(this.options.autoPanPadding),r=v(this.options.autoPanPaddingTopLeft||a),l=v(this.options.autoPanPaddingBottomRight||a),u=t.getSize(),d=0,g=0;o.x+n+l.x>u.x&&(d=o.x+n-u.x+l.x),o.x-d-r.x<0&&(d=o.x-r.x),o.y+i+l.y>u.y&&(g=o.y+i-u.y+l.y),o.y-g-r.y<0&&(g=o.y-r.y),(d||g)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([d,g]))}},_getAnchor:function(){return v(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Hs=function(t,e){return new pe(t,e)};C.mergeOptions({closePopupOnClick:!0}),C.include({openPopup:function(t,e,i){return this._initOverlay(pe,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),ot.include({bindPopup:function(t,e){return this._popup=this._initOverlay(pe,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof ht||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){xt(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof yt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var me=ut.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){ut.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){ut.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=ut.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=k("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+m(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,s=this._container,o=n.latLngToContainerPoint(n.getCenter()),a=n.layerPointToContainerPoint(t),r=this.options.direction,l=s.offsetWidth,u=s.offsetHeight,d=v(this.options.offset),g=this._getAnchor();r==="top"?(e=l/2,i=u):r==="bottom"?(e=l/2,i=0):r==="center"?(e=l/2,i=u/2):r==="right"?(e=0,i=u/2):r==="left"?(e=l,i=u/2):a.x<o.x?(r="right",e=0,i=u/2):(r="left",e=l+(d.x+g.x)*2,i=u/2),t=t.subtract(v(e,i,!0)).add(d).add(g),N(s,"leaflet-tooltip-right"),N(s,"leaflet-tooltip-left"),N(s,"leaflet-tooltip-top"),N(s,"leaflet-tooltip-bottom"),w(s,"leaflet-tooltip-"+r),F(s,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&tt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return v(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Us=function(t,e){return new me(t,e)};C.include({openTooltip:function(t,e,i){return this._initOverlay(me,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),ot.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(me,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof ht||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(b(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),b(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var en=kt.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(te(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=v(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function Ws(t){return new en(t)}kt.Default=Wt;var Vt=ot.extend({options:{tileSize:256,opacity:1,updateWhenIdle:p.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){M(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),O(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(St(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ct(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=U(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof y?t:new y(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,s=e.length,o;n<s;n++)o=e[n].style.zIndex,e[n]!==this._container&&o&&(i=t(i,+o));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!p.ielt9){tt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var s=this._tiles[n];if(!(!s.current||!s.loaded)){var o=Math.min(1,(t-s.loaded)/200);tt(s.el,o),o<1?e=!0:(s.active?i=!0:this._onOpaqueTile(s),s.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&($(this._fadeFrame),this._fadeFrame=K(this._updateOpacity,this))}},_onOpaqueTile:x,_initContainer:function(){this._container||(this._container=k("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(O(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],s=this._map;return n||(n=this._levels[t]={},n.el=k("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=s.project(s.unproject(s.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,s.getCenter(),s.getZoom()),x(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:x,_onRemoveLevel:x,_onCreateLevel:x,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)O(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var s=Math.floor(t/2),o=Math.floor(e/2),a=i-1,r=new y(+s,+o);r.z=+a;var l=this._tileCoordsToKey(r),u=this._tiles[l];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),a>n?this._retainParent(s,o,a,n):!1)},_retainChildren:function(t,e,i,n){for(var s=2*t;s<2*t+2;s++)for(var o=2*e;o<2*e+2;o++){var a=new y(s,o);a.z=i+1;var r=this._tileCoordsToKey(a),l=this._tiles[r];if(l&&l.active){l.retain=!0;continue}else l&&l.loaded&&(l.retain=!0);i+1<n&&this._retainChildren(s,o,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var s=Math.round(e);this.options.maxZoom!==void 0&&s>this.options.maxZoom||this.options.minZoom!==void 0&&s<this.options.minZoom?s=void 0:s=this._clampZoom(s);var o=this.options.updateWhenZooming&&s!==this._tileZoom;(!n||o)&&(this._tileZoom=s,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),s!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),s=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();p.any3d?bt(t.el,s,n):F(t.el,s)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,s=this._map.getPixelWorldBounds(this._tileZoom);s&&(this._globalTileRange=this._pxBoundsToTileRange(s)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),s=e.project(t,this._tileZoom).floor(),o=e.getSize().divideBy(n*2);return new q(s.subtract(o),s.add(o))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),s=this._pxBoundsToTileRange(n),o=s.getCenter(),a=[],r=this.options.keepBuffer,l=new q(s.getBottomLeft().subtract([r,-r]),s.getTopRight().add([r,-r]));if(!(isFinite(s.min.x)&&isFinite(s.min.y)&&isFinite(s.max.x)&&isFinite(s.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var d=this._tiles[u].coords;(d.z!==this._tileZoom||!l.contains(new y(d.x,d.y)))&&(this._tiles[u].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var g=s.min.y;g<=s.max.y;g++)for(var P=s.min.x;P<=s.max.x;P++){var G=new y(P,g);if(G.z=this._tileZoom,!!this._isValidTile(G)){var H=this._tiles[this._tileCoordsToKey(G)];H?H.current=!0:a.push(G)}}if(a.sort(function(X,It){return X.distanceTo(o)-It.distanceTo(o)}),a.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var it=document.createDocumentFragment();for(P=0;P<a.length;P++)this._addTile(a[P],it);this._level.el.appendChild(it)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return R(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),s=n.add(i),o=e.unproject(n,t.z),a=e.unproject(s,t.z);return[o,a]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new J(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new y(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(O(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){w(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=x,t.onmousemove=x,p.ielt9&&this.options.opacity<1&&tt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),f(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&K(f(this._tileReady,this,t,null,s)),F(s,i),this._tiles[n]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(tt(i.el,0),$(this._fadeFrame),this._fadeFrame=K(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(w(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),p.ielt9||!this._map._fadeAnimated?K(this._pruneTiles,this):setTimeout(f(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new y(this._wrapX?_(t.x,this._wrapX):t.x,this._wrapY?_(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new q(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Vs(t){return new Vt(t)}var zt=Vt.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=M(this,e),e.detectRetina&&p.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return b(i,"load",f(this._tileOnLoad,this,e,i)),b(i,"error",f(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:p.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return ni(this._url,A(e,this.options))},_tileOnLoad:function(t,e){p.ielt9?setTimeout(f(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=x,e.onerror=x,!e.complete)){e.src=Xt;var i=this._tiles[t].coords;O(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",Xt),Vt.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===Xt))return Vt.prototype._tileReady.call(this,t,e,i)}});function nn(t,e){return new zt(t,e)}var sn=zt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=A({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=M(this,e);var s=e.detectRetina&&p.retina?2:1,o=this.getTileSize();i.width=o.x*s,i.height=o.y*s,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,zt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=Y(i.project(e[0]),i.project(e[1])),s=n.min,o=n.max,a=(this._wmsVersion>=1.3&&this._crs===Yi?[s.y,s.x,o.y,o.x]:[s.x,s.y,o.x,o.y]).join(","),r=zt.prototype.getTileUrl.call(this,t);return r+Jt(this.wmsParams,r,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+a},setParams:function(t,e){return A(this.wmsParams,t),e||this.redraw(),this}});function Gs(t,e){return new sn(t,e)}zt.WMS=sn,nn.wms=Gs;var ft=ot.extend({options:{padding:.1},initialize:function(t){M(this,t),m(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),w(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,e),o=n.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t,e));p.any3d?bt(this._container,o,i):F(this._container,o)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new q(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),on=ft.extend({options:{tolerance:0},getEvents:function(){var t=ft.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){ft.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");b(t,"mousemove",this._onMouseMove,this),b(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),b(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){$(this._redrawRequest),delete this._ctx,O(this._container),I(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ft.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=p.retina?2:1;F(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",p.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){ft.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[m(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[m(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,s;for(s=0;s<e.length;s++){if(n=Number(e[s]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||K(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new q,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,s,o,a=t._parts,r=a.length,l=this._ctx;if(r){for(l.beginPath(),i=0;i<r;i++){for(n=0,s=a[i].length;n<s;n++)o=a[i][n],l[n?"lineTo":"moveTo"](o.x,o.y);e&&l.closePath()}this._fillStroke(l,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),s=(Math.max(Math.round(t._radiusY),1)||n)/n;s!==1&&(i.save(),i.scale(1,s)),i.beginPath(),i.arc(e.x,e.y/s,n,0,Math.PI*2,!1),s!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(N(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(w(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(f(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function an(t){return p.canvas?new on(t):null}var Gt=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Ks={_initContainer:function(){this._container=k("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(ft.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Gt("shape");w(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Gt("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[m(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;O(e),t.removeInteractiveTarget(e),delete this._layers[m(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,s=t._container;s.stroked=!!n.stroke,s.filled=!!n.fill,n.stroke?(e||(e=t._stroke=Gt("stroke")),s.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=nt(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(s.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=Gt("fill")),s.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(s.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){St(t._container)},_bringToBack:function(t){Ct(t._container)}},fe=p.vml?Gt:ui,Kt=ft.extend({_initContainer:function(){this._container=fe("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=fe("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){O(this._container),I(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ft.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),F(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=fe("path");t.options.className&&w(e,t.options.className),t.options.interactive&&w(e,"leaflet-interactive"),this._updateStyle(t),this._layers[m(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){O(t._path),t.removeInteractiveTarget(t._path),delete this._layers[m(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,ci(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,s="a"+i+","+n+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+s+i*2+",0 "+s+-i*2+",0 ";this._setPath(t,o)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){St(t._path)},_bringToBack:function(t){Ct(t._path)}});p.vml&&Kt.include(Ks);function rn(t){return p.svg||p.vml?new Kt(t):null}C.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&an(t)||rn(t)}});var ln=Mt.extend({initialize:function(t,e){Mt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=R(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Ys(t,e){return new ln(t,e)}Kt.create=fe,Kt.pointsToPath=ci,mt.geometryToLayer=le,mt.coordsToLatLng=Je,mt.coordsToLatLngs=ue,mt.latLngToCoords=Xe,mt.latLngsToCoords=ce,mt.getFeature=Et,mt.asFeature=de,C.mergeOptions({boxZoom:!0});var un=lt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){b(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){I(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){O(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Dt(),Ie(),this._startPoint=this._map.mouseEventToContainerPoint(t),b(document,{contextmenu:xt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=k("div","leaflet-zoom-box",this._container),w(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new q(this._point,this._startPoint),i=e.getSize();F(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(O(this._box),N(this._container,"leaflet-crosshair")),Rt(),qe(),I(document,{contextmenu:xt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(f(this._resetState,this),0);var e=new J(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});C.addInitHook("addHandler","boxZoom",un),C.mergeOptions({doubleClickZoom:!0});var cn=lt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,s=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(s):e.setZoomAround(t.containerPoint,s)}});C.addInitHook("addHandler","doubleClickZoom",cn),C.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var dn=lt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new vt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}w(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){N(this._map._container,"leaflet-grab"),N(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=R(this._map.options.maxBounds);this._offsetLimit=Y(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,s=(n-e+i)%t+e-i,o=(n+e+i)%t-e-i,a=Math.abs(s+i)<Math.abs(o+i)?s:o;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=a},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var s=this._lastPos.subtract(this._positions[0]),o=(this._lastTime-this._times[0])/1e3,a=i.easeLinearity,r=s.multiplyBy(a/o),l=r.distanceTo([0,0]),u=Math.min(i.inertiaMaxSpeed,l),d=r.multiplyBy(u/l),g=u/(i.inertiaDeceleration*a),P=d.multiplyBy(-g/2).round();!P.x&&!P.y?e.fire("moveend"):(P=e._limitOffset(P,e.options.maxBounds),K(function(){e.panBy(P,{duration:g,easeLinearity:a,noMoveStart:!0,animate:!0})}))}}});C.addInitHook("addHandler","dragging",dn),C.mergeOptions({keyboard:!0,keyboardPanDelta:80});var hn=lt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),b(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),I(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,s;for(n=0,s=i.left.length;n<s;n++)e[i.left[n]]=[-1*t,0];for(n=0,s=i.right.length;n<s;n++)e[i.right[n]]=[t,0];for(n=0,s=i.down.length;n<s;n++)e[i.down[n]]=[0,t];for(n=0,s=i.up.length;n<s;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,s;for(n=0,s=i.zoomIn.length;n<s;n++)e[i.zoomIn[n]]=t;for(n=0,s=i.zoomOut.length;n<s;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){b(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){I(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=v(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(v(n),i.options.maxBounds)),i.options.worldCopyJump){var s=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(s)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;xt(t)}}});C.addInitHook("addHandler","keyboard",hn),C.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var pn=lt.extend({addHooks:function(){b(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){I(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=Bi(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(f(this._performZoom,this),n),xt(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),s=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,o=i?Math.ceil(s/i)*i:s,a=t._limitZoom(e+(this._delta>0?o:-o))-e;this._delta=0,this._startTime=null,a&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+a):t.setZoomAround(this._lastMousePos,e+a))}});C.addInitHook("addHandler","scrollWheelZoom",pn);var Js=600;C.mergeOptions({tapHold:p.touchNative&&p.safari&&p.mobile,tapTolerance:15});var mn=lt.extend({addHooks:function(){b(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){I(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new y(e.clientX,e.clientY),this._holdTimeout=setTimeout(f(function(){this._cancel(),this._isTapValid()&&(b(document,"touchend",W),b(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),Js),b(document,"touchend touchcancel contextmenu",this._cancel,this),b(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){I(document,"touchend",W),I(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),I(document,"touchend touchcancel contextmenu",this._cancel,this),I(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new y(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});C.addInitHook("addHandler","tapHold",mn),C.mergeOptions({touchZoom:p.touch,bounceAtZoomLimits:!0});var fn=lt.extend({addHooks:function(){w(this._map._container,"leaflet-touch-zoom"),b(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){N(this._map._container,"leaflet-touch-zoom"),I(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),b(document,"touchmove",this._onTouchMove,this),b(document,"touchend touchcancel",this._onTouchEnd,this),W(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),s=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,s===1)return}else{var o=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(s===1&&o.x===0&&o.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),$(this._animRequest);var a=f(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=K(a,this,!0),W(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,$(this._animRequest),I(document,"touchmove",this._onTouchMove,this),I(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});C.addInitHook("addHandler","touchZoom",fn),C.BoxZoom=un,C.DoubleClickZoom=cn,C.Drag=dn,C.Keyboard=hn,C.ScrollWheelZoom=pn,C.TapHold=mn,C.TouchZoom=fn,c.Bounds=q,c.Browser=p,c.CRS=dt,c.Canvas=on,c.Circle=Ye,c.CircleMarker=re,c.Class=ct,c.Control=st,c.DivIcon=en,c.DivOverlay=ut,c.DomEvent=ms,c.DomUtil=hs,c.Draggable=vt,c.Evented=qt,c.FeatureGroup=ht,c.GeoJSON=mt,c.GridLayer=Vt,c.Handler=lt,c.Icon=kt,c.ImageOverlay=he,c.LatLng=E,c.LatLngBounds=J,c.Layer=ot,c.LayerGroup=At,c.LineUtil=Cs,c.Map=C,c.Marker=ae,c.Mixin=Ls,c.Path=yt,c.Point=y,c.PolyUtil=ws,c.Polygon=Mt,c.Polyline=pt,c.Popup=pe,c.PosAnimation=Zi,c.Projection=As,c.Rectangle=ln,c.Renderer=ft,c.SVG=Kt,c.SVGOverlay=tn,c.TileLayer=zt,c.Tooltip=me,c.Transformation=Le,c.Util=qn,c.VideoOverlay=$i,c.bind=f,c.bounds=Y,c.canvas=an,c.circle=Bs,c.circleMarker=Os,c.control=Ht,c.divIcon=Ws,c.extend=A,c.featureGroup=zs,c.geoJSON=Qi,c.geoJson=Ds,c.gridLayer=Vs,c.icon=Is,c.imageOverlay=Rs,c.latLng=S,c.latLngBounds=R,c.layerGroup=Es,c.map=fs,c.marker=qs,c.point=v,c.polygon=Ns,c.polyline=Zs,c.popup=Hs,c.rectangle=Ys,c.setOptions=M,c.stamp=m,c.svg=rn,c.svgOverlay=js,c.tileLayer=nn,c.tooltip=Us,c.transformation=Ot,c.version=gt,c.videoOverlay=Fs;var Xs=window.L;c.noConflict=function(){return window.L=Xs,this},window.L=c})}(Yt,Yt.exports)),Yt.exports}var bn=ii();const Ln=yn(bn),ao="";function wn(D){function T(){document.getElementById("map")?D():setTimeout(T,50)}T()}wn(()=>{var D=!1;function T(){D=/Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)||window.innerWidth<=768,D?(document.body.classList.add("is-mobile"),console.log("Mode mobile activé")):(document.body.classList.remove("is-mobile"),console.log("Mode desktop activé"))}T(),window.addEventListener("resize",T);var c=D?[50,10]:[20,0],gt=4;typeof h<"u"&&h!==null&&h.remove();var A=L.latLngBounds(L.latLng(-85,-180),L.latLng(85,180)),h=L.map("map",{center:c,zoom:gt,maxZoom:6,minZoom:4,maxBounds:A,maxBoundsViscosity:1});let f=!1;h.on("enterFullscreen",()=>{f=!0}),h.on("exitFullscreen",()=>{f=!1}),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors",maxZoom:6,noWrap:!0}).addTo(h),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),h.on("dragstart",function(){h.closePopup();var _=document.getElementById("fullscreen-tooltip"),x=document.getElementById("close-tooltip");_&&(_.style.display="none"),x&&(x.style.display="none"),document.body.classList.remove("tooltip-open")}),h.on("click",function(){h.closePopup();var _=document.getElementById("fullscreen-tooltip"),x=document.getElementById("close-tooltip");_&&(_.style.display="none"),x&&(x.style.display="none"),document.body.classList.remove("tooltip-open")});function z(_){var x=_.properties.shapeGroup||_.properties.GID_0,B=getCountryCategory(x);return{fillColor:B.color,color:"black",weight:1,fillOpacity:.7}}fetch("./all_countries.geojson").then(_=>_.json()).then(_=>{L.geoJSON(_,{style:z,onEachFeature:function(x,B){var Z=x.properties.shapeGroup||x.properties.GID_0;countryMessages[Z]&&B.bindPopup(countryMessages[Z].replace("<h3>",'<h3><img src="https://flagcdn.com/32x24/'+iso3to2[Z]+'.png" class="flag-icon"> '),{className:"custom-tooltip",maxWidth:250})}}).addTo(h)}).catch(_=>console.error("Erreur lors du chargement du GeoJSON",_)),L.icon({iconUrl:attentionPng,iconSize:[32,32],iconAnchor:[16,32]}),L.icon({iconUrl:dangerPng,iconSize:[32,32],iconAnchor:[16,32]}),Object.keys(countryIcons).forEach(function(_){var x=countryIcons[_],B=getCountryCategory(_);if(B.icon){var Z=L.marker(x,{icon:B.icon}).addTo(h);Z.bindPopup(countryMessages[_]?countryMessages[_].replace("<h3>",'<h3><img src="https://flagcdn.com/32x24/'+iso3to2[_]+'.png" class="flag-icon"> '):"Pas de message défini",{className:"custom-tooltip",maxWidth:250}),Z.on("click",function(){Z.openPopup(),console.log("Popup affiché pour le marqueur :",_)})}});var m=L.control({position:"bottomright"});m.onAdd=function(){var _=L.DomUtil.create("div","info legend"),x=["green","orange","red"],B=["Aucune restriction","Certaines restrictions","Interdiction"];return D?(_.innerHTML='<button id="legend-toggle">Afficher légende</button><div id="legend-content" style="display:none;"></div>',setTimeout(()=>{var Z=document.getElementById("legend-content"),V=document.getElementById("legend-toggle");x.forEach(function(M,Jt){Z.innerHTML+='<i style="background:'+M+';width:18px;height:18px;display:inline-block;margin-right:8px"></i>'+B[Jt]+"<br>"}),V.addEventListener("click",function(){Z.style.display==="none"?(Z.style.display="block",V.textContent="Masquer légende"):(Z.style.display="none",V.textContent="Afficher légende")})},0)):x.forEach(function(Z,V){_.innerHTML+='<i style="background:'+Z+';width:18px;height:18px;display:inline-block;margin-right:8px"></i>'+B[V]+"<br>"}),_},m.addTo(h),document.addEventListener("click",function(_){if(_.target&&_.target.classList.contains("more-info")){_.preventDefault();var x=_.target.getAttribute("data-code"),B=detailedInfo[x]||"<h2>Informations non disponibles</h2><p>Désolé, nous n'avons pas encore de détails pour ce pays.</p>";f&&h.toggleFullscreen();var Z=document.getElementById("tooltip-content"),V=document.getElementById("fullscreen-tooltip"),M=document.getElementById("close-tooltip");Z&&V&&M?(Z.innerHTML=B,V.style.display="block",M.style.display="block",document.body.classList.add("tooltip-open"),console.log("Tooltip affiché")):console.error("Les éléments DOM nécessaires pour les tooltips fullscreen sont introuvables.")}});var U=document.getElementById("close-tooltip");U?U.addEventListener("click",function(){var _=document.getElementById("fullscreen-tooltip");_&&(_.style.display="none"),U.style.display="none",document.body.classList.remove("tooltip-open")}):console.error("Le bouton #close-tooltip est introuvable dans le DOM.")});var xn={exports:{}};(function(D){(function(T,c){D.exports?D.exports=c(ii()):c(T.L)})(typeof self<"u"?self:ti,T=>{if(typeof document>"u")return console.warn('"window.document" is undefined; leaflet.fullscreen requires this object to access the DOM'),!1;const c=(()=>{const h=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"]],f=h[0],z={};for(const m of h)if(m[1]in document){for(let U=0;U<m.length;U++)z[f[U]]=m[U];return z}return!1})(),gt={change:c.fullscreenchange,error:c.fullscreenerror},A={request(h,f){return new Promise((z,m)=>{const U=(function(){this.off("change",U),z()}).bind(this);this.on("change",U),h=h||document.documentElement;const _=h[c.requestFullscreen](f);_ instanceof Promise&&_.then(U).catch(m)})},exit(){return new Promise((h,f)=>{if(!this.isFullscreen){h();return}const z=(function(){this.off("change",z),h()}).bind(this);this.on("change",z);const m=document[c.exitFullscreen]();m instanceof Promise&&m.then(z).catch(f)})},on(h,f){const z=gt[h];z&&document.addEventListener(z,f,!1)},off(h,f){const z=gt[h];z&&document.removeEventListener(z,f,!1)},nativeAPI:c};return Object.defineProperties(A,{isFullscreen:{get(){return!!document[c.fullscreenElement]}},isEnabled:{enumerable:!0,get(){return!!document[c.fullscreenEnabled]}}}),T.Control.FullScreen=T.Control.extend({options:{position:"topleft",title:"Full Screen",titleCancel:"Exit Full Screen",forceSeparateButton:!1,forcePseudoFullscreen:!1,fullscreenElement:!1},_screenfull:A,onAdd(h){let f="leaflet-control-zoom-fullscreen",z,m="";return h.zoomControl&&!this.options.forceSeparateButton?z=h.zoomControl._container:z=T.DomUtil.create("div","leaflet-bar"),this.options.content?m=this.options.content:f+=" leaflet-fullscreen-icon",this._createButton(this.options.title,f,m,z,this.toggleFullScreen,this),this._map.fullscreenControl=this,this._map.on("enterFullscreen exitFullscreen",this._toggleState,this),z},onRemove(){T.DomEvent.off(this.link,"click",T.DomEvent.stop).off(this.link,"click",this.toggleFullScreen,this),this._screenfull.isEnabled&&(T.DomEvent.off(this._container,this._screenfull.nativeAPI.fullscreenchange,T.DomEvent.stop).off(this._container,this._screenfull.nativeAPI.fullscreenchange,this._handleFullscreenChange,this),T.DomEvent.off(document,this._screenfull.nativeAPI.fullscreenchange,T.DomEvent.stop).off(document,this._screenfull.nativeAPI.fullscreenchange,this._handleFullscreenChange,this))},_createButton(h,f,z,m,U,_){return this.link=T.DomUtil.create("a",f,m),this.link.href="#",this.link.title=h,this.link.innerHTML=z,this.link.setAttribute("role","button"),this.link.setAttribute("aria-label",h),L.DomEvent.disableClickPropagation(m),T.DomEvent.on(this.link,"click",T.DomEvent.stop).on(this.link,"click",U,_),this._screenfull.isEnabled&&(T.DomEvent.on(m,this._screenfull.nativeAPI.fullscreenchange,T.DomEvent.stop).on(m,this._screenfull.nativeAPI.fullscreenchange,this._handleFullscreenChange,_),T.DomEvent.on(document,this._screenfull.nativeAPI.fullscreenchange,T.DomEvent.stop).on(document,this._screenfull.nativeAPI.fullscreenchange,this._handleFullscreenChange,_)),this.link},toggleFullScreen(){const h=this._map;h._exitFired=!1,h._isFullscreen?(this._screenfull.isEnabled&&!this.options.forcePseudoFullscreen?this._screenfull.exit().then(()=>h.invalidateSize()):(T.DomUtil.removeClass(this.options.fullscreenElement?this.options.fullscreenElement:h._container,"leaflet-pseudo-fullscreen"),h.invalidateSize()),h.fire("exitFullscreen"),h._exitFired=!0,h._isFullscreen=!1):(this._screenfull.isEnabled&&!this.options.forcePseudoFullscreen?this._screenfull.request(this.options.fullscreenElement?this.options.fullscreenElement:h._container).then(()=>h.invalidateSize()):(T.DomUtil.addClass(this.options.fullscreenElement?this.options.fullscreenElement:h._container,"leaflet-pseudo-fullscreen"),h.invalidateSize()),h.fire("enterFullscreen"),h._isFullscreen=!0)},_toggleState(){this.link.title=this._map._isFullscreen?this.options.title:this.options.titleCancel,this._map._isFullscreen?L.DomUtil.removeClass(this.link,"leaflet-fullscreen-on"):L.DomUtil.addClass(this.link,"leaflet-fullscreen-on")},_handleFullscreenChange(h){const f=this._map;h.target===f.getContainer()&&!this._screenfull.isFullscreen&&!f._exitFired&&(this._screenfull.exit().then(()=>f.invalidateSize()),f.fire("exitFullscreen"),f._exitFired=!0,f._isFullscreen=!1)}}),T.Map.include({toggleFullscreen(){this.fullscreenControl.toggleFullScreen()}}),T.Map.addInitHook(function(){this.options.fullscreenControl&&this.addControl(T.control.fullscreen(this.options.fullscreenControlOptions))}),T.control.fullscreen=function(h){return new T.Control.FullScreen(h)},{leaflet:T}})})(xn);const ro="",lo="";var Pn=L.icon({iconUrl:"/assets/attention.png",iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32],className:"attention-marker-icon"}),Tn=L.icon({iconUrl:"/assets/danger.png",iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32],className:"danger-marker-icon"});function Sn(D){return["AUS","BEL","CAN","DNK","EST","FIN","GRC","HUN","IDN","ITA","LKA","LTU","LVA","MYS","NLD","PRT","SVN","TUN","USA"].includes(D)?{color:"orange",icon:Pn}:["ARG","BRA","KHM","CHL","COL","MUS","IND","JPN","LAO","QAT","SGP","THA"].includes(D)?{color:"red",icon:Tn}:{color:"green",icon:null}}var Cn={CAN:[45.4215,-75.6972],CHN:[39.9042,116.4074],KOR:[37.5665,126.978],GRC:[37.9838,23.7275],IDN:[-6.2088,106.8456],ITA:[41.9028,12.4964],MYS:[3.139,101.6869],PRT:[38.7169,-9.1399],TUN:[36.8065,10.1815],USA:[38.9072,-77.0369],AUS:[-35.2809,149.13],ARG:[-34.6037,-58.3816],BRA:[-15.7801,-47.9292],KHM:[11.5564,104.9282],CHL:[-33.4489,-70.6693],COL:[4.711,-74.0721],FIN:[60.1695,24.9354],MUS:[-20.1654,57.4896],IND:[28.6139,77.209],JPN:[35.6895,139.6917],LAO:[17.9757,102.6331],NLD:[52.3676,4.9041],QAT:[25.2769,51.52],SGP:[1.3521,103.8198],LKA:[6.9271,79.8612],THA:[13.7563,100.5018],NZL:[-41.2865,174.7762],GLP:[16.265,-61.55],MAR:[33.5731,-7.5898],MTQ:[14.6415,-61.0242],BEL:[50.8503,4.3517],DNK:[55.6761,12.5683],DZA:[36.7525,3.04197],LVA:[56.9496,24.1052],SVN:[46.0569,14.5058],HUN:[47.4979,19.0402],LTU:[54.6872,25.2797],EST:[59.437,24.7536]},An={CAN:"ca",CHN:"cn",KOR:"kr",GRC:"gr",IDN:"id",ITA:"it",MYS:"my",PRT:"pt",TUN:"tn",USA:"us",AUS:"au",ARG:"ar",BRA:"br",KHM:"kh",CHL:"cl",COL:"co",FIN:"fi",LVA:"lv",MUS:"mu",IND:"in",JPN:"jp",LAO:"la",NLD:"nl",QAT:"qa",SGP:"sg",LKA:"lk",THA:"th",NZL:"nz",GLP:"gp",MAR:"ma",MTQ:"mq",ESP:"es",GBR:"gb",BEL:"be",DNK:"dk",DZA:"dz",SVN:"sv",HUN:"hu",LTU:"lt",EST:"ee"},kn={ARG:`<h3>Argentine</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Apportez votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="ARG">Plus d'info</a>`,AUS:`<h3>Australie</h3> <ul><li>Peu de vapeshops</li><li>Aucun produit de la vape en vente libre, ordonnance médicale nécessaire</li><li>Apportez votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="AUS">Plus d'info</a>`,BEL:`<h3>Belgique</h3><ul><li>Les e-liquides sont taxés</li><li>Les puffs sont interdites</li><li>Emportez votre matériel avec vous.</li></ul> <a href="#" class="more-info" data-code="BEL">Plus d'info</a>`,BRA:`<h3>Brésil</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Apportez votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="BRA">Plus d'info</a>`,CAN:`<h3>Canada</h3> <ul><li>La loi dépend des États. Renseignez-vous auprès des autorités de l'endroit où vous vous rendez.</li></ul> <a href="#" class="more-info" data-code="CAN">Plus d'info</a>`,CHL:`<h3>Chili</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Apportez votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="CHL">Plus d'info</a>`,CHN:`<h3>Chine</h3> <ul><li>La vente en ligne des produits de la vape est interdite</li></ul> <a href="#" class="more-info" data-code="CHN">Plus d'info</a>`,COL:`<h3>Colombie</h3> <ul><li>La vente des produits de la vape est interdite</li><li>Apportez votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="COL">Plus d'info</a>`,DNK:`<h3>Danemark</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Apportez votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="DNK">Plus d'info</a>`,EST:`<h3>Estonie</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Apportez votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="EST">Plus d'info</a>`,FIN:`<h3>Finlande</h3> <ul><li>La grande majorité des arômes sont interdits dans les e-liquides.</li><li>Apportez votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="FIN">Plus d'info</a>`,GRC:`<h3>Grèce</h3> <ul><li>Taxation des e-liquides</li><li>Apportez votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="GRC">Plus d'info</a>`,HUN:`<h3>Hongrie</h3> <ul><li><b>TOUS</b> les arômes sont interdits dans les e-liquides. Les vapoteurs ne sont autorisés qu'à vapoter une base neutre composée de PG, de VG, et éventuellement de nicotine</li><li>Apportez votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="HUN">Plus d'info</a>`,IDN:`<h3>Indonésie</h3> <ul><li>Les vape shops se trouvent principalement à Bali</li><li>Les e-liquides sont fortement taxés</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="IDN">Plus d'info</a>`,IND:`<h3>Inde</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Législation peu claire sur l'utilisation du vaporisateur personnel</li><li>Nous vous déconseillons d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="IND">Plus d'info</a>`,ITA:`<h3>Italie</h3> <ul><li>Les e-liquides sont taxés</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="ITA">Plus d'info</a>`,JPN:`<h3>Japon</h3> <ul><li>La nicotine est classifiée comme un médicament</li><li>Il est nécessaire d'obtenir une autorisation pour apporter vos e-liquides nicotinés</li><li>Nous vous conseillons de vous renseigner auprès des autorités locales</li></ul> <a href="#" class="more-info" data-code="JPN">Plus d'info</a>`,KHM:`<h3>Cambodge</h3> <ul><li>Produits de la vape interdits</li><li>Nous vous déconseillons de vous rendre au Cambodge avec votre matériel</li></ul> <a href="#" class="more-info" data-code="KHM">Plus d'info</a>`,LAO:`<h3>Laos</h3> <ul><li>Tous les produits de la vape sont interdits</li><li>Nous vous déconseillons de vous rendre au Laos avec votre matériel</li></ul> <a href="#" class="more-info" data-code="LAO">Plus d'info</a>`,LTU:`<h3>Lituanie</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="LTU">Plus d'info</a>`,LVA:`<h3>Lettonie</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="LVA">Plus d'info</a>`,LKA:`<h3>Sri Lanka</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="LKA">Plus d'info</a>`,MYS:`<h3>Malaisie</h3> <ul><li>Forte taxation des e-liquides</li><li>Vente des e-liquides nicotinés réservée aux pharmacies agréées</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="MYS">Plus d'info</a>`,MUS:`<h3>Île Maurice</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Possibilité de rencontrer des problèmes à l'aéroport en cas de possession de produits de la vape</li><li>À vos risques et périls</li></ul> <a href="#" class="more-info" data-code="MUS">Plus d'info</a>`,NLD:`<h3>Pays-Bas</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Les puffs sont interdites</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="NLD">Plus d'info</a>`,PRT:`<h3>Portugal</h3> <ul><li>Les e-liquides sont taxés</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="PRT">Plus d'info</a>`,QAT:`<h3>Qatar</h3> <ul><li>Le vapotage est interdit</li><li>Nous vous déconseillons de vous rendre au Qatar avec votre matériel</li></ul> <a href="#" class="more-info" data-code="QAT">Plus d'info</a>`,SGP:`<h3>Singapour</h3> <ul><li>Le vapotage est considéré comme un délit</li><li>Nous vous déconseillons <b>fortement</b> d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="SGP">Plus d'info</a>`,SVN:`<h3>Slovénie</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="SVN">Plus d'info</a>`,THA:`<h3>Thaïlande</h3> <ul><li>La Thaïlande est l'un des pays les plus restrictifs au monde en matière de vapotage</li><li>Nous vous déconseillons <b>vivement</b> d'y apporter votre matériel</li><li>Certains touristes ont déjà été emprisonnés pour possession de produits de la vape</li></ul> <a href="#" class="more-info" data-code="THA">Plus d'info</a>`,TUN:`<h3>Tunisie</h3> <ul><li>Très peu d'e-liquides autorisés</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href="#" class="more-info" data-code="TUN">Plus d'info</a>`,USA:`<h3>USA</h3> <ul><li>La législation varie fortement d'un État à l'autre</li><li>Renseignez-vous auprès des autorités</li></ul> <a href="#" class="more-info" data-code="USA">Plus d'info</a>`},Mn={ARG:`
      <h1>Législation sur le vapotage en Argentine (2025)</h1>
      <img src="/images-pays/arg.jpg" loading="lazy" alt="Argentine" />
      <p>
        En Argentine, la législation interdit :
      </p>
      <ul>
        <li>
          <p>🚫
            <strong>La fabrication, l'importation, la vente et la distribution de cigarettes électroniques et de dispositifs de vapotage,</strong> conformément à la disposition <strong>ANMAT n° 3226/2011</strong>.
          </p>
        </li>
        <li>
          <p>📢
            <strong>La publicité et la promotion de ces produits.</strong>
          </p>
        </li>
      </ul>
      <p>
        Bien que l'usage personnel ne soit pas explicitement interdit, l'achat et l'approvisionnement en matériel sont difficiles en raison de l'absence de marché légal. Les voyageurs peuvent apporter leur propre équipement pour usage personnel, mais doivent faire preuve de discrétion, notamment dans les lieux publics où des interdictions locales peuvent s'appliquer.
      </p>
      <p>
        Des initiatives législatives visant à réguler et taxer les produits de vapotage ont été proposées, notamment dans le cadre de la <strong>loi "Omnibus"</strong> présentée en 2024. Cependant, ces propositions n'ont pas encore abouti à une réglementation officielle.
      </p>
      <p>
        Les contrevenants aux interdictions de vente et de distribution s'exposent à des sanctions administratives, telles que des amendes et la confiscation des produits.
      </p>
      <p>
        <strong>Sources :</strong>
        <a href="https://ecigintelligence.com/argentina-e-cigarette-tax-proposal-gives-local-industry-hope-for-vaping-regulation/" target="_blank">ECigIntelligence</a>,
        <a href="#argentine">Source</a>
      </p>
    `,AUS:`
  <h2>
  Législation sur le vapotage en Australie (2025)
</h2>
<img src="/images-pays/aus.jpg" loading="lazy" alt="Australie" />
<p>
  Depuis le 1er juillet 2024, la vente de tous les produits de vapotage, y compris ceux sans nicotine, est restreinte aux pharmacies. Les produits doivent répondre à des normes strictes et ne sont disponibles que pour les adultes de 18 ans et plus, sous certaines conditions.
</p>

<ul>
  <li>
    <p>🚚
      <strong>Importation :</strong> Depuis le 1er mars 2024, l'importation de dispositifs de vapotage, accessoires et substances nécessite une licence et un permis délivrés par l'Office of Drug Control. Les voyageurs peuvent apporter jusqu'à 2 dispositifs, 20 accessoires et 200 mL de liquide, uniquement pour usage personnel.
    </p>
  </li>
  <li>
    <p>🏪
      <strong>Vente au détail :</strong> La vente de produits de vapotage est interdite en dehors des pharmacies. Les détaillants tels que les magasins de proximité, boutiques de vapotage et buralistes ne peuvent pas vendre ces produits, même avec une ordonnance.
    </p>
  </li>
  <li>
    <p>📢
      <strong>Publicité :</strong> Toute forme de publicité, promotion ou parrainage des produits de vapotage est interdite.
    </p>
  </li>
  <li>
    <p>⚖️
      <strong>Sanctions :</strong> Les infractions peuvent entraîner des amendes allant jusqu'à 161 300 AUD pour les entreprises et 32 260 AUD pour les individus. Des peines d'emprisonnement peuvent également s'appliquer en cas de récidive ou de violations graves.
    </p>
  </li>
</ul>

<p>
  Ces mesures visent à réduire l'accès des jeunes aux produits de vapotage et à contrôler le marché noir en expansion
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.tga.gov.au/products/unapproved-therapeutic-goods/vaping-hub/changes-regulation-vapes" target="_blank">TGA - Changes to the regulation of vapes</a>,
  <a href="https://www.odc.gov.au/importers/importing-vaping-goods-australia" target="_blank">ODC - Importing vaping goods into Australia</a>,
  <a href="#australie">Source</a>
</p>

  `,BEL:`
    
      <h2>
  Législation sur le vapotage en Belgique (2025)
</h2>
<img src="/images-pays/bel.jpg" loading="lazy" alt="Belgique" />
<p>
  La Belgique a renforcé sa réglementation sur les produits de vapotage afin de protéger la santé publique, notamment celle des jeunes, et de réduire l'impact environnemental des dispositifs jetables.
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction des cigarettes électroniques jetables :</strong> Depuis le 1er janvier 2025, la vente de puffs est interdite sur l'ensemble du territoire belge, faisant de la Belgique le premier pays de l'UE à adopter une telle mesure. Cette décision vise à limiter l'accès des jeunes à ces produits attractifs et à réduire les déchets électroniques.</p>
  </li>
  <li>
    <p>🚪 <strong>Interdiction d'exposition en point de vente :</strong> À partir du 1er avril 2025, tous les produits du tabac et de vapotage doivent être retirés des étals des magasins. Ils ne peuvent plus être visibles pour les clients, quelle que soit la taille ou le type de commerce. Seules des listes standardisées mentionnant les marques et les prix peuvent être consultées sur demande.</p>
  </li>
  <li>
    <p>🏷️ <strong>Restrictions supplémentaires :</strong> La vente de produits de vapotage est interdite dans les points de vente temporaires (festivals, marchés, etc.). De plus, les dispositifs de vapotage ne doivent pas comporter de fonctionnalités attractives pour les jeunes, telles que des lumières LED ou des designs ludiques.</p>
  </li>
  <li>
    <p>💰 <strong>Taxation des e-liquides :</strong> Depuis le 1er janvier 2024, une taxe d'accise de 0,15 € par millilitre s'applique à tous les e-liquides, avec ou sans nicotine. Tous les produits doivent porter une marque fiscale attestant du paiement de cette taxe.</p>
  </li>
</ul>

<p>
  Ces mesures s'inscrivent dans le cadre du plan national de lutte contre le tabac, lancé en 2022, qui vise à atteindre une génération sans tabac d'ici 2032. Les contrevenants s'exposent à des sanctions pouvant aller de 208 € à 8 000 € d'amende, voire à des peines de prison en cas de récidive.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.health.belgium.be/fr/news/extension-de-linterdiction-de-fumer-et-modifications-legislatives-concernant-les-produits-de" target="_blank">SPF Santé publique</a>,
  <a href="https://www.theguardian.com/world/2025/jan/01/belgium-becomes-first-eu-country-to-ban-sale-of-disposable-vapes" target="_blank">The Guardian</a>,
  <a href="https://www.generationsanstabac.org/en/actualites/belgique-interdiction-des-etals-pour-les-produits-du-tabac-et-du-vapotage-en-2025/" target="_blank">Génération Sans Tabac</a>,
  <a href="#belgique">Source</a>
</p>


  `,BRA:`
    
    <h2>
  Législation sur le vapotage au Brésil (2025)
</h2>
<img src="/images-pays/bra.jpg" loading="lazy" alt="Brésil" />
<p>
  Au Brésil, la législation interdit :
</p>

<ul>
  <li>
    <p>🚫 La fabrication, l’importation, la vente et la distribution de cigarettes électroniques et de tous dispositifs de vapotage.</p>
  </li>
  <li>
    <p>📦 Le transport, le stockage et la publicité de ces produits.</p>
  </li>
  <li>
    <p>✈️ Leur entrée sur le territoire, même dans les bagages personnels.</p>
  </li>
</ul>

<p>
  Cette interdiction est fixée par la résolution <strong>RDC n° 855</strong> de l’Anvisa (2024).
</p>

<p>
  L’usage personnel n’est pas explicitement interdit par la loi, mais l’interdiction de transport et de stockage rend leur possession risquée au regard des contrôles.
</p>

<p>
  Les contrevenants s’exposent à des sanctions administratives : amendes, saisies, destruction des produits et suspension d’activités commerciales.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2024/anvisa-mantem-proibicao-de-cigarros-eletronicos" target="_blank">Anvisa</a>,
  <a href="https://gsthr.org/countries/profile/bra/" target="_blank">Global State of Tobacco Harm Reduction</a>,
  <a href="https://www.reuters.com/world/americas/brazil-health-regulator-maintains-ban-e-cigarettes-2024-04-19/" target="_blank">Reuters</a>,
  <a href="#bresil">Source</a>
</p>



  `,CAN:`
    
      <h2>
  Législation sur le vapotage au Canada (2025)
</h2>
<img src="/images-pays/can.jpg" loading="lazy" alt="Canada" />
<p>
  Au Canada, la réglementation sur le vapotage est encadrée par la <strong>Loi sur le tabac et les produits de vapotage (LTPV)</strong>, avec des mesures renforcées en 2024 et 2025 pour limiter l'accès des jeunes et encadrer la commercialisation.
</p>

<ul>
  <li>
    <p>🍂 <strong>Restrictions sur les arômes :</strong> Seules les saveurs de tabac, menthe ou menthol sont autorisées. Les sucres, édulcorants et la plupart des arômes sont interdits, sauf ceux spécifiquement prévus pour ces saveurs.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne :</strong> Des vérifications renforcées de l'âge et de l'identité sont obligatoires lors des ventes à distance pour limiter l'accès des jeunes.</p>
  </li>
  <li>
    <p>💰 <strong>Taxation :</strong> Une taxe d'accise fédérale s'applique selon le volume. Par exemple, au Yukon en 2025 : 2,24 $ pour les deux premiers ml, puis 2,24 $ par tranche de 10 ml supplémentaires.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et emballage :</strong> Publicité restreinte, emballages neutres, avertissements sanitaires obligatoires, sauf pour les produits approuvés comme aide au sevrage tabagique.</p>
  </li>
</ul>

<p>
  Attention : certaines provinces ou territoires appliquent des règles plus strictes (interdictions d'arômes, restrictions sur les points de vente). Il est recommandé de se renseigner localement avant tout achat ou voyage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.canada.ca/fr/sante-canada/organisation/a-propos-sante-canada/legislation-lignes-directrices/lois-reglements/plan-reglementaire-prospectif/plan.html" target="_blank">Santé Canada</a>,
  <a href="https://www.canada.ca/fr/sante-publique/nouvelles/2025/01/declaration-du-conseil-des-medecins-hygienistes-en-chef-sur-le-vapotage-de-nicotine-au-canada-dans-le-cadre-de-la-semaine-nationale-sans-fumee.html" target="_blank">Santé publique Canada</a>,
  <a href="https://yukon.ca/fr/nouvelles/nouvel-accord-de-taxation-sur-les-produits-de-vapotage-prendra-effet-le-1er-janvier-2025" target="_blank">Gouvernement du Yukon</a>,
  <a href="#canada">Source</a>
</p>


  `,CHL:`
      <h2>
        Législation sur le vapotage au Chili (2025)
      </h2>
      <img src="/images-pays/chl.jpg" loading="lazy" alt="Chili" class="mb-4" />
      <p>
        Depuis le 4 janvier 2024, le Chili a promulgué la <strong>Ley N° 21.642</strong>, qui établit un cadre réglementaire strict pour les dispositifs de vapotage, qu'ils contiennent ou non de la nicotine. Cette loi assimile les systèmes électroniques de distribution de nicotine (SEAN) et sans nicotine (SESN) aux produits du tabac, les soumettant ainsi à des restrictions similaires.
      </p>

      <ul>
        <li>
          
          <p> 🔞
            <strong>Interdiction de vente aux mineurs :</strong> La vente, la distribution et la promotion de ces produits sont interdites aux personnes de moins de 18 ans, y compris les accessoires et les liquides de recharge.
          </p>
        </li>
        <li>
          
          <p>📢
            <strong>Publicité et promotion :</strong> Toute forme de publicité, directe ou indirecte, est restreinte. Les informations autorisées doivent se limiter aux caractéristiques générales des produits, notamment pour les SESN à usage thérapeutique.
          </p>
        </li>
        <li>
          
          <p>🚭
            <strong>Utilisation dans les lieux publics :</strong> L'usage de ces dispositifs est interdit dans les mêmes lieux que ceux où le tabac est proscrit, tels que les espaces publics fermés, les transports en commun et les établissements de santé, sauf exceptions médicales avec prescription.
          </p>
        </li>
        <li>
          
          <p>📦
            <strong>Étiquetage et emballage :</strong> Les produits doivent comporter des avertissements sanitaires sur les effets nocifs de leur consommation ou de l'exposition aux aérosols générés. Les emballages doivent également inclure des informations détaillées sur le fabricant, les ingrédients, la concentration en nicotine (maximum autorisé de 45 mg/ml) et les instructions d'utilisation.
          </p>
        </li>
        <li>
          
          <p>🏭
            <strong>Obligations des fabricants :</strong> Les entreprises doivent informer annuellement le ministère de la Santé des détails concernant les composants, les additifs et les substances utilisées dans leurs produits. L'utilisation d'additifs interdits ou non déclarés est proscrite.
          </p>
        </li>
        <li>
          
          <p>⚖️
            <strong>Sanctions :</strong> Les infractions à cette loi sont passibles de sanctions administratives, notamment des amendes pouvant aller jusqu'à 1 000 UTM (Unités Tributaires Mensuelles), des saisies de produits et des suspensions d'activités commerciales.
          </p>
        </li>
      </ul>

      <p>
        <em>Cette législation vise à protéger la santé publique, en particulier celle des jeunes, en encadrant strictement la commercialisation et l'utilisation des produits de vapotage.</em>
      </p>

      <p>
        <strong>Sources :</strong>
        <a href="https://www.bcn.cl/leychile/Navegar?idNorma=1199790&idVersion=Diferido" target="_blank">Biblioteca del Congreso Nacional de Chile</a>,
        <a href="https://www.ispch.gob.cl/noticia/instituto-de-salud-publica-de-chile-isp-identifica-graves-danos-a-la-salud-de-las-personas-por-cigarrillos-electronicos-y-o-vapeadores/" target="_blank">Instituto de Salud Pública de Chile</a>,
        <a href="#chili">Source</a>
      </p>
    
  `,CHN:`
    <h2>
  Législation sur le vapotage en Chine (2025)
</h2>
<img src="/images-pays/chn.jpg" loading="lazy" alt="Chine" />
<p>
  En Chine continentale, les cigarettes électroniques sont soumises à une réglementation stricte, alignée sur celle des produits du tabac traditionnels.
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction des arômes :</strong> Depuis le 1er octobre 2022, seuls les e-liquides au goût de tabac sont autorisés. Les arômes fruités, mentholés ou autres sont interdits.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne :</strong> La vente de cigarettes électroniques sur Internet est interdite depuis 2019, tout comme leur publicité en ligne.</p>
  </li>
  <li>
    <p>🏛️ <strong>Réglementation :</strong> Depuis 2021, les cigarettes électroniques sont intégrées au système de monopole d'État sur le tabac, avec des exigences strictes en matière de fabrication, de distribution et de vente.</p>
  </li>
  <li>
    <p>💸 <strong>Taxation :</strong> Depuis octobre 2022, une taxe de consommation s'applique : 36 % au niveau de la production ou de l'importation, et 11 % au niveau de la distribution en gros.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation dans les lieux publics :</strong> L'usage des cigarettes électroniques est interdit dans les lieux publics fermés, conformément aux réglementations locales, comme à Shanghai.</p>
  </li>
</ul>

<p>
  Les contrevenants s'exposent à des sanctions administratives, notamment des amendes, la confiscation des produits et la suspension des activités commerciales.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://zh.wikipedia.org/wiki/電子煙" target="_blank">Wikipedia (chinois)</a>,
  <a href="#chine">Source</a>
</p>


  `,COL:`
    <h2>
  Législation sur le vapotage en Colombie (2025)
</h2>
<img src="/images-pays/col.jpg" loading="lazy" alt="Colombie" />
<p>
  Depuis le 9 mai 2024, la <strong>Ley 2354</strong> est en vigueur en Colombie, établissant un cadre réglementaire strict pour les dispositifs de vapotage, qu'ils contiennent ou non de la nicotine. Cette loi étend les restrictions de la <strong>Ley Antitabaco (Ley 1335 de 2009)</strong> aux produits de vapotage, les assimilant aux produits du tabac traditionnels.
</p>

<ul>
  <li>
    <p>🔞 <strong>Interdiction de vente aux mineurs :</strong> La vente, la distribution et la promotion de ces produits sont interdites aux personnes de moins de 18 ans.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, directe ou indirecte, est restreinte. Les informations autorisées doivent se limiter aux caractéristiques générales des produits.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation dans les lieux publics :</strong> L'usage de ces dispositifs est interdit dans les mêmes lieux que ceux où le tabac est proscrit, tels que les espaces publics fermés, les transports en commun et les établissements de santé.</p>
  </li>
  <li>
    <p>📦 <strong>Étiquetage et emballage :</strong> Les produits doivent comporter des avertissements sanitaires sur les effets nocifs de leur consommation ou de l'exposition aux aérosols générés. Les emballages doivent également inclure des informations détaillées sur le fabricant, les ingrédients, la concentration en nicotine et les instructions d'utilisation.</p>
  </li>
  <li>
    <p>🏢 <strong>Obligations des fabricants :</strong> Les entreprises doivent informer annuellement le ministère de la Santé des détails concernant les composants, les additifs et les substances utilisées dans leurs produits. L'utilisation d'additifs interdits ou non déclarés est proscrite.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les infractions à cette loi sont passibles de sanctions administratives, notamment des amendes pouvant aller jusqu'à 400 salaires mensuels légaux minimaux en vigueur (SMLMV), des saisies de produits et des suspensions d'activités commerciales.</p>
  </li>
</ul>

<p>
  Cette législation vise à protéger la santé publique, en particulier celle des jeunes, en encadrant strictement la commercialisation et l'utilisation des produits de vapotage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=240576" target="_blank">Ley 2354 de 2024 - Función Pública</a>,
  <a href="https://www.elespectador.com/salud/queda-en-firme-ley-que-regula-uso-de-cigarrillos-electronicos-y-vapeadores-en-colombia/" target="_blank">El Espectador</a>,
  <a href="#colombie">Source</a>
</p>


  `,DNK:`
    <h2>
  Législation sur le vapotage au Danemark (2025)
</h2>
<img src="/images-pays/dnk.jpg" loading="lazy" alt="Danemark" />
<p>
  Au Danemark, la vente et l'utilisation de cigarettes électroniques sont autorisées, mais strictement encadrées :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> La vente est réservée aux personnes de 18 ans et plus.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> Seuls les arômes tabac et menthol sont autorisés. Les arômes sucrés ou fruités sont interdits, y compris sur les emballages.</p>
  </li>
  <li>
    <p>🍬 <strong>Puffs :</strong> Les cigarettes électroniques jetables (puffs) contenant des arômes sucrés ou un taux de nicotine élevé sont interdites à la vente, à l'importation et à la possession, sauf dans la limite de 10 unités pour usage personnel lors de voyages.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> L'usage est interdit dans les lieux où fumer est prohibé, tels que les écoles, transports publics et lieux de travail, sauf dans les zones spécifiquement désignées.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> Toute forme de publicité ou de promotion des produits de vapotage est interdite, y compris en ligne et sur les points de vente, à l'exception des boutiques spécialisées.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> Les produits doivent être conditionnés dans des emballages neutres de couleur Pantone 448C, avec des avertissements sanitaires couvrant au moins 30 % des faces principales.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> Le taux maximal autorisé est de 20 mg/ml. Les réservoirs ne doivent pas dépasser 2 ml et les flacons de recharge 10 ml.</p>
  </li>
  <li>
    <p>💶 <strong>Fiscalité :</strong> Une taxe est appliquée sur les e-liquides contenant de la nicotine, calculée en fonction de leur concentration.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Depuis janvier 2025, les contrevenants s'exposent à des amendes renforcées, à la saisie des produits illégaux et, en cas de récidive, à la suspension temporaire du droit de vendre des produits de vapotage.</p>
  </li>
</ul>

<p>
  Ces mesures visent à protéger les jeunes et à encadrer strictement l'usage des produits de vapotage au Danemark.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.sst.dk/da/viden/tobak-og-nikotin/roegfri-fremtid" target="_blank">Sundhedsstyrelsen – Røgfri Fremtid</a>,
  <a href="https://www.sik.dk/english/safety-regulations/e-cigarettes" target="_blank">Danish Safety Technology Authority – E-cigarettes regulations</a>,
  <a href="https://ecigator.com/guide/europe-vape-laws-tpd-national/" target="_blank">Ecigator</a>,
  <a href="#danemark">Source</a>
</p>


  `,EST:`

<h2>
  Législation sur le vapotage en Estonie (2025)
</h2>
<img src="/images-pays/est.jpg" alt="Estonie" />
<p>
  L’Estonie encadre très strictement la cigarette électronique ; les dernières modifications majeures sont entrées en vigueur entre 2020 et 2025.
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> vente interdite aux moins de 18 ans.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> seuls les arômes tabac et menthol sont autorisés ; toutes les autres saveurs sont prohibées, y compris pour les puffs.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> 20 mg/ml maximum ; réservoirs ≤ 2 ml et flacons de recharge ≤ 10 ml.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne :</strong> toute vente à distance, nationale ou transfrontalière, est interdite.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> promotion, sponsoring et exposition visible au public sont globalement interdits ; seules des informations neutres sont permises en boutique spécialisée.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> vapoter est interdit partout où fumer l’est, sauf dans les fumoirs désignés.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> avertissement sanitaire couvrant au moins 30 % des deux faces principales ; interdiction de visuels évoquant des saveurs ou des bénéfices sanitaires.</p>
  </li>
  <li>
    <p>💶 <strong>Fiscalité :</strong> droit d’accise de 0,22 € par millilitre sur tous les e-liquides à compter du 1 janvier 2025.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> amendes, confiscation des produits et suspension de licence en cas de récidive.</p>
  </li>
</ul>

<p>
  Ce cadre place l’Estonie parmi les pays européens les plus restrictifs, limitant sévèrement l’attractivité des produits de vapotage pour les jeunes.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.riigiteataja.ee/akt/107032023019" target="_blank">Riigi Teataja – Tubaka- ja tubakatoodete seadus</a>,
  <a href="https://www.emta.ee/ariklient/maksud-ja-tasumine/aktsiisid/tubakatooted" target="_blank">Maksu- ja Tolliamet – Barème d’accise 2025</a>,
  <a href="#estonie">Source</a>
</p>

  `,FIN:`
    <h2>
  Législation sur le vapotage en Finlande (2025)
</h2>
<img src="/images-pays/fin.jpg" loading="lazy" alt="Finlande" />
<p>
  La Finlande applique une réglementation stricte alignée sur la directive européenne (TPD), avec des restrictions nationales supplémentaires pour protéger la santé publique.
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> Vente interdite aux moins de 18 ans.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> Seuls les e-liquides goût tabac sont autorisés. Les arômes fruités, sucrés ou mentholés sont interdits, même sans nicotine.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> Toute publicité, promotion ou parrainage est interdite, y compris en ligne. Les produits doivent être dissimulés en magasin, sauf dans les boutiques spécialisées.</p>
  </li>
  <li>
    <p>🚭 <strong>Usage en public :</strong> Interdit dans les mêmes lieux que le tabac (espaces publics fermés, transports, établissements accueillant des mineurs).</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> Emballages neutres avec avertissements sanitaires couvrant au moins 32 % des faces principales.</p>
  </li>
  <li>
    <p>💶 <strong>Taxation :</strong> Taxe d'accise de 0,30 € par millilitre sur tous les e-liquides, nicotinés ou non.</p>
  </li>
  <li>
    <p>✈️ <strong>Importation personnelle :</strong> Limité à 10 ml de liquide nicotiné par voyageur. Importer des dispositifs ou composants depuis l'étranger est interdit.</p>
  </li>
</ul>

<p>
  Ces mesures visent à réduire l’attrait des produits, notamment chez les jeunes, et à encadrer strictement leur usage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://valvira.fi/en/tobacco/unit-packets-of-electronic-cigarettes" target="_blank">Valvira</a>,
  <a href="https://tulli.fi/en/restrictions/e-cigarettes/traveller-imports" target="_blank">Finnish Customs</a>,
  <a href="https://www.tobaccocontrollaws.org/legislation/finland/e-cigarettes/main-policies" target="_blank">Tobacco Control Laws</a>,
  <a href="#finlande">Source</a>
</p>


  `,GRC:`
    <h2>
  Législation sur le vapotage en Grèce (2025)
</h2>
<img src="/images-pays/grc.jpg" loading="lazy" alt="Grèce" />
<p>
  La Grèce applique une réglementation stricte sur les produits de vapotage, en conformité avec la directive européenne sur les produits du tabac (TPD), avec des mesures nationales supplémentaires :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> La vente de produits de vapotage est interdite aux personnes de moins de 18 ans.</p>
  </li>
  <li>
    <p>🍃 <strong>Arômes :</strong> Un projet de loi est en cours d'élaboration pour interdire tous les arômes de cigarettes électroniques, à l'exception du tabac naturel et de la menthe, afin de limiter l'accès des jeunes à ces produits.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> Toute forme de publicité, promotion ou parrainage des produits de vapotage est interdite, y compris en ligne et sur les points de vente.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> L'usage des cigarettes électroniques est interdit dans les lieux publics fermés, les transports en commun et les établissements accueillant des mineurs.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> Les produits doivent être conditionnés dans des emballages neutres avec des avertissements sanitaires couvrant au moins 32 % des faces principales.</p>
  </li>
  <li>
    <p>💶 <strong>Taxation :</strong> Une taxe d'accise s'applique à tous les e-liquides, avec ou sans nicotine.</p>
  </li>
  <li>
    <p>✈️ <strong>Importation personnelle :</strong> Les voyageurs peuvent importer des produits de vapotage pour usage personnel, dans des limites raisonnables.</p>
  </li>
</ul>

<p>
  Ces mesures visent à réduire l'attrait des produits de vapotage, en particulier chez les jeunes, et à encadrer strictement leur utilisation et leur commercialisation en Grèce.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://greekreporter.com/2025/04/23/greece-set-ban-teen-friendly-flavored-e-cigarettes/" target="_blank">Greek Reporter</a>,
  <a href="https://ecigator.com/guide/europe-vape-laws-tpd-national/" target="_blank">Ecigator</a>,
  <a href="#grece">Source</a>
</p>


  `,HUN:`

<h2>
  Législation sur le vapotage en Hongrie (2025)
</h2>
<img src="/images-pays/hun.jpg" alt="Hongrie" />
<p>
  La Hongrie applique l’un des cadres les plus stricts de l’UE :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> 18 ans pour l’achat, la détention et l’usage.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> interdiction totale ; les e-liquides — avec ou sans nicotine — ne doivent contenir <em>aucun</em> additif aromatisant (tabac, menthol et saveurs neutres compris). Les puffs aromatisés sont donc illégaux.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> 20 mg/ml maximum ; cartouches ≤ 2 ml et flacons de recharge ≤ 10 ml.</p>
  </li>
  <li>
    <p>🏪 <strong>Canaux de vente :</strong> produits disponibles uniquement dans les « Nemzeti Dohánybolt » (buralistes agréés). La vente en ligne et l’importation non agréée sont interdites.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> toute forme de promotion ou de sponsoring est prohibée, y compris sur Internet et réseaux sociaux.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> vapoter est interdit dans tous les espaces où fumer est proscrit (lieux de travail, établissements scolaires, transports, restauration, etc.).</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> avertissements sanitaires couvrant ≥ 30 % des deux faces principales ; liste complète des ingrédients sur l’étiquette.</p>
  </li>
  <li>
    <p>💶 <strong>Fiscalité :</strong> droit d’accise spécifique sur tous les e-liquides, quel que soit leur taux de nicotine.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> confiscation des produits non conformes et amendes pouvant dépasser 5 000 € en cas de récidive.</p>
  </li>
</ul>

<p>
  Ce dispositif, combiné à la vente exclusive en bureaux de tabac, vise à réduire fortement l’attractivité du vapotage — en particulier auprès des jeunes — et à aligner ces produits sur les restrictions applicables au tabac combustible.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://njt.hu/jogszabaly/2013-39-20-22" target="_blank">Nemzeti Jogszabálytár – Décret gouvernemental 39/2013</a>,
  <a href="https://njt.hu/jogszabaly/1999-42-00-00" target="_blank">Nemzeti Jogszabálytár – Loi XLII/1999 (protection des non-fumeurs)</a>,
  <a href="https://madosz.hu/news/view?id=13446" target="_blank">NAV – Communiqué sur l’interdiction des e-cigarettes aromatisées</a>,
  <a href="#hongrie">Source</a>
</p>

  `,IND:`
   <h2>
  Législation sur le vapotage en Inde (2025)
</h2>
<img src="/images-pays/ind.jpg" loading="lazy" alt="Inde" />
<p>
  Depuis le 18 septembre 2019, l'Inde interdit strictement tous les produits de vapotage, conformément à la loi <strong>Prohibition of Electronic Cigarettes Act, 2019</strong>.
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdictions totales :</strong> La production, la fabrication, l'importation, l'exportation, le transport, la vente, la distribution, le stockage et la publicité des cigarettes électroniques et de leurs composants sont prohibés.</p>
  </li>
  <li>
    <p>🙅‍♂️ <strong>Usage personnel :</strong> L'achat, la possession ou l'utilisation de dispositifs de vapotage sont illégaux, y compris pour un usage personnel. Aucun cadre légal ne permet leur importation ou leur utilisation individuelle.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des peines pouvant aller jusqu'à 1 an de prison ou 100 000 roupies d'amende pour une première infraction, et jusqu'à 3 ans de prison ou 500 000 roupies d'amende en cas de récidive.</p>
  </li>
  <li>
    <p>🔒 <strong>Contrôles :</strong> Les autorités ont le pouvoir de saisir et de détruire les produits illégaux, même sans mandat, et des opérations de confiscation sont régulièrement menées.</p>
  </li>
</ul>

<p>
  Cette interdiction vise à protéger la santé publique, notamment celle des jeunes, face aux risques associés aux dispositifs de vapotage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://ntcp.mohfw.gov.in/assets/document/The-Prohibition-of-Electronic-Cigarettes-Production-Manufacture-Import-Export-Transport-Sale-Distribution-Storage-and-Advertisement%29-Act-2019.pdf" target="_blank">Loi officielle (PDF)</a>,
  <a href="https://www.indiatoday.in/india/story/banned-yet-booming-online-vape-sale-thrive-unabated-indiatodayt-osint-2698369-2025-03-24" target="_blank">India Today</a>,
  <a href="https://gsthr.org/countries/profile/ind/2/" target="_blank">GSTHR</a>,
  <a href="#inde">Source</a>
</p>


  `,IDN:`
    
      <h2>
  Législation sur le vapotage en Indonésie (2025)
</h2>
<img src="/images-pays/idn.jpg" loading="lazy" alt="Indonésie" />
<p>
  Depuis la mise en œuvre du <strong>Règlement gouvernemental n° 28 de 2024</strong>, l'Indonésie a renforcé sa réglementation sur les produits de vapotage afin de protéger la santé publique, notamment celle des jeunes.
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdictions totales :</strong> La production, la fabrication, l'importation, l'exportation, le transport, la vente, la distribution, le stockage et la publicité des cigarettes électroniques et de leurs composants sont prohibés.</p>
  </li>
  <li>
    <p>🛑 <strong>Restrictions de vente :</strong> La vente de produits de vapotage est interdite :
      <ul>
        <li>Dans les distributeurs automatiques.</li>
        <li>À moins de 200 mètres des établissements scolaires et des aires de jeux.</li>
        <li>Sur les plateformes en ligne et les réseaux sociaux sans vérification d'âge rigoureuse.</li>
      </ul>
    </p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> Toute forme de publicité pour les produits de vapotage est interdite sur les réseaux sociaux. Les publicités en ligne doivent inclure des avertissements sanitaires clairs et ne doivent pas cibler les jeunes.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> Les produits doivent comporter des avertissements sanitaires couvrant 50 % de la surface de l'emballage, avec des images et des textes dissuasifs. L'emballage doit également indiquer clairement que le produit contient de la nicotine et est interdit aux moins de 21 ans et aux femmes enceintes.</p>
  </li>
  <li>
    <p>🔬 <strong>Normes de produit :</strong> Les e-liquides doivent être conditionnés en flacons de 10 ou 20 ml pour les systèmes ouverts, et les cartouches pour les systèmes fermés ne doivent pas dépasser 2 ml. Tous les produits doivent être testés pour leur teneur en nicotine et en substances interdites avant la mise sur le marché.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les infractions aux réglementations peuvent entraîner des amendes, le retrait des produits du marché et des sanctions administratives supplémentaires.</p>
  </li>
</ul>

<p>
  Ces mesures visent à réduire l'attrait des produits de vapotage, en particulier chez les jeunes, et à encadrer strictement leur utilisation et leur commercialisation en Indonésie.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.tilleke.com/insights/indonesia-imposes-stringent-requirements-on-electronic-cigarettes/" target="_blank">Tilleke & Gibbins</a>,
  <a href="https://www.reuters.com/world/asia-pacific/indonesia-raises-smoking-age-limit-will-curb-cigarette-advertising-2024-07-31/" target="_blank">Reuters</a>,
  <a href="https://www.vitalstrategies.org/indonesia-imposes-stricter-tobacco-controls-a-major-step-for-public-health/" target="_blank">Vital Strategies</a>,
  <a href="#indonesie">Source</a>
</p>


  `,ITA:`
    
      <h2>
  Législation sur le vapotage en Italie (2025)
</h2>
<img src="/images-pays/ita.jpg" loading="lazy" alt="Italie" />
<p>
  En 2025, l'Italie a renforcé sa réglementation sur les produits de vapotage afin de mieux encadrer leur utilisation et de protéger la santé publique.
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> La vente de produits de vapotage est interdite aux personnes de moins de 18 ans.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne :</strong> Depuis le 1er janvier 2025, la vente en ligne de produits de vapotage contenant de la nicotine est interdite, y compris via les entrepôts fiscaux.</p>
  </li>
  <li>
    <p>💰 <strong>Taxation :</strong>
      <ul>
        <li>Les e-liquides nicotinés sont soumis à une taxe de consommation augmentée à 16 % en 2025, avec une hausse prévue à 17 % en 2026.</li>
        <li>Les e-liquides sans nicotine et les arômes concentrés sont taxés à hauteur de 0,90 € par 10 ml en 2025, avec une augmentation à 1,00 € en 2026.</li>
      </ul>
    </p>
  </li>
  <li>
    <p>📑 <strong>Étiquetage fiscal :</strong> Depuis le 1er novembre 2024, tous les produits doivent porter une vignette fiscale attestant du paiement des taxes. La vente de produits sans cette vignette est illégale et passible de sanctions.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> Toute forme de publicité ou de promotion des produits de vapotage est interdite, y compris les remises commerciales et les affichages en magasin. Seules les informations techniques sur les produits sont autorisées.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> L'usage des cigarettes électroniques est interdit dans les lieux publics fermés tels que les hôpitaux, les établissements scolaires, les centres d'emploi et les transports en commun. Dans les restaurants, bars et commerces, l'autorisation de vapoter est à la discrétion du responsable de l'établissement.</p>
  </li>
  <li>
    <p>🚆 <strong>Transport :</strong> L'utilisation de la cigarette électronique est interdite dans les trains, les avions et les navires, sauf dans les zones fumeurs désignées. Il est recommandé de se renseigner auprès du personnel avant de vapoter.</p>
  </li>
  <li>
    <p>🚗 <strong>Conduite :</strong> Bien qu'il n'existe pas de législation spécifique sur le vapotage en voiture, il est interdit de fumer en présence de mineurs ou de femmes enceintes. Il est conseillé de faire preuve de prudence et de bon sens lors de l'utilisation de la cigarette électronique au volant.</p>
  </li>
</ul>

<p>
  Ces mesures visent à encadrer strictement l'utilisation des produits de vapotage et à limiter leur accessibilité, notamment chez les jeunes.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://ecigator.com/news/italy-ecigarette-tax-online-ban/" target="_blank">Ecigator</a>,
  <a href="https://ecigator.com/guide/where-can-you-vape-in-italy/" target="_blank">Ecigator Guide</a>,
  <a href="https://ecigintelligence.com/italy-e-cigarette-regulation-april-2025/" target="_blank">ECigIntelligence</a>,
  <a href="#italie">Source</a>
</p>


  `,JPN:`
    
      <h2>
  Législation sur le vapotage au Japon (2025)
</h2>
<img src="/images-pays/jpn.jpg" loading="lazy" alt="Japon" />
<p>
  Au Japon, la réglementation sur les produits de vapotage distingue strictement les produits contenant de la nicotine de ceux qui en sont dépourvus.
</p>

<ul>
  <li>
    <p>🚫 <strong>Vente de produits nicotinés :</strong> La vente de e-liquides contenant de la nicotine est interdite sur le territoire japonais, car la nicotine est classée comme substance pharmaceutique. Aucun produit de vapotage nicotiné n'a été approuvé à la vente à ce jour.</p>
  </li>
  <li>
    <p>📦 <strong>Importation pour usage personnel :</strong> Les particuliers peuvent importer jusqu'à 120 ml de e-liquide nicotiné par personne pour un usage personnel, ce qui correspond à environ un mois de consommation. Cette importation ne nécessite pas d'autorisation spéciale, à condition de ne pas dépasser cette limite. Au-delà, une demande de certificat d'importation de médicament (Yakkan Shoumei) est requise auprès du ministère de la Santé, du Travail et des Affaires sociales.</p>
  </li>
  <li>
    <p>🔢 <strong>Nombre d'appareils :</strong> Il est permis d'importer jusqu'à deux dispositifs de vapotage pour usage personnel.</p>
  </li>
  <li>
    <p>💧 <strong>Produits sans nicotine :</strong> Les e-liquides sans nicotine peuvent être achetés librement au Japon par les personnes âgées de 20 ans et plus, dans les boutiques spécialisées, les supérettes ou en ligne.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> Le vapotage est soumis aux mêmes restrictions que le tabagisme. Il est interdit de vapoter dans les lieux publics en dehors des zones fumeurs désignées ("kitsuenjo"), que ce soit en intérieur ou en extérieur. Vapoter en marchant ou dans des zones non autorisées peut entraîner des amendes.</p>
  </li>
  <li>
    <p>🚆 <strong>Transports et hébergements :</strong> Le vapotage est interdit dans les transports en commun (trains, bus, avions), sauf dans les espaces fumeurs spécifiquement aménagés. Dans les hôtels, il est généralement permis de vapoter uniquement dans les chambres fumeurs.</p>
  </li>
</ul>

<p>
  Il est recommandé aux voyageurs de respecter scrupuleusement ces règles, de transporter leurs dispositifs de vapotage dans leur bagage à main et de se renseigner sur les zones fumeurs disponibles.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://ecigator.com/guide/vape-laws-and-regulations-in-japan/" target="_blank">Ecigator</a>,
  <a href="https://gsthr.org/countries/profile/jpn/" target="_blank">Global State of Tobacco Harm Reduction</a>,
  <a href="https://faq.japan-travel.jnto.go.jp/en/faq/articles/102086" target="_blank">Japan National Tourism Organization</a>,
  <a href="#japon">Source</a>
</p>


  `,KHM:`
    
      <h2>
  Législation sur le vapotage au Cambodge (2025)
</h2>
<img src="/images-pays/khm.jpg" loading="lazy" alt="Cambodge" />
<p>
  Depuis 2014, le Cambodge interdit :
</p>

<ul>
  <li>
    
    <p>🚫
      La vente, l'importation et l'utilisation de cigarettes électroniques, de shishas et de produits de tabac chauffé.
    </p>
  </li>
</ul>

<p>
  Cette interdiction est établie par la circulaire n° 001/14 Sor.Nor.No.NACD émise par l'Autorité nationale de lutte contre la drogue.
</p>

<p>
  En mai 2025, le Premier ministre Hun Manet a réaffirmé cette position en rejetant toute proposition d'investissement liée aux e-cigarettes, même pour l'exportation, lors du lancement du Plan national de lutte contre le cancer 2025–2030.
</p>

<p>
  Bien que l'usage personnel ne soit pas explicitement criminalisé, les autorités confisquent systématiquement les dispositifs trouvés. Il est donc fortement déconseillé d'apporter ou d'utiliser du matériel de vape sur le territoire cambodgien.
</p>

<p>
  Les contrevenants peuvent faire l'objet de saisies, et les produits sont généralement détruits. Aucun cadre légal ne prévoit d'amendes ou de poursuites pénales à ce jour, mais les contrôles sont stricts et fréquents.
</p>

<p>
  Ces mesures visent à protéger la population, notamment les jeunes, des effets nocifs du vapotage et à prévenir une nouvelle vague d'addiction à la nicotine.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://nacdcambodia.gov.kh/article/11" target="_blank">Autorité nationale de lutte contre la drogue (NACD)</a>,
  <a href="https://www.khmertimeskh.com/501479087/hun-manet-rejects-e-cigarette-investment-amid-cancer-plan-launch/" target="_blank">Khmer Times</a>,
  <a href="https://gsthr.org/countries/profile/khm/" target="_blank">Global State of Tobacco Harm Reduction</a>,
  <a href="#cambodge">Source</a>
</p>


  `,LAO:`
    
      <h2>
  Législation sur le vapotage au Laos (2025)
</h2>
<img src="/images-pays/lao.jpg" loading="lazy" alt="Laos" />
<p>
  Le Laos applique une interdiction stricte des produits de vapotage, dans le cadre d'une politique de santé publique visant à réduire la consommation de nicotine, en particulier chez les jeunes.
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction de vente et d'utilisation :</strong> La vente, l'importation, la distribution et l'utilisation de cigarettes électroniques sont interdites sur l'ensemble du territoire, conformément à la Loi sur le contrôle du tabac et à ses décrets d'application.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite, y compris en ligne et sur les points de vente.</p>
  </li>
  <li>
    <p>⚖️ <strong>Classification comme substance addictive :</strong> En 2023, le gouvernement a annoncé son intention d'inclure les cigarettes électroniques dans la liste des substances et précurseurs classés comme addictifs dans la législation sur la prévention et le contrôle des drogues, renforçant ainsi leur statut d'interdiction.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> Les produits de vapotage sont interdits dans les lieux publics, les transports en commun, les établissements éducatifs et de santé, ainsi que dans les zones désignées sans fumée.</p>
  </li>
  <li>
    <p>⚠️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des sanctions administratives, telles que des amendes et la confiscation des produits. Les autorités appliquent strictement ces mesures, avec des saisies fréquentes de dispositifs illégaux.</p>
  </li>
</ul>

<p>
  Ces mesures visent à protéger la population, notamment les jeunes, des effets nocifs du vapotage et à prévenir une nouvelle vague d'addiction à la nicotine.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://gsthr.org/countries/profile/lao/" target="_blank">Global State of Tobacco Harm Reduction</a>,
  <a href="https://laotiantimes.com/2023/11/30/laos-to-ban-e-cigarettes-amid-growing-concerns/" target="_blank">Laotian Times</a>,
  <a href="https://www.tobaccocontrollaws.org/legislation/lao-pdr" target="_blank">Tobacco Control Laws</a>,
  <a href="#laos">Source</a>
</p>


  `,LKA:`
    
      <h2>
  Législation sur le vapotage au Sri Lanka (2025)
</h2>
<img src="/images-pays/lka.jpg" loading="lazy" alt="Sri Lanka" />
<p>
  Le Sri Lanka applique une interdiction stricte des produits de vapotage, couvrant tous les aspects liés aux cigarettes électroniques :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction complète :</strong> La <strong>Prohibited Tobacco Products Regulations n°1 de 2016</strong> interdit la fabrication, l'importation, la vente et la distribution de cigarettes électroniques, y compris celles contenant du tabac. Bien que la loi mentionne spécifiquement les e-cigarettes contenant du tabac, cette disposition est appliquée à toutes les e-cigarettes.</p>
  </li>
  <li>
    <p>🚷 <strong>Usage personnel :</strong> L'utilisation des dispositifs de vapotage est également interdite. Les voyageurs ne doivent pas apporter de matériel de vape, même pour un usage personnel, sous peine de confiscation, d'amendes ou d'emprisonnement.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des sanctions sévères, incluant des amendes et des peines d'emprisonnement.</p>
  </li>
  <li>
    <p>🔍 <strong>Application stricte :</strong> Les autorités sri-lankaises mènent des contrôles réguliers pour détecter et confisquer les produits interdits. Les voyageurs sont tenus de respecter ces réglementations pour éviter des sanctions.</p>
  </li>
</ul>

<p>
  Il est fortement déconseillé d'apporter ou d'utiliser des dispositifs de vapotage au Sri Lanka. Les autorités appliquent une politique de tolérance zéro à l'égard du vapotage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.tobaccocontrollaws.org/legislation/sri-lanka/e-cigarettes/main-policies" target="_blank">Tobacco Control Laws</a>,
  <a href="https://ecigator.com/guide/can-you-vape-in-sri-lanka/" target="_blank">Ecigator</a>,
  <a href="https://travel-eat-love.de/en/sri-lanka/smoking-in-sri-lanka-what-is-allowed/" target="_blank">Travel Eat Love</a>,
  <a href="#sri-lanka">Source</a>
</p>


  `,LVA:`

<h2>
  Législation sur le vapotage en Lettonie (2025)
</h2>
<img src="/images-pays/lva.jpg" alt="Lettonie" />
<p>
  Depuis le <strong>1<sup>er</sup> janvier 2025</strong>, la Lettonie applique un cadre parmi les plus stricts d’Europe :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> 20 ans pour acheter ou posséder des produits de vapotage.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> seuls les arômes donnant goût ou odeur de tabac sont autorisés ; toutes les autres saveurs sont interdites, y compris pour les puffs jetables.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> 20 mg/ml maximum ; réservoirs limités à 2 ml et flacons de recharge à 10 ml.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> vapoter est interdit partout où fumer l’est (écoles, transports, lieux de travail, restaurants, etc.).</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> toute forme de promotion ou d’exposition visible au public est prohibée, sauf information neutre dans les boutiques spécialisées.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> avertissements sanitaires couvrant au moins 30 % des deux faces principales ; interdiction de visuels évoquant des saveurs ou des remises.</p>
  </li>
  <li>
    <p>💶 <strong>Fiscalité :</strong> droit d’accise de 0,29 € par millilitre sur tous les e-liquides, avec ou sans nicotine.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> amendes pouvant atteindre 1 420 € pour les points de vente en cas d’infraction.</p>
  </li>
</ul>

<p>
  Ces mesures visent à limiter l’attractivité du vapotage chez les jeunes et à harmoniser la réglementation lettone avec les exigences les plus restrictives de l’Union européenne.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://likumi.lv/ta/id/282077" target="_blank">Likumi.lv – Loi sur la circulation des produits du tabac et des e-cigarettes</a>,
  <a href="https://www.fm.gov.lv/en/excise-duty-0" target="_blank">Ministère des Finances – Barème des accises 2025</a>,
  <a href="#lettonie">Source</a>
</p>

      
`,LTU:`

      <h2>
  Législation sur le vapotage en Lituanie (2025)
</h2>
<img src="/images-pays/lva.jpg" alt="Lettonie" />
<p>
  Depuis le <strong>1<sup>er</sup> janvier 2025</strong>, la Lettonie applique un cadre très restrictif pour les cigarettes électroniques :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> 18 ans pour acheter, posséder ou utiliser des produits de vapotage.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> seules les saveurs donnant goût ou odeur de tabac sont autorisées ; toute autre saveur est interdite, y compris pour les puffs et les liquides sans nicotine.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> 20 mg/ml maximum ; réservoirs ≤ 2 ml ; flacons de recharge ≤ 10 ml.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> vapoter est interdit partout où fumer l’est (lieux de travail, transports, établissements scolaires, restauration…).</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> promotion, parrainage et vente à distance de produits de vapotage sont totalement prohibés.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> avertissement sanitaire couvrant ≥ 30 % des faces principales ; interdiction de visuels évoquant des saveurs.</p>
  </li>
  <li>
    <p>💶 <strong>Fiscalité :</strong> droit d’accise de <em>0,63 € par millilitre</em> sur tous les e-liquides, avec ou sans nicotine.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> amendes administratives, saisie des produits et suspension de licence pour les détaillants récidivistes.</p>
  </li>
</ul>

<p>
  Ce dispositif place la Lituanie parmi les pays européens les plus stricts, en particulier grâce à l’interdiction générale des arômes et à une fiscalité élevée.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/956e3e82158311e9bd28d9a28a9e9ad9" target="_blank">Loi I-1143 – Contrôle du tabac et des produits connexes</a>,
  <a href="https://ntakd.lrv.lt/en/eu-ceg/electronic-cigarettes-and-their-refill-containers/" target="_blank">NTAKD – Interdiction des arômes (depuis le 1/07/2022)</a>,
  <a href="https://finmin.lrv.lt/en/competence-areas/taxation/main-taxes/excise-duties/" target="_blank">Ministère des Finances – Barème d’accise 2025</a>,
  <a href="#lituanie">Source</a>
</p>

`,MUS:`
    
     <h2>
  Législation sur le vapotage à l'Île Maurice (2025)
</h2>
<img src="/images-pays/mus.jpg" loading="lazy" alt="Île Maurice" />
<p>
  Depuis l'entrée en vigueur des <strong>Public Health (Restrictions on Tobacco Products) Regulations 2022</strong>, l'Île Maurice applique une interdiction stricte des produits de vapotage :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction totale :</strong> La fabrication, l'importation, la distribution, la vente et la publicité des cigarettes électroniques, e-liquides (avec ou sans nicotine) et accessoires sont interdites. Cette mesure vise à protéger la santé publique, notamment celle des jeunes, en limitant l'accès à ces produits.</p>
  </li>
  <li>
    <p>🙅‍♂️ <strong>Usage personnel :</strong> Bien que la loi ne précise pas explicitement l'interdiction de l'usage personnel, les autorités appliquent une tolérance zéro. Les voyageurs sont fortement déconseillés d'apporter des dispositifs de vapotage, même pour usage personnel, sous peine de confiscation ou d'amende.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des sanctions administratives, telles que des amendes, la confiscation des produits et, dans certains cas, des poursuites judiciaires. Les autorités douanières et policières appliquent strictement ces mesures.</p>
  </li>
  <li>
    <p>🔄 <strong>Alternatives :</strong> Pour les personnes souhaitant arrêter de fumer, des thérapies de remplacement de la nicotine, telles que les gommes ou les patchs, sont disponibles légalement à Maurice. Il est recommandé de se renseigner auprès des pharmacies locales pour plus d'informations.</p>
  </li>
</ul>

<p>
  Ces mesures s'inscrivent dans le cadre du <strong>Plan national de lutte antitabac 2022-2026</strong>, qui vise à réduire la consommation de tabac et de produits associés dans le pays.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.tobaccocontrollaws.org/legislation/mauritius/e-cigarettes/main-policies" target="_blank">Tobacco Control Laws</a>,
  <a href="https://ecigator.com/guide/mauritius-vaping-laws-travelers/" target="_blank">Ecigator</a>,
  <a href="https://health.govmu.org/health/wp-content/uploads/2023/03/National-Action-Plan-for-Tobacco-Control-2022-2026.pdf" target="_blank">Ministère de la Santé de Maurice</a>
  <a href="#ile-maurice">Source</a>
</p>


  `,MYS:`
    
      <h2>
  Législation sur le vapotage en Malaisie (2025)
</h2>
<img src="/images-pays/mys.jpg" loading="lazy" alt="Malaisie" />
<p>
  La Malaisie a instauré une réglementation stricte sur les produits de vapotage à travers la <strong>Loi sur le contrôle des produits du tabac pour la santé publique (Acte 852)</strong>, entrée en vigueur le 1er octobre 2024. Cette loi vise à encadrer la vente, l'utilisation et la promotion des produits de vapotage pour protéger la santé publique, notamment celle des jeunes.
</p>

<ul>
  <li>
    <p>📋 <strong>Enregistrement des produits :</strong> Tous les e-liquides, avec ou sans nicotine, doivent être enregistrés auprès du ministère de la Santé. Les fabricants doivent fournir des analyses de laboratoire et obtenir une certification de conformité aux normes locales.</p>
  </li>
  <li>
    <p>🔢 <strong>Limitation de la nicotine :</strong> La concentration maximale autorisée est actuellement de 35 mg/ml, réduite à 20 mg/ml à partir du 1er octobre 2025. De plus, le volume maximal des cartouches sera limité à 2 ml à partir du 1er octobre 2026.</p>
  </li>
  <li>
    <p>🔞 <strong>Interdiction de vente aux mineurs :</strong> La vente de produits de vapotage aux personnes de moins de 18 ans est strictement interdite, avec des sanctions sévères en cas de non-respect.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite, y compris en ligne et sur les points de vente.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage et étiquetage :</strong> Les produits doivent afficher des avertissements sanitaires graphiques couvrant une partie significative de l'emballage, conformément aux spécifications du ministère de la Santé.</p>
  </li>
  <li>
    <p>🏪 <strong>Affichage en point de vente :</strong> L'exposition des produits de vapotage est interdite en dehors des boutiques spécialisées. Dans ces boutiques, les produits ne doivent pas être visibles depuis l'extérieur.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne et distributeurs automatiques :</strong> La vente de produits de vapotage en ligne et via des distributeurs automatiques est interdite.</p>
  </li>
  <li>
    <p>🗺️ <strong>Réglementation au niveau des États :</strong> Certains États, tels que Johor, Kelantan et Terengganu, ont imposé des interdictions supplémentaires sur la vente de produits de vapotage en refusant d'accorder des licences commerciales aux détaillants.</p>
  </li>
</ul>

<p>
  Ces mesures visent à réduire l'accès des jeunes aux produits de vapotage et à contrôler le marché pour assurer la sécurité des consommateurs.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://codeblue.galencentre.org/2024/10/government-mandates-graphic-health-warning-labels-on-vape-packaging-limits-nicotine-content/" target="_blank">CodeBlue</a>,
  <a href="https://www.malaymail.com/news/malaysia/2025/04/24/act-852-in-force-health-ministry-cracks-down-on-vape-sales-and-use-among-minors/174390" target="_blank">Malay Mail</a>,
  <a href="https://nsa-legal.com/posts/malaysias-vaping-regulations-a-new-era-for-public-health-and-industry-compliance" target="_blank">NSA Legal</a>,
  <a href="#malaisie" target="_blank">Source</a>
</p>


  `,NLD:`
    
      <h2>
  Législation sur le vapotage aux Pays-Bas (2025)
</h2>
<img src="/images-pays/nld.jpg" loading="lazy" alt="Pays-Bas" />
<p>
  Les Pays-Bas ont mis en place une réglementation stricte sur les produits de vapotage afin de protéger la santé publique, notamment celle des jeunes :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction des arômes :</strong> Depuis le 1er janvier 2023, seuls les e-liquides au goût de tabac sont autorisés. Les arômes sucrés, fruités ou mentholés sont interdits, même pour les produits sans nicotine. Les stocks existants pouvaient être écoulés jusqu'au 1er janvier 2024. Cette mesure a conduit à une réduction significative de l'usage du vapotage, avec environ 22 % des utilisateurs ayant cessé complètement et 40 % ayant réduit leur consommation.</p>
  </li>
  <li>
    <p>🏪 <strong>Restrictions de vente :</strong> Depuis le 1er juillet 2024, la vente de produits de vapotage est interdite dans les supermarchés, hôtels, restaurants et bars. À partir de 2025, seuls les magasins spécialisés seront autorisés à vendre ces produits.</p>
  </li>
  <li>
    <p>🛒 <strong>Interdiction de la vente en ligne :</strong> Depuis le 1er juillet 2023, la vente en ligne de tabac et de produits de vapotage est interdite, tant au niveau national qu'international.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite, à l'exception des boutiques spécialisées.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage neutre :</strong> Depuis le 1er octobre 2020, les produits de vapotage doivent être conditionnés dans des emballages neutres de couleur vert-brun foncé, sans éléments attractifs pour les jeunes.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> L'usage des cigarettes électroniques, avec ou sans nicotine, est interdit dans tous les lieux publics fermés, y compris les établissements d'enseignement et les transports en commun.</p>
  </li>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> La vente de produits de vapotage est interdite aux personnes de moins de 18 ans.</p>
  </li>
</ul>

<p>
  Ces mesures s'inscrivent dans le cadre du Plan national de prévention visant à atteindre une génération sans tabac d'ici 2040.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.government.nl/topics/smoking/government-measures-to-discourage-smoking" target="_blank">Gouvernement des Pays-Bas</a>,
  <a href="https://nltimes.nl/2025/03/18/one-five-vapers-quit-e-cigarettes-flavor-ban" target="_blank">NL Times</a>,
  <a href="https://tobaccoreporter.com/2025/03/18/report-dutch-flavor-ban-is-working/" target="_blank">Tobacco Reporter</a>,
  <a href="#pays-bas" target="_blank">Source</a>
</p>


  `,PRT:`
    <h2>
  Législation sur le vapotage au Portugal
</h2>
<img src="/images-pays/prt.jpg" loading="lazy" alt="Tunisie" />
<p>
  Le Portugal applique une réglementation stricte sur les produits de
  vapotage, alignée sur la directive européenne sur les produits du
  tabac (TPD), avec des mesures supplémentaires spécifiques :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> La vente de produits de vapotage est interdite aux personnes de moins de 18 ans.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> Le vapotage est interdit dans les lieux publics fermés, y compris les bars, restaurants, transports en commun et lieux de travail. Des zones spécifiquement désignées peuvent être prévues dans certains établissements.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne :</strong> La vente en ligne de produits contenant de la nicotine est interdite. Seuls les produits sans nicotine peuvent être vendus en ligne.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité & promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite, sauf dans les boutiques spécialisées.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage & étiquetage :</strong> Les produits doivent comporter des avertissements sanitaires couvrant au moins 30 % des faces principales de l'emballage. Les arômes sont autorisés, mais les produits doivent être conformes aux exigences de la TPD.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> Le taux maximal autorisé est de 20 mg/ml. Les flacons de recharge ne doivent pas dépasser 10 ml, et les réservoirs des dispositifs ne doivent pas dépasser 2 ml.</p>
  </li>
  <li>
    <p>💶 <strong>Taxation :</strong> Une taxe d'accise de 0,323 € par millilitre s'applique à tous les e‑liquides contenant de la nicotine. Les produits sans nicotine ne sont pas soumis à cette taxe.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des amendes pouvant aller jusqu'à 750 € pour usage dans des zones interdites, et à des sanctions administratives pour non‑conformité des produits ou des points de vente.</p>
  </li>
</ul>

<p>
  Ces mesures visent à protéger la santé publique, notamment celle des jeunes, et à réduire l'accès aux produits de vapotage. Il est recommandé aux voyageurs d'apporter leur propre matériel et consommables, en respectant les réglementations locales.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://ecigintelligence.com" target="_blank">ECigIntelligence</a>,
  <a href="https://www.theportugalnews.com" target="_blank">The Portugal News</a>,
  <a href="https://ecigator.com" target="_blank">Ecigator</a>,
  <a href="#portugal" target="_blank">Source</a>
</p>

        
  `,QAT:`
    
     <h2>
  Législation sur le vapotage au Qatar (2025)
</h2>
<img src="/images-pays/qat.jpg" loading="lazy" alt="Qatar" />
<p>
  Le Qatar applique une interdiction stricte et complète des produits de vapotage :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction totale :</strong> Depuis 2014, la fabrication, l'importation, la vente, la distribution, l'affichage, la publicité et l'utilisation des cigarettes électroniques et des e-liquides sont illégales. Cette interdiction a été renforcée par la <strong>Loi n° 10 de 2016 sur le contrôle du tabac</strong>.</p>
  </li>
  <li>
    <p>🚷 <strong>Usage personnel :</strong> L'utilisation personnelle des dispositifs de vapotage est également interdite. Les voyageurs ne doivent pas apporter de matériel de vape, même pour un usage personnel, sous peine de confiscation, d'amendes ou d'emprisonnement.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite, conformément à l'article 9 de la Loi n° 10 de 2016.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des sanctions sévères, incluant des amendes et des peines d'emprisonnement pouvant aller jusqu'à trois mois.</p>
  </li>
  <li>
    <p>🩺 <strong>Avertissements sanitaires :</strong> Le ministère de la Santé publique (MoPH) met en garde contre les risques pour la santé associés aux cigarettes électroniques, notamment les maladies cardiovasculaires, les accidents vasculaires cérébraux, le cancer, les lésions pulmonaires et la dépendance à la nicotine.</p>
  </li>
</ul>

<p>
  Il est fortement déconseillé d'apporter ou d'utiliser des dispositifs de vapotage au Qatar. Les autorités appliquent une politique de tolérance zéro à l'égard du vapotage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://gsthr.org/countries/profile/qat/2/" target="_blank">Global State of Tobacco Harm Reduction</a>,
  <a href="https://www.tobaccocontrollaws.org/legislation/qatar/e-cigarettes/main-policies" target="_blank">Tobacco Control Laws</a>,
  <a href="https://thepeninsulaqatar.com/article/27/06/2024/moph-warns-against-e-cigarettes-highlighting-significant-health-risks" target="_blank">The Peninsula Qatar</a>,
  <a href="#qatar" target="_blank">Source</a>
</p>

    

  `,SGP:`
    
      <h2>
  Législation sur le vapotage à Singapour (2025)
</h2>
<img src="/images-pays/sgp.jpg" loading="lazy" alt="Singapour" />
<p>
  Singapour applique une politique de tolérance zéro envers le vapotage, avec une interdiction totale couvrant tous les aspects liés aux cigarettes électroniques :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction complète :</strong> La <strong>Loi sur le contrôle de la publicité et de la vente du tabac (TCASA)</strong> interdit l'importation, la vente, la distribution, la possession, l'utilisation et l'achat de cigarettes électroniques, e-liquides (avec ou sans nicotine) et dispositifs de vapotage. Cette interdiction s'étend également aux produits de tabac chauffé et aux dispositifs similaires.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions sévères :</strong> Les contrevenants s'exposent à des amendes allant jusqu'à 2 000 SGD pour la possession, l'utilisation ou l'achat de dispositifs de vapotage. Les infractions liées à l'importation, la vente ou la distribution peuvent entraîner des amendes pouvant atteindre 10 000 SGD, une peine d'emprisonnement allant jusqu'à six mois, ou les deux. En cas de récidive, les peines peuvent être doublées.</p>
  </li>
  <li>
    <p>🚨 <strong>Application stricte :</strong> Les autorités, notamment la Health Sciences Authority (HSA) et l'Immigration and Checkpoints Authority (ICA), mènent des contrôles réguliers aux points d'entrée du pays, dans les écoles, les lieux publics et en ligne pour détecter et confisquer les produits interdits. Les voyageurs sont tenus de déclarer tout dispositif de vapotage à leur arrivée et de le remettre aux autorités pour éviter des sanctions.</p>
  </li>
  <li>
    <p>✈️ <strong>Impact sur les voyageurs :</strong> Il est fortement déconseillé d'apporter des dispositifs de vapotage à Singapour, même pour un usage personnel. Les voyageurs en transit doivent s'assurer que ces produits restent dans leurs bagages à main et ne sont pas utilisés pendant leur séjour.</p>
  </li>
  <li>
    <p>📚 <strong>Mesures éducatives :</strong> Le gouvernement singapourien mène des campagnes de sensibilisation pour informer le public, en particulier les jeunes, des dangers du vapotage et des conséquences légales associées. Des programmes de soutien sont également mis en place pour aider les contrevenants à cesser l'utilisation de ces produits.</p>
  </li>
</ul>

<p>
  En raison de ces réglementations strictes, il est impératif de ne pas apporter ou utiliser de produits de vapotage à Singapour pour éviter des sanctions sévères.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.hsa.gov.sg/tobacco-regulation/vaping-enforcement">Health Sciences Authority</a>,
  <a href="https://www.moh.gov.sg/newsroom/penalties-for-vaping">Ministère de la Santé</a>,
  <a href="https://www.moh.gov.sg/newsroom/multi-agency-effort-to-step-up-vaping-enforcement-and-education">Ministère de la Santé</a>,
  <a href="https://ecigator.com/guide/can-you-bring-vapes-into-singapore/">Ecigator</a>,
  <a href="https://www.channelnewsasia.com/singapore/vape-vaping-cna-explains-hsa-moe-moh-4519186">CNA</a>,
  <a href="#singapour">Source</a>
</p>

    

  `,SVN:`


      <h2>
  Législation sur le vapotage en Slovénie (2025)
</h2>
<img src="/images-pays/svn.jpg" alt="Slovénie" />
<p>
  Le 24 avril 2025 marque l’entrée en vigueur d’un dispositif particulièrement strict :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> vente interdite aux moins de 18 ans.</p>
  </li>
  <li>
    <p>🚫 <strong>Arômes :</strong> tous les arômes sont bannis dans les e-liquides (avec ou sans nicotine) à l’exception du <em>strict goût tabac</em>.</p>
  </li>
  <li>
    <p>🍃 <strong>Puffs jetables :</strong> soumis aux mêmes règles ; tout dispositif aromatisé devient illégal à la vente ou à l’importation.</p>
  </li>
  <li>
    <p>🔬 <strong>Concentration en nicotine :</strong> plafond de 20 mg/ml ; réservoirs limités à 2 ml et flacons de recharge à 10 ml.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> vapoter est prohibé dans tous les espaces fermés où fumer est interdit (lieux de travail, écoles, transports, restauration, etc.).</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> toute forme de promotion ou de parrainage des produits de vapotage est interdite, y compris en ligne.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> avertissements sanitaires couvrant au moins 30 % des faces principales ; visuels évoquant des saveurs proscrits.</p>
  </li>
  <li>
    <p>💵 <strong>Fiscalité :</strong> accise spécifique : environ 0,18 €/ml pour les liquides nicotinés et 0,10 €/ml sans nicotine.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> amendes pouvant atteindre 5 000 € et saisie des produits non conformes.</p>
  </li>
</ul>

<p>
  Ce cadre place la Slovénie parmi les pays européens les plus restrictifs à l’égard du vapotage, en ciblant tout particulièrement l’attractivité des saveurs auprès des jeunes.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.uradni-list.si/_pdf/2024/Ur/u2024031.pdf" target="_blank">Uradni list RS – ZOUTPI-B (31/2024)</a>,
  <a href="https://www.uradni-list.si/" target="_blank">Uradni list RS – Pravilnik 96/2024</a>,
  <a href="https://www.tobak.si/ords/r/tob/enhome/home" target="_blank">NIJZ – Portail national « tobak.si »</a>,
  <a href="#slovenie" target="_blank">Source</a>
</p>

    
  `,THA:`
    
    <h2>
  Législation sur le vapotage en Thaïlande (2025)
</h2>
<img src="/images-pays/tha.jpg" alt="Thaïlande" />
<p>
  La Thaïlande applique une interdiction stricte et complète des produits de vapotage :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction totale :</strong> Depuis 2014, la fabrication, l'importation, la vente, la distribution, la possession et l'utilisation de cigarettes électroniques, de e-liquides (avec ou sans nicotine) et de dispositifs de vapotage sont illégales. Cette interdiction a été renforcée par la <strong>Loi sur le contrôle du tabac de 2014</strong> et le <strong>Code des douanes</strong>.</p>
  </li>
  <li>
    <p>🚷 <strong>Usage personnel :</strong> La simple possession ou l'utilisation de dispositifs de vapotage est considérée comme une infraction grave. Les contrevenants, y compris les touristes, peuvent être accusés de possession de marchandises de contrebande, passible d'une amende pouvant atteindre cinq fois la valeur des produits saisis ou d'une peine d'emprisonnement pouvant aller jusqu'à 5 ans, voire les deux.</p>
  </li>
  <li>
    <p>✈️ <strong>Importation :</strong> L'importation de dispositifs de vapotage est illégale. Les voyageurs ne doivent pas apporter de matériel de vape, même pour un usage personnel, sous peine de confiscation, d'amendes ou d'emprisonnement.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite. Les autorités surveillent activement les plateformes en ligne pour détecter et supprimer les contenus liés au vapotage.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des sanctions sévères, incluant des amendes pouvant atteindre 30 000 THB (environ 900 USD) et des peines d'emprisonnement pouvant aller jusqu'à 10 ans, en fonction de la gravité de l'infraction.</p>
  </li>
  <li>
    <p>🚨 <strong>Application stricte :</strong> Les autorités thaïlandaises mènent des contrôles réguliers pour détecter et confisquer les produits interdits. En février 2025, une campagne nationale a conduit à l'arrestation de 690 personnes et à la saisie de près de 455 000 produits de vapotage.</p>
  </li>
</ul>

<p>
  Il est fortement déconseillé d'apporter ou d'utiliser des dispositifs de vapotage en Thaïlande. Les autorités appliquent une politique de tolérance zéro à l'égard du vapotage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://iamkohchang.com/blog/vaping-in-thailand.html" target="_blank">iamkohchang.com</a>,
  <a href="https://ecigator.com/news/thailand-vape-users-5-years-prison-risk/" target="_blank">Ecigator</a>,
  <a href="https://filtermag.org/thailand-vape-crackdown/" target="_blank">Filter Magazine</a>,
  <a href="https://www.nationthailand.com/news/general/40047198" target="_blank">The Nation Thailand</a>,
  <a href="#thailande" target="_blank">Source</a>
</p>

    

  `,TUN:`
    
     <h2>
  Législation sur le vapotage en Tunisie (2025)
</h2>
<img src="/images-pays/tun.jpg" alt="Tunisie" />
<p>
  En Tunisie, le vapotage est autorisé mais encadré par une réglementation spécifique :
</p>

<ul>
  <li>
    <p>✅ <strong>Statut légal :</strong> Les cigarettes électroniques et les e-liquides sont légaux, mais leur vente et distribution sont soumises à des restrictions. La Régie Nationale des Tabacs et des Allumettes (RNTA) supervise la commercialisation de ces produits.</p>
  </li>
  <li>
    <p>🛂 <strong>Importation personnelle :</strong> Les voyageurs peuvent apporter leur matériel de vapotage pour usage personnel. Il est recommandé de déclarer ces produits à la douane à l'arrivée.</p>
  </li>
  <li>
    <p>💧 <strong>Restrictions sur les e-liquides :</strong> Les contenants ne doivent pas dépasser 100 ml, et le volume total de liquides ne peut excéder 1 litre.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> Le vapotage est interdit dans les lieux publics fermés, tels que les restaurants, bars et hôtels. Il est conseillé de vapoter discrètement dans les espaces ouverts et de respecter les panneaux d'interdiction.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité pour les produits de vapotage est interdite.</p>
  </li>
  <li>
    <p>⚖️ <strong>Réglementation en évolution :</strong> Le ministère de la Santé travaille sur un projet de loi visant à encadrer davantage l'utilisation des cigarettes électroniques, notamment pour lutter contre l'usage chez les jeunes.</p>
  </li>
</ul>

<p>
  Il est recommandé aux voyageurs de se renseigner sur les réglementations locales avant de vapoter en Tunisie et de faire preuve de discrétion pour éviter tout désagrément.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://ecigator.com/fr/regulation-fr/tunisia-vaping-laws-regulations-guide/" target="_blank">Ecigator</a>,
  <a href="https://www.tunisienumerique.com/tunisie-quand-les-panneaux-publicitaires-font-de-la-resistance-la-vape-en-vedette-malgre-les-interdictions/" target="_blank">Tunisie Numérique</a>,
  <a href="https://www.2firsts.com/news/tunisia-drafts-e-cigarette-regulation-to-combat-teen-usage" target="_blank">2Firsts</a>,
  <a href="#tunisie" target="_blank">Source</a>
</p>

    

  `,USA:`
    
    <h2>
  Législation sur le vapotage aux États-Unis (2025)
</h2>
<img src="/images-pays/usa.jpg" alt="USA" />
<p>
  La réglementation du vapotage aux États-Unis repose sur une combinaison de lois fédérales et de réglementations spécifiques à chaque État, visant à encadrer la vente, la distribution et l'utilisation des produits de vapotage.
</p>

<ul>
  <li>
    <p>🎂 <strong>Âge légal :</strong> La loi fédérale interdit la vente de produits du tabac, y compris les cigarettes électroniques, aux personnes de moins de 21 ans. Les détaillants doivent vérifier l'âge des acheteurs à l'aide d'une pièce d'identité avec photo pour toute personne de moins de 30 ans.</p>
  </li>
  <li>
    <p>✔️ <strong>Autorisation des produits :</strong> Tous les produits de vapotage doivent obtenir une autorisation de mise sur le marché de la FDA via le processus PMTA (Premarket Tobacco Product Application). En 2025, la FDA a autorisé uniquement certains produits aux arômes de tabac ou de menthol, rejetant plus d'un million de demandes pour des produits aromatisés jugés attractifs pour les jeunes.</p>
  </li>
  <li>
    <p>🚫 <strong>Interdiction des arômes :</strong> En avril 2025, la Cour suprême a confirmé la décision de la FDA d'interdire la commercialisation des e-liquides aromatisés (fruits, desserts, etc.), considérés comme particulièrement attractifs pour les jeunes.</p>
  </li>
  <li>
    <p>🌍 <strong>Réglementations étatiques :</strong> Certains États, tels que la Californie, New York et le Massachusetts, ont mis en place des lois plus strictes, interdisant la vente de produits de vapotage aromatisés et imposant des taxes spécifiques. D'autres États exigent que les produits soient enregistrés dans des répertoires d'État et approuvés par la FDA avant leur commercialisation.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> La publicité pour les produits de vapotage est strictement encadrée, avec des restrictions sur les supports et les messages utilisés, notamment pour éviter de cibler les jeunes.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> La vente ou la distribution de produits de vapotage non autorisés peut entraîner des sanctions sévères, y compris des amendes, la saisie des produits et des poursuites judiciaires. En 2024, la FDA a émis plus de 800 lettres d'avertissement à des détaillants pour la vente de produits non autorisés.</p>
  </li>
</ul>

<p>
  Il est essentiel de se renseigner sur les lois spécifiques de l'État dans lequel vous vous trouvez, car les réglementations peuvent varier considérablement d'un État à l'autre.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.fda.gov/tobacco-products/ctp-newsroom/year-review-fdas-progress-tobacco-product-regulation-2024" target="_blank">FDA</a>,
  <a href="https://www.washingtonpost.com/politics/2025/04/02/ecigarettes-vapes-supreme-court-case/" target="_blank">The Washington Post</a>,
  <a href="https://ecigator.com/lounge/us-ecig-regulations-2025-difference/" target="_blank">Ecigator</a>,
  <a href="#usa" target="_blank">Source</a>
</p>

   

  `};window.countryIcons=Cn,window.getCountryCategory=Sn,window.countryMessages=kn,window.iso3to2=An,window.detailedInfo=Mn;const En="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF1UlEQVRYheWXa4xV1RXHf2ufxz373nlKsYBMeJgW7KQEEdNqHG2hVoc4WglobEtaGmJFaEPFpsC0tJRqqSKNhZCWChEwNEAmtSmoMRpTTSOtWkyNsdCUlKBSceZe5j333rPP6oc7jKMz987wofFDV7JzXnut/3+vddZae4uq8nGK+VjRAf/DjzHadw+a3wsElfQuAdYYnxaEao15RpXtwInyKjFiGpHal4Fo6K0MD4H2fRfN7wTCSuAzBY5KNbO7/gOFAkyYDBTpV8di4JmymjoAfhOm+kmQemBYCLR4EO3fzhgrR4QnJCOzN25wNDTmmXpFnsVLY97PYY3HbmBaeeUI3Ito/4+GkVJF3VlcbjIuG+GyttL4tvZY3bI5pYAuuN7Xry4NNPBF5zT6qrHVJGf3V7YR4TogKf4VVS0RcD334rLhWODTXc6+d/LvVm1kdP19KdViWrWQ1ueejNTz0IcfSKn2WnVZu7CyrRB3fhaa9CMa/42kcx6Ireh6YLep51uLboz5x8mEU6dSaI+iCZg6YeWKmAOHY17/S8i0SXIKuAo4X96cQ6LNiMvNAD0zVuyvM2leajusLFmW5/mnIhZcC1r6J9AEJCV84rI8C28wHPy9T5LlJwibyptUkAmIywaMyMYPSwScbO+i4crP5bmhyePA4z5JDIkIcb8S1QAx/OFp5St35nn+jxELvgRJP9OB05W8YMYAF5QfGsvUh7Y63nsfHtsZgIPO83BTS5G5TQWOHlHUwa2LhJZmnxWr83TmAGirZBw8xvrxZmifLb75ilUQPbAnUh2wqt1WjxyKdNCP2nKzrwPnrGqX1fbTaQXRn7aGqn3WuQ67shLGWKW4TZ34S75e4AvXedx+m5D0lmDDUEouEvA8ECCJYcJk5bHtKTY+EPP2GYwJ2QTUlwOoRGAVHlc+/KjjrRMJO7YFRD6DSDB50gcTq6oEzyvdJ91w113C5+cLS79WhJRMBHZdLIEpxrChPSes31hgw9qQxqshcYMgCdTX6CAbqMqAuWBJIB3C9m0hx1517NmdIMISYNHFENhCrUxZtrzI9AZDa6shyX5E0ZMhAjXVgsgH35IY5jfBfatC7l9fpKcgAD8HasdDYKHxWXZwX8KzL8RseyjAmiGsIfEMRINNra5upJEkC5s3GTJpWHN/jKlnDvCdsQjUo+zo6IQftBa5pdnntiUGTUYCGAOZzCCBWhk5QcD68KtHAvbsL/LSs4rx2QzMqETgHnMJs7f8IuH028rv9gbQPfqOyfOgKl0Crh+NAKUKefsdQvONHmu+X6Q3DyiPM6zsDifQYEIefOMYbN1RYOcvA6qskoyyeiiFIJMGVairLV1HlR44uD/k9TeUvfsSTA1NwB0jCSiH+gdg+coi8+YaVnzTkBTLGAXCEGZOFzJp4VOXj+4BKGVOdUbZsS1g9doC2XdFjM8uBnc94rIW4G4TsfPXuxJv5ZoCb71qmX2FkuTLExAPzrYL595V5l4jJF2VN7dO4NovFph4qXC0LUCLHALuxGVtWrtsV+6dUrld971Q1Vl1HVZdtvzI/dvqlxcE+tnPeHrkUKRJrvJ87bV68nhaweiRtki10w64rG3GZe067bN608JApzUYPXdmbHDttvrU4Qu9gKFeUEnHdVhVZ7V1baiXTvRUe60mWfsnA3zj+Cvwwosx994dMHECI3L+o6IxzPo01NV4GCM0XWMIKjbVks3kPKxa7ZHPK/ufUMRyvQ98srNbiR34voAFMwYBgJmzhDdfC8m1K41XGXDjOOAIBAWoyggn/pmA5+EDx+bNMc1TJhm2Plpg6qSQy2dI+bQaJqkQPE947c/KeM5XgvLbfQnvnE1Y3JKCvJ7DZe187bP68nORNkz1FIymUt7/ZASBUWuNbvlxSnXAqsvaB0tpqPzMZFjXmxPvX6dKa5FxhOFiRbXUxideBkkvTyMsvVAHAG4Wj+UScjVKHYzLqxfNAcfxpEgb8BtA5f/+dPxf0VMxp7sKksoAAAAASUVORK5CYII=",zn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD2klEQVRYheXXW4iVVRQH8N/5xnFKTce8NIoWUVJGppNSWnaBeih6qiwoM8lbUZYkhlRaLyaVRWWmeEuS1CSFBDEQL2gJRZRdhKDUB42YrLykguOM5/SwvmOn6ZzzjRIYtJ6+s/faa/333v/1X/vkCoWCc2nJOc3+XwDQofRH4ehRh6ZM1vL1TpKq2K7CLNyMjtiJV7Ch4op8XlLfXY+VqyUNDaeHc6UcOPTYBCd37KCurlry6/ExuuMnHMMVyOFxLKi4sqVF0q+fC5csU9OnL0qu4PjSxU5s3JiVHD5Mk49GfwxEI37EHFxTcWVtrVP79vlj9qzTQwm07t3j2OKFkh49spLPSZNOxQd4Ei/hV9yCzninWoBcXZ0TG9Zr3rwpfhcKBYenTNb8yfase2/ENrHToViKcencLlyHp/AyJmJJxUiFglzXrnquXSd3YusWByeOk3TrVi05bMJtuBZdsL3N/Kt4Ft+iZwpoX8Vo+bxOox+S+2X4MIXm5qzdj8FyzMMUfIkhZfwGogFbsQiPVgua69hRrqlxUFbyPvgeh9Kk4/F6OncYRwUv4FPchBV4EMPxecXI+bwkI3mNIFk3zERtSfIDGCY0YXk6NhIT8HQ6v1roRHlLkkwlHIZHBPneFyVYtC+wR+jAGrSk4wtxPAV+CZ4XGlEeQwaAdTgpjvN+scOilbL2vJJYSQp0rqiOmbj4bADMxkV4QdT5PH+X7j4l313EdRXtdtyFUWL3a84UwJWC7XuFxi9ArzY+nUq+L2gzV5uu2Y3XxFVOPBMA76YJ7saNeLiMT+mOy4lIf7yJ6fhNnGRDW6dyACZhhDjyXWIHtRXAd06/68vMEzowBGPRTxCzKoD+eBE/Y4bobsMrBK8pAdC9gk8t3hLd8yMh3aVE/geAGeiLZ9LFcysELgLokn7XV/EbKU51Ko5gPrqWAzAiddyElaKeK9ZvurY9AAhCHsEbGJTmAbmmoYPhfNFEegnGDlDtdRPWiiewBZ8hq5evFWW5F5eKMm4qnsB0XI63RemsyAhGaMIsrG9HcrgXdwhRK0hVNUFvQbz9QrXmq0yqUjsgSvQGvNcOf1glTmtVunZsgufSyXvEc2pMO4N9Ix4nBwXDW9uxpl7wYbzg17REHM1X+A63+otYWdaYAu6NB7R5YVexUaIKFuHqDkLxTqaIdov7qcb+ovVMgeeVF6pK1opTor/ogM24D5cJ5k8QjeRUO4LVCB61ZDmKTeXFFfwu2vz+XNPQwQPwA5pEw9iGzLf5WVpetObZuBPTijowSXS9uhRIEfG/bQVRYfXiJCbn/vf/jv8EDmjk6B3pC70AAAAASUVORK5CYII=";window.L=Ln,window.attentionPng=En,window.dangerPng=zn,document.addEventListener("DOMContentLoaded",()=>{document.body.innerHTML=`
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
  `})})();
