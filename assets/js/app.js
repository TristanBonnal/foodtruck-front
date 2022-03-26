const app = {
    apiRootUrl: 'http://localhost:8000/api',

    init: function(){
       login.init(); 
       logout.init();
       signup.init();
       test.init();
    }
}


document.addEventListener("DOMContentLoaded", app.init);