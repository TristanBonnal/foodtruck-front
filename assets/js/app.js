const app = {
    apiRootUrl: 'https://foodtruckapi.tristan-bonnal.fr/api',

    init: function(){
       login.init(); 
       logout.init();
       signup.init();
       reservation.init();
    }
}


document.addEventListener("DOMContentLoaded", app.init);