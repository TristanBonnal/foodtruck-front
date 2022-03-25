login = {
    init: function() {
        console.log('login init');
        document.getElementById('logginButton').addEventListener('click', this.checkLoginJWT);
    },

    checkLoginJWT: function() {
            //API params
            let config = {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: "bonnal.tristan91@gmail.com",
                    password: "secret"
                })
            };
            
            // Consuming API
            fetch(app.apiRootUrl + '/login_check', config)
            .then(
                response => response.json()
            )
            .then(
                function(token) {
                    console.log(token);
                }
            );

    },
}