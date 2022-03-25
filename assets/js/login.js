login = {
    init: function() {
        console.log('login init');
        document.getElementById('logginButton').addEventListener('click', this.checkLoginJWT);
    },

    checkLoginJWT: function(e) {
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
                    login.displaySuccess();
                }
            )
            .catch(
                function(error) {
                    console.log(error.status);
                    login.displayError();
                }
            );

    },

    displayError: function() {
        if (document.getElementById('errorLogin') == undefined) {
            const modalBodyElement = document.querySelector('.modal-body');
            const errorElement = document.createElement('div');
            errorElement.classList.add('alert', 'alert-danger');
            errorElement.id = 'errorLogin';
            errorElement.textContent = 'Identifiants invalides';
            console.log(errorElement);
            modalBodyElement.appendChild(errorElement);

        }
    }
}