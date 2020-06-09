const http = require('http');
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

const data = JSON.stringify({
    email: email.value,
    password: password.value
})

const options = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    
});