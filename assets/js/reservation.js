reservation = {
    init: function() {
        console.log('init reservation')
        document.getElementById('reservationButton').addEventListener('click', this.reserveButtonDisplay)
        document.getElementById('reservationLink').addEventListener('click', this.reserveButtonDisplay)
    },

    reserveButtonDisplay: function(e) {
        e.preventDefault();
        if (!localStorage.getItem('token')) {
            reservation.displayAlert();
        } else {
            document.getElementById('reservationSection').classList.toggle('hidden');
            document.getElementById('introSection').classList.toggle('hidden');
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
    }
}