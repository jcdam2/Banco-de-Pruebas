function geolocationSuccess(position) {
    alert('Latitud: ' + position.coords.latitude +
           ' Longitud: ' + position.coords.longitude);
}

function geolocationError(error) {
    alert('Error: ' + error.message);
}
function geolocalizar() {
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
}
