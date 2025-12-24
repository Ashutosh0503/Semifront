document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Demo credentials for testing
    const validCredentials = {
        username: 'demo',
        password: 'demo123'
    };

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Clear previous messages
        hideMessages();

        // Get input values
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        // Validate inputs
        if (!username) {
            showError('Please enter a username');
            return;
        }

        if (!password) {
            showError('Please enter a password');
            return;
        }

        if (username.length < 3) {
            showError('Username must be at least 3 characters long');
            return;
        }

        if (password.length < 6) {
            showError('Password must be at least 6 characters long');
            return;
        }

        // Simulate authentication
        authenticateUser(username, password);
    });

    function authenticateUser(username, password) {
        // In a real application, this would make an API call to a backend server
        // For demo purposes, we're checking against hardcoded credentials
        
        if (username === validCredentials.username && password === validCredentials.password) {
            showSuccess('Login successful! Welcome, ' + username);
            
            // Clear form fields
            loginForm.reset();
            
            // In a real app, you would:
            // - Store authentication token
            // - Redirect to dashboard
            // - Update application state
            setTimeout(() => {
                console.log('User authenticated successfully');
                // window.location.href = '/dashboard';
            }, 1500);
        } else {
            showError('Invalid username or password');
        }
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
        successMessage.classList.remove('show');
    }

    function showSuccess(message) {
        successMessage.textContent = message;
        successMessage.classList.add('show');
        errorMessage.classList.remove('show');
    }

    function hideMessages() {
        errorMessage.classList.remove('show');
        successMessage.classList.remove('show');
    }
});
