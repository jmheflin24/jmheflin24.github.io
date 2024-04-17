function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.439200, lng: -79.962390},
        zoom: 8
    });
}
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
