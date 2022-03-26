signup = {
    init: function() {
        console.log('signup init')
        document.getElementById('signupButton').addEventListener('click', this.register);
    },

    register: function(e) {
        // Form value
        const emailValue = document.getElementById('signupEmail').value;
        const lastnameValue = document.getElementById('signupLastname').value;
        const firstnameValue = document.getElementById('signupFirstname').value;
        const passwordValue = document.getElementById('signupPassword').value;
        const foodtruckNameValue = document.getElementById('signupFoodtruckName').value;

        //API params
        let config = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: emailValue,
                password: passwordValue,
                firstname: firstnameValue,
                lastname: lastnameValue,
                foodtruckName: foodtruckNameValue,
            })
        };
        
        // Consuming API
        fetch(app.apiRootUrl + '/signup', config)
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
            function(content) {
                // Auto login
                login.checkLoginJWT('signupEmail', 'signupPassword');
            }
        )
        .catch(
            function(error) {
                
            }
        );
    }
}
