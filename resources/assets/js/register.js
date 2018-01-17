document.addEventListener('DOMContentLoaded', function(e) {
    const usernameEl = document.querySelector('input[name="username"]');
    usernameEl.addEventListener('keydown', function(e) {
        if (e.which === 32) {
            e.preventDefault();
        }
    });
});
