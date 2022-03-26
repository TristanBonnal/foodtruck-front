reservation = {
    init: function() {
        console.log('init reservation')
        document.getElementById('reservationButton').addEventListener('click', this.reservationHandler)
        document.getElementById('reservationLink').addEventListener('click', this.reservationHandler)
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
            // reservation.displayTable();
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
                reservation.setRow(reservations);
            }
        )
        .catch(
            function(error) {
            }
        );
    },

    setRow: function(reservations) {
        const tableElement = document.getElementById('reservationsRow');

        // Get rows if empty
        if (!tableElement.contains(tableElement.querySelector('.reservationRow'))) {
            for (let reservation of reservations) {
                console.log(reservation);
                let rowElement = document.createElement('tr');
                rowElement.classList.add('reservationRow')

                const bookedElement = document.createElement('td');
                const bookedDate = new Date(reservation.bookedAt).toLocaleString('fr');
                formatedDate = bookedDate.slice(0,10);
                bookedElement.textContent = formatedDate;
                rowElement.appendChild(bookedElement);
                
                const spotElement = document.createElement('td');
                spotElement.textContent = reservation.spot;
                rowElement.appendChild(spotElement);
                
                const refElement = document.createElement('td');
                refElement.textContent = reservation.reference;
                rowElement.appendChild(refElement);

                tableElement.appendChild(rowElement);

            }
        }
                
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
            function(reservations) {
                // reservation.displaySuccess()
            }
        )
        .catch(
            function(error) {
                console.log(error)
            }
        );
    }
    
}