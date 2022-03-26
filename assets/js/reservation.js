reservation = {
    init: function() {
        console.log('init reservation')
        document.getElementById('reservationButton').addEventListener('click', this.reservationHandler)
        document.getElementById('reservationLink').addEventListener('click', this.reservationHandler)
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
                login.displayError();
            }
        );
    },

    setRow: function(reservations) {
        const tableElement = document.getElementById('reservationsRow');

        // Get rows if empty
        if (!tableElement.contains(tableElement.querySelector('.reservationRow'))) {
            for (let reservation of reservations) {
                let rowElement = document.createElement('tr');
                rowElement.classList.add('reservationRow')
                for (let i in reservation) {
                    cellElement = document.createElement('td');
                    cellElement.textContent = reservation[i];
                    rowElement.appendChild(cellElement);
                }
                tableElement.appendChild(rowElement);

            }
        }
                
    }
    
}