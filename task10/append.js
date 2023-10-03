function addDivAfterInput() {
    const input = document.getElementById("listItem");

    const inputValue = input.value;

    const newDiv = document.createElement("div");

    newDiv.textContent = inputValue;

    input.insertAdjacentElement("afterend", newDiv);
}
