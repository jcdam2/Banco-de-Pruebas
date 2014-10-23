/* Lo dejamos en Stand-By mientras miramos los contactos
        NO FUNCIONA -- NO FUNCIONA -- NO FUNCIONA
*/


var onSucess = function (position) {
    alert('Latitud : '  + position.coords.latitude      + '\n' +
          'Longitud: '  + position.coords.longitude     + '\n' +
          'Hora: '      + position.timestamp            + '\n');
};

function (onError) {
    alert('Código: '    + error.code                    + '\n' +
          'Mensaje: '   + error.message                 + '\n' );
}

function geolocalizar() {
    navigator.geolocation.getCurrentPosition(onSucess, onError);
}
