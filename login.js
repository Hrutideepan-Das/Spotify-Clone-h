document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demonstration purposes, let's assume these are the correct credentials
    if (username === 'user' && password === 'password') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html'; // Redirect to the main page
    } else {
        alert('Invalid username or password');
    }
});
