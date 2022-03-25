const app = {
    apiRootUrl: 'http://localhost:8000/api',

    init: function(){
       login.init(); 
    }
}


document.addEventListener("DOMContentLoaded", app.init);