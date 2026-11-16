// Typing animation
const typingElement = document.getElementById("typing");
const words = ["Data Science Student", "Python Developer", "Web Developer", "Tech Enthusiast"];
let wordIndex = 0, charIndex = 0, deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    charIndex += deleting ? -1 : 1;
    typingElement.textContent = currentWord.substring(0, charIndex);
    let speed = deleting ? 60 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }
    setTimeout(typeEffect, speed);
}
typeEffect();

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuBtn.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});

// Active navigation link
const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "home";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.getAttribute("id");
        }
    });
    navigationLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
});

// Contact form demo: validates fields but does not send email.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const fields = ["name", "email", "subject", "message"];
    const valid = fields.every(id => document.getElementById(id).value.trim());

    if (!valid) {
        formMessage.textContent = "Please fill all fields.";
        return;
    }

    formMessage.textContent = "Form validated! Connect an email service to receive messages.";
    contactForm.reset();
});
