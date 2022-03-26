logout = {
    init: function() {
        const logoutElement = document.getElementById('logoutLink').addEventListener('click', this.deleteToken);
       (console.log('logout init'));
    },

    deleteToken: function(e) {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "/"
    },
}