signup = {
    init: function() {
        console.log('signup init')
        document.getElementById('signupButton').addEventListener('click', this.register);
    },

    // Create and signin new user
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
                document.getElementById('closeModal2').click();
                login.checkLoginJWT('signupEmail', 'signupPassword');
            }
        )
        .catch(
            function(error) {
                return error.json();
            }
        )
        .then(
            (errorMessage) => {
                if (errorMessage) signup.displayError(errorMessage.message[1]);
            }
        );
    },


    // Display error message if form is invalid
    displayError: function(errorMessage) {
        const modalElement = document.getElementById('modalBodySignup');
        const previousErrorElement = document.getElementById('errorReservationSignup');

        
        const errorElement = document.createElement('div');
        errorElement.classList.add('alert', 'alert-danger');
        errorElement.id = 'errorReservationSignup';
        errorElement.textContent = errorMessage;
        if (!previousErrorElement) {
            modalElement.appendChild(errorElement);
        } else {
            previousErrorElement.parentNode.replaceChild(errorElement, previousErrorElement);
        }
    }
}
