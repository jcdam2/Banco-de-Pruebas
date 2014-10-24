// Comprueba la disponibilidad del móbil y permite usar las funciones de PhoneGap.
//document.addEventListener("deviceready", contactos, false);

// Llama a la aplicación.

function contactos() {
// Especificación de busqueda de contactos.
    var options = new ContactFindOptions(); // Creo una variable que utiliza la función FindOptions.
    options.filter=""; // Busqueda vacía, enviará todos los contactos.
    options.multiple=true; // Devuelve múltiples resultados.
    filter = ["displayName", "phoneNumbers"];   // Devuelve el Nombre.
// Búsqueda de contactos.
    navigator.contacts.find(filter, contactSuccess, contactError, options);
}

// onSuccess: Recibes los contactos por alertas.
function contactSuccess(contacts) {
    for (var i=0; i<contacts.length; i++) {
        alert(contacts[i].displayName + contacts[i].phoneNumbers.value);
    }
};

    // onError: Failed to get the contacts
    //
function contactError(contactError) {
    alert('Error en la lectura de contactos.');
}
