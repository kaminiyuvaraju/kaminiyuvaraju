  // Get references to body and toggle icon span
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  // Initialize theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (!savedTheme || savedTheme === "dark") {
    body.classList.add("dark");
    if (icon) icon.textContent = "Toggle-Light Mode";
  } else {
    body.classList.remove("dark");
    if (icon) icon.textContent = "Toggle-Dark Mode";
  }

  // Typing animation phrases
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

  // Toggle dark/light mode and update button text + store preference
  function toggleDarkMode() {
    const isDark = body.classList.toggle("dark");

    if (isDark) {
      localStorage.setItem("theme", "dark");
      if (icon) icon.textContent = "Toggle-Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      if (icon) icon.textContent = "Toggle-Dark Mode";
    }
  }
