document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin@123') {
        const newTab = window.open('https://www.flipkart.com', '_blank');
    } else {
        location.reload();
    }
};