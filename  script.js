
document.addEventListener("click", function(e) {
    const phrases = ["I love you 💌", "Te pienso 🫀", "Eres todo 💘", "Nunca fue juego 🌙"];
    const text = document.createElement("div");
    text.className = "floating-text";
    text.style.left = e.pageX + "px";
    text.style.top = e.pageY + "px";
    text.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 4000);
});

window.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('bg-music');
    audio.currentTime = 226; // 3:46 in seconds
    const resumeAudio = () => {
        audio.play().catch(() => {});
        document.removeEventListener("click", resumeAudio);
    };
    document.addEventListener("click", resumeAudio);
});
