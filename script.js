const music = document.getElementById("bg-music");

window.addEventListener('click', () => {
  if (music.paused) {
    music.play().catch(() => {});
  }
});

document.addEventListener("touchstart", function () {
  music.play().catch(() => {});
}, { once: true });

document.addEventListener("click", function (e) {
  const phrases = ["I love you 💌", "Te pienso", "Me dueles", "Perdón", "No fue tu culpa"];
  const text = document.createElement("div");
  text.className = "floating-text";
  text.style.left = e.pageX + "px";
  text.style.top = e.pageY + "px";
  text.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  document.body.appendChild(text);
  setTimeout(() => text.remove(), 4000);
});
