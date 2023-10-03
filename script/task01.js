const clickCountElement = document.querySelector("footer div");

let clickCount = 0;

clickCountElement.innerText = `You clicked ${clickCount}`;

clickCountElement.addEventListener("click", function () {
    clickCount++;

    clickCountElement.innerText = `You clicked ${clickCount}`;
});