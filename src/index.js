const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiYW5uYWxlZWp1ZGUiLCJhIjoiY2pkMXVvczljMjMybTJ3bjIwcGRyN2ZieiJ9.zEBJ3K_MazsA9U1PA6ARrA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const marker = buildMarker("hotel", [-74.009, 40.705])
console.log(marker)
marker.addTo(map)


