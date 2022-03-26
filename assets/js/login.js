login = {
    init: function() {
        console.log('login init')
        this.navDisplay();
        document.getElementById('loginButton').addEventListener('click', this.login);
    },

    login: function() {
        login.checkLoginJWT('loginEmail', 'loginPassword');
    },

    checkLoginJWT: function(emailId, passwordId) {

        // Form value
        const emailValue = document.getElementById(emailId).value;
        const passwordValue = document.getElementById(passwordId).value;

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
                // login.displaySuccess();
                login.navDisplay();
                window.location.href = "/"
            }
        )
        .catch(
            function(error) {
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
            modalBodyElement.appendChild(errorElement);
        }
    },

    displaySuccess: function() {
        const modalBodyElement = document.querySelector('.modal-body');

        if (document.getElementById('errorLogin')) {
            document.getElementById('loginButton').remove();
        }
        if (document.getElementById('successLogin') == undefined) {
            const successElement = document.createElement('div');
            successElement.classList.add('alert', 'alert-success');
            successElement.id = 'successLogin';
            successElement.textContent = 'Connexion réussie';
            modalBodyElement.appendChild(successElement);
        }
    },

    // Chande the nav-links if user is logged
    navDisplay: function() {
        if (localStorage.getItem('token')) {
            document.getElementById('loginLink').classList.add('hidden');
            document.getElementById('registerLink').classList.add('hidden');
            document.getElementById('logoutLink').classList.remove('hidden');
            document.getElementById('reservationLink').classList.remove('hidden');
        }
    },

}