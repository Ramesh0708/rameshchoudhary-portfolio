console.log("ext.js loaded"); // Debug log

const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    console.log("Toggle button found");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
        console.log("Theme toggled");
    });
} else {
    console.log("Toggle button not found");
}

const form = document.getElementById("contact-form");
if (form) {
    console.log("Form found");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form submitted!");
        form.reset();
        console.log("Form submitted");
    });
} else {
    console.log("Form not found");
}
