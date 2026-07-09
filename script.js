// ===== Terminal boot sequence =====
const bootLines = [
  "> initializing nilcipher.systems...",
  "> loading modules: [websites] [bots] [automation] [apps]",
  "> establishing secure connection... OK",
  "> decrypting portfolio... 100%",
  "> status: ONLINE",
  "> welcome.",
];

const bootEl = document.getElementById("boot");
const cursorEl = document.getElementById("cursor");

let lineIndex = 0;
let charIndex = 0;

function typeBoot() {
  if (lineIndex < bootLines.length) {
    const currentLine = bootLines[lineIndex];
    if (charIndex < currentLine.length) {
      bootEl.textContent += currentLine.charAt(charIndex);
      charIndex++;
      setTimeout(typeBoot, 28);
    } else {
      bootEl.textContent += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeBoot, 380);
    }
  } else {
    cursorEl.classList.add("blink");
  }
}

window.addEventListener("load", typeBoot);

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // reveal once, then stop watching
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));