user = {
    init:function() {
        this.getUser();
    },

    //  Get the informations of the logged user
    getUser: function() {
        const token= JSON.parse(localStorage.getItem('token')).token;
        //API params
        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        
        // Consuming API
        fetch(app.apiRootUrl + '/users', config)
        .then(
            function(response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            }
        )
        .then(
            function(user) {
                // Add a welcome message
                const welcomeElement = document.getElementById('welcome');
                welcomeElement.textContent = 'Bienvenue ' + user.firstname;
            }
        )
        .catch(
            function(error) {
            }
        );
    },

    // If there is a token in the localstorage logout if is expired
    checkTokenValidity: function() {
        const tokenJson =  JSON.parse(localStorage.getItem('token'));
        if (tokenJson) {
            if (this.parseJwt(tokenJson.token).exp < Date.now()/1000) {
                localStorage.clear();
                window.location.href = "/"
            }
        }
    },

    // Decoding JWT to get the expiracy date
    parseJwt: function (token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }
}