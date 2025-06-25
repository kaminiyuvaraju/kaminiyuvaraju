// script.js

// DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const icon = document.getElementById("theme-icon");
  const isDark = document.body.classList.contains("dark-mode");
  icon.textContent = isDark ? "Toggle-Light Mode" : "Toggle-Dark Mode";
}

// TYPING EFFECT FOR HEADER
const typingElement = document.querySelector(".typing");
const typingTexts = [
  "Software Engineer",
  "Machine Learning Enthusiast",
  "Web Developer",
  "FastAPI & Flask Developer"
];

let charIndex = 0;
let textIndex = 0;
let isDeleting = false;
let delay = 100;

function type() {
  const currentText = typingTexts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    delay = 1500; // pause after full word
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    delay = 300;
  } else {
    delay = isDeleting ? 50 : 100;
  }

  setTimeout(type, delay);
}

// Start the typing effect after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  if (typingElement) {
    type();
  }
});
