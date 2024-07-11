// Toggle mobile navigation menu
document.querySelector('.toggle-btn').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Check if user is logged in
function checkLogin() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html'; // Redirect to login page if not logged in
    }
}

// Run the checkLogin function on page load
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname !== '/index.html') {
        checkLogin();
    }
});

// Contact form submission
document.getElementById('contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Simulate sending form data (replace with your EmailJS configuration)
    console.log('Form submitted:', data);
    alert('Your message has been sent!');

    // Clear form
    event.target.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const menu = document.querySelector('.navbar .menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
