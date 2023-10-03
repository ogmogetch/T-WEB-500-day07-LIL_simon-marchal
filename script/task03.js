const clickCountElement = document.querySelector("footer div");

document.addEventListener("keyup", (event) => {
    const input = event.key;
    updateWhiteBox(input);
});

function updateWhiteBox(input) {

    clickCountElement.innerText += input;

    if (clickCountElement.innerText.length > 42) {
        clickCountElement.innerText = clickCountElement.innerText.substring(
        clickCountElement.innerText.length - 42
    );
}
}
