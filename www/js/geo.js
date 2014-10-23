function geolocalizar() {
    alert('Hola');
    navigator.geolocation.getCurrentPosition(onSucess, onError);
};

var onSucess = function(position) {
    alert('Latitud : '  + position.coords.latitude +    '\n' +
          'Longitud: '  + position.coords.longitude +   '\n' +
          'Hora: '      + new Date(position.timeStamp)+ '\n');
};

function (onError) {
    alert('Código: '    + error.code +                  '\n' +
          'Mensaje: '   + error.message +               '\n' );
};
