function initMap() {
  let location = {
    lat: 52.070348,
    lng: -0.51732,
  };

  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  let marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
