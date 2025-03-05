// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Contact Form Handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission for now
    alert('Form submitted! Check Netlify dashboard for data.');
    form.reset(); // Clear form fields
});
