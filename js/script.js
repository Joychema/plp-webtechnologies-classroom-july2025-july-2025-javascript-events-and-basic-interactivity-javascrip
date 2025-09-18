// Part 1 & 2: Interactive Elements
const body = document.body;
const themeToggleBtn = document.getElementById('theme-toggle');
const counterDisplay = document.getElementById('counter-display');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');

// Part 3: Form Validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formStatus = document.getElementById('form-status');

// --- Part 1 & 2: Event Handling & Interactive Features ---

// Light/Dark Mode Toggle
// This is an example of a simple event listener for a click event.
themeToggleBtn.addEventListener('click', () => {
    // Toggle the data-theme attribute on the body element
    const currentTheme = body.getAttribute('data-theme');
    
    // Switch between 'light' and 'dark' themes
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    themeToggleBtn.textContent = newTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';

})

// Counter
let counter = 0;

// Increase counter
increaseBtn.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
})
// Decrease counter
decreaseBtn.addEventListener('click', () => {
    counter--;
    counterDisplay.textContent = counter;
})

// --- Part 3: Form Validation ---

// Helper function to show error messages
const showError = (input, errorElement, message) => {
    errorElement.textContent = message;
    input.classList.add('input-error');
}

// Helper function to clear error messages
const clearError = (input, errorElement) => {
    errorElement.textContent = '';
    input.classList.remove('input-error');
}

// Main validation form
const validationForm = () => {
    let isValid = true;

    // Clear previous errors
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(passwordInput, passwordError);
    formStatus.textContent = '';

    // Validate Name
    if (nameInput.value.trim() === '' || nameInput.value.trim().length < 3) {
        showError(nameInput, nameError, 'Name must be at least 3 characters long.');
        isValid = false;
    }
    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, emailError, 'Please enter a valid email address.');
        isValid = false;
    }
    // Validate Password
    if (passwordInput.value.length < 6) {
        showError(passwordInput, passwordError, 'Password must be at least 6 characters long.');
        isValid = false;
    }
    return isValid;
}

// Add the event listener OUTSIDE the function
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting

    if (validationForm()) {
        formStatus.textContent = 'Form submitted successfully!';
        formStatus.style.color = 'green';
        contactForm.reset(); // Reset form fields
    } else {
        formStatus.textContent = 'Please fix the errors above and try again.';
        formStatus.style.color = 'red';
    }
});