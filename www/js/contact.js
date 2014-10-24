// Comprueba la disponibilidad del móbil.
document.addEventListener("deviceready", onDeviceReady, false);

// Llama a la aplicación.

function contactos() {
// Especificación de busqueda de contactos.
    var options = new ContactFindOptions(); // Creo una variable que utiliza la función FindOptions.
    options.filter=""; // Busqueda vacía, enviará todos los contactos.
    options.multiple=true; // Devuelve múltiples resultados.
    filter = ["displayName"];   // Devuelve el Nombre.
// Búsqueda de contactos.
    navigator.contacts.find(filter, onSuccess, onError, options);
}

// onSuccess: Recives los contactos por alertas.
function onSuccess(contacts) {
    for (var i=0; i<contacts.length; i++) {
        alert(contacts[i].displayName);
    }
};

    // onError: Failed to get the contacts
    //
function onError(contactError) {
    alert('onError!');
}
