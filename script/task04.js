const clickCountButtonP = document.querySelector("footer button:nth-child(1)");
const clickCountButtonM = document.querySelector("footer button:nth-child(2)");
const clickCountSelect = document.querySelector("select");

const body = document.body;

let fontSize = 16;


clickCountButtonP.addEventListener("click", () => {
    fontSize += 2;
    body.style.fontSize = `${fontSize}px`;
});

clickCountButtonM.addEventListener("click", () => {
    fontSize -= 2;
    body.style.fontSize = `${fontSize}px`;
});


clickCountSelect.addEventListener("change", () => {
    const selectedColor = clickCountSelect.value;
    body.style.backgroundColor = selectedColor;
});
