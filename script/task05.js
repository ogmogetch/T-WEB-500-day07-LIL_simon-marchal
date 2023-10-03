const canvas = document.querySelector("canvas");
const clickCountButtonPause = document.querySelector("footer button:nth-child(1)");
const clickCountButtonStop = document.querySelector("footer button:nth-child(2)");
const clickCountButtonMute = document.querySelector("footer button:nth-child(3)");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";

ctx.fillStyle = "white";

const vertices = [
    { x: 6, y: 6 },
    { x: 14, y: 10 },
    { x: 6, y: 14 },
];

ctx.beginPath();
ctx.moveTo(vertices[0].x, vertices[0].y);

for (let i = 1; i < vertices.length; i++) {
    ctx.lineTo(vertices[i].x, vertices[i].y);
}

ctx.closePath();

ctx.fill();

ctx.stroke();

const audio = new Audio("Nirvana - Smells Like Teen Spirit (Official Music Video).mp3");

canvas.addEventListener("click", () => {
    audio.play();
});

clickCountButtonPause.addEventListener("click", () => {
    audio.pause();
});

clickCountButtonStop.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
});

clickCountButtonMute.addEventListener("click", () => {
    audio.muted = !audio.muted;
});
    



