# Semifront

A simple frontend application with user authentication.

## Features

- User login with form validation
- Clean and responsive UI design
- Client-side form validation
- Error and success message handling

## Usage

1. Open `index.html` in a web browser
2. Enter your credentials:
   - **Demo Username:** `demo`
   - **Demo Password:** `demo123`
3. Click the "Login" button

## Validation Rules

- Username must be at least 3 characters long
- Password must be at least 6 characters long
- Both fields are required

## Files

- `index.html` - Main login page structure
- `styles.css` - Styling and layout
- `login.js` - Login functionality and validation

## Note

⚠️ **This is a demonstration project.** The authentication is handled client-side for demo purposes only. In a production environment, authentication should always be handled server-side with proper security measures including:
- HTTPS encryption
- Password hashing
- Secure token management (JWT, OAuth)
- Backend API validation
- Rate limiting
- CSRF protection