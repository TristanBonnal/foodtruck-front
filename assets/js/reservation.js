reservation = {
    init: function() {
        console.log('init reservation')
        document.getElementById('reservationButton').addEventListener('click', this.reservationHandler)
        document.getElementById('addReservationButton').addEventListener('click', this.addReservation)
    },

    reservationHandler: function(e) {
        e.preventDefault();
        if (!localStorage.getItem('token')) {
            reservation.displayAlert();
        } else {
            document.getElementById('reservationSection').classList.toggle('hidden');
            document.getElementById('introSection').classList.toggle('hidden');
            reservation.fetchReservations();
        }
    },

    displayAlert: function() {
        if (document.getElementById('errorNotLoggedReservation') == undefined) {
            const introSectionElement = document.getElementById('introSection');
            const errorElement = document.createElement('div');
            errorElement.classList.add('alert', 'alert-info');
            errorElement.id = 'errorNotLoggedReservation';
            errorElement.textContent = 'Veuillez vous connecter ou vous inscrire';
            introSectionElement.appendChild(errorElement);
        }
    },

    fetchReservations: function() {
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
        fetch(app.apiRootUrl + '/reservations', config)
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
            function(reservations) {
                for (let item of reservations) {
                    reservation.setRow(item);
                }
            }
        )
        .catch(
            function(error) {
            }
        );
    },

    setRow: function(reservationItem) {
        const tableElement = document.getElementById('reservationsRow');

        let rowElement = document.createElement('tr');
        rowElement.classList.add('reservationRow')

        const bookedElement = document.createElement('td');
        const bookedDate = new Date(reservationItem.bookedAt).toLocaleString('fr');
        formatedDate = bookedDate.slice(0,10);
        bookedElement.textContent = formatedDate;
        rowElement.appendChild(bookedElement);
        
        const spotElement = document.createElement('td');
        spotElement.textContent = reservationItem.spot;
        rowElement.appendChild(spotElement);
        
        const refElement = document.createElement('td');
        refElement.textContent = reservationItem.reference;
        rowElement.appendChild(refElement);

        tableElement.appendChild(rowElement);
                
    },

    addReservation: function(e) {
        e.preventDefault();
        // Form value
        const dateValue = document.getElementById('bookedDate').value;
        const spotValue = parseInt(document.getElementById('spot').value);
        const token= JSON.parse(localStorage.getItem('token')).token;
        //API params
        let config = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }),
            body: JSON.stringify({
                bookedAt: dateValue,
                spot: spotValue,
            })
        };
        
        // Consuming API
        fetch(app.apiRootUrl + '/reservations', config)
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
            function(reservationItem) {
                reservation.displaySuccess();
                reservation.setRow(reservationItem);
            }
        )
        .catch(
            function(error) {
                return error.json();
            }
        )
        .then(
            (errorMessage) => {
                if (errorMessage) reservation.displayError(errorMessage);
            }
        )
        ;
    },

    displaySuccess: function() {
        const reservationFormElement = document.getElementById('bookedDate');
        const previousErrorElement = document.getElementById('errorReservation');
        if (previousErrorElement) previousErrorElement.remove();

        if (document.getElementById('successReservation') == undefined) {
            const successElement = document.createElement('div');
            successElement.classList.add('alert', 'alert-success');
            successElement.id = 'successReservation';
            successElement.textContent = 'Réservation ajoutée';
            reservationFormElement.after(successElement);
        }
    },

    displayError: function(errorMessage) {
        const reservationFormElement = document.getElementById('bookedDate');
        const previousErrorElement = document.getElementById('errorReservation');

        
        const errorElement = document.createElement('div');
        errorElement.classList.add('alert', 'alert-danger');
        errorElement.id = 'errorReservation';
        errorElement.textContent = errorMessage;
        if (!previousErrorElement) {
            reservationFormElement.after(errorElement);
        } else {
            previousErrorElement.parentNode.replaceChild(errorElement, previousErrorElement);
        }

    }

    
}