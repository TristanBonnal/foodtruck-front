logout = {
    init: function() {
        document.getElementById('logoutLink').addEventListener('click', this.deleteToken);
    },

    deleteToken: function() {
        localStorage.clear();
    },
}