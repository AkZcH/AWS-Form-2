document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginButton && signupButton) {
        loginButton.addEventListener('click', function () {
            loginForm.classList.add('active');
            signupForm.classList.remove('active');
        });

        signupButton.addEventListener('click', function () {
            signupForm.classList.add('active');
            loginForm.classList.remove('active');
        });
    }
});


// script.js
document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetSection').scrollIntoView({
        behavior: 'smooth'
    });
});
