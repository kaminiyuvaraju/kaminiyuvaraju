// Add dark mode by default on page load
document.body.classList.add("dark");

const phrases = [
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

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
