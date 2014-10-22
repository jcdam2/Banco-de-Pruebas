var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
};

 // Función 'callback' satisfactoria
    //
    function captureSuccess(mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            uploadFile(mediaFiles[i]);
        }
    }

    // Llamada si algún error ocurre.
    //
    function captureError(error) {
        var msg = 'Ocurrió un error mientras se capturaba: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }

    // Un botón llamara esta función
    //
    function captureImage() {
        // Lanza la aplicación de cámara,
        // y permite capturar hasta 2 imágenes
        navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
    }

    // Sube los ficheros al servidor
    function uploadFile(mediaFile) {
        var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;

        ft.upload(path,
            "http://my.domain.com/upload.php",
            function(result) {
                console.log('Subida correcta: ' + result.responseCode);
                console.log(result.bytesSent + ' bytes enviados');
            },
            function(error) {
                console.log('Error en la subida del fichero ' + path + ': ' + error.code);
            },
            { fileName: name });
    }
