// Set dark mode by default on first load
if (!localStorage.getItem("theme")) {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
  const icon = document.getElementById("theme-icon");
  if (icon) icon.textContent = "Toggle-Light Mode";
} else if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  const icon = document.getElementById("theme-icon");
  if (icon) icon.textContent = "Toggle-Light Mode";
} else {
  document.body.classList.remove("dark");
  const icon = document.getElementById("theme-icon");
  if (icon) icon.textContent = "Toggle-Dark Mode";
}

// Typing animation
const phrases = [
    "Software Engineer",
  "Data Scientist",
  "ML Engineer",
  "Flask & FastAPI Developer",
  "GATE DS & AI 2025 Qualified"
];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

const typing = document.querySelector(".typing");

function loop() {
  typing.innerHTML = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  } else if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
  }

  if (isDeleting && j === 0) {
    currentPhrase = [];
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(loop, isDeleting ? 70 : 120);
}

loop();

// Theme toggle function
function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    icon.textContent = "Toggle-Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    icon.textContent = "Toggle-Dark Mode";
  }
}
