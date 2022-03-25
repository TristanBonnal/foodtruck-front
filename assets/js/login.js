login = {
    init: function() {
        console.log('login init');
        document.getElementById('logginButton').addEventListener('click', this.checkLoginJWT);
    },

    checkLoginJWT: function() {
            // Form value
            const emailValue = document.getElementById('loginEmail').value;
            const passwordValue = document.getElementById('loginPassword').value;

            //API params
            let config = {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: emailValue,
                    password: passwordValue
                })
            };
            
            // Consuming API
            fetch(app.apiRootUrl + '/login_check', config)
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
                function(token) {
                    localStorage.setItem('token', JSON.stringify(token));
                }
            )
            .catch(
                function(error) {
                    console.log(error.status);
                }
            );

    },
}