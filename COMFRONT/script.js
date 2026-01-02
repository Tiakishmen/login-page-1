document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple validation (replace with actual authentication in a real application)
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        errorMessage.style.display = 'none';
        // Redirect or perform further actions
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
});