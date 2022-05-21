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
    }
}