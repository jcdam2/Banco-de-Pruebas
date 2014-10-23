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

window.onload=function(){
    document.getElementById("foto").style.width = (window.innerWidth-50)+"px";
    document.getElementById("foto").style.height = (window.innerWidth-50)+"px";
    document.getElementById("foto").style.backgroundImage="url('img/cordova.png')";
    document.getElementById("foto").style.backgroundSize="50% 50%";
};

    // Llamada si algún error ocurre.
    //
    function captureError(error) {
        var msg = 'Ocurrió un error mientras se capturaba: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }
function capturePhoto() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 90,
        destinationType: Camera.DestinationType.FILE_URI,
        correctOrientation: true,
        targetWidth: 1000,
        targetHeight: 1000
    });
}

function getPhoto(source) {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 90,
        destinationType: destinationType.FILE_URI,
    sourceType: source });
}

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onPhotoURISuccess(imageURI) {
    document.getElementById("foto").style.backgroundImage="url('"+imageURI+"')";
    document.getElementById("foto").style.backgroundSize="100% 100%";
}

function onFail(message) {
    alert('Failed because: ' + message);
}