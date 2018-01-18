document.addEventListener('DOMContentLoaded', () => {
    const usernameEl = document.querySelector('input[name="username"]');
    usernameEl.addEventListener('keydown', e => {
        if (e.which === 32) {
            e.preventDefault();
        }
    });
});
