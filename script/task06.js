let blackSquare = document.querySelector("footer > div > canvas");
let isDragging = false;
let startX, startY, offsetX, offsetY;

let coordinatesDiv = document.querySelector("footer > div:nth-child(2)");

blackSquare.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    offsetX = blackSquare.getBoundingClientRect().left;
    offsetY = blackSquare.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    blackSquare.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    const newX = offsetX + deltaX;
    const newY = offsetY + deltaY;
    coordinatesDiv.textContent = `New coordinates => {x: ${newX}, y: ${newY}}`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    blackSquare.style.transform = "none";
});
