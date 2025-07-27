
document.addEventListener("click", function(e) {
    const phrases = ["perdón", "te pienso", "vuelve", "lo siento", "discúlpame", "no me ignores"];
    const text = document.createElement("div");
    text.className = "floating-words";
    text.style.left = e.pageX + "px";
    text.style.top = e.pageY + "px";
    text.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 4000);
});

window.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('bg-music');
    audio.currentTime = 226;

    const resumeAudio = () => {
        audio.play().catch(() => {});
        document.removeEventListener("click", resumeAudio);
    };

    document.addEventListener("click", resumeAudio);
});
