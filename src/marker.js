const mapbox = require('mapbox-gl');

const buildMarker = (type, coords) => {

  let icon;

  if (type === "hotel"){
    icon = 'http://i.imgur.com/D9574Cu.png';
  }

  if (type === "activity"){
    icon = 'http://i.imgur.com/WbMOfMl.png';
  }

  if (type === "restaurant"){
    icon = 'http://i.imgur.com/cqR6pUI.png'
  }

  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${icon})`;

 return new mapbox.Marker(markerDomEl).setLngLat(coords);

}

module.exports = buildMarker;
