document
  .getElementById("taskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const textInput = document.getElementById("textInput").value;
    const optionSelected = document.getElementById("options").value;
    const bulletList = document.getElementById("bulletList");

    const listItem = document.createElement("li");
    listItem.textContent = textInput;

    if (optionSelected === "note") {
      listItem.classList.add("note");
    } else if (optionSelected === "email") {
      listItem.classList.add("email");
    } else if (optionSelected === "todo") {
      listItem.classList.add("todo");
    }

    bulletList.appendChild(listItem);
    document.getElementById("taskForm").reset();
  });
