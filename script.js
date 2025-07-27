const words = ["perdón", "te amo", "lo siento", "vuelve", "te pienso", "me dueles"];
const container = document.getElementById("floating-words");

function createWord() {
  const word = document.createElement("div");
  word.className = "word";
  word.textContent = words[Math.floor(Math.random() * words.length)];
  word.style.left = Math.random() * 100 + "vw";
  word.style.top = Math.random() * 100 + "vh";
  word.style.fontSize = (1 + Math.random() * 1.5) + "rem";
  container.appendChild(word);
  setTimeout(() => container.removeChild(word), 10000);
}

setInterval(createWord, 800);

document.addEventListener("click", function () {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play().catch(() => {});
  }
});

document.addEventListener("touchstart", function () {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play().catch(() => {});
  }
}, { once: true });
