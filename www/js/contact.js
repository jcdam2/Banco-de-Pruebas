 // Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function contactos() {
        // specify contact search criteria
        var options = new ContactFindOptions();
        options.filter="";          // empty search string returns all contacts
        options.multiple=true;      // return multiple results
        filter = ["displayName","phoneNumbers"];   // return contact.displayName field

        // find contacts
        navigator.contacts.find(filter, onSuccess, onError, options);
    }

    // onSuccess: Get a snapshot of the current contacts
    //
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
