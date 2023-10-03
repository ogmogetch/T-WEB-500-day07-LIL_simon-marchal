const clickCountElement = document.querySelector("footer div");

let clickCount = 0;

clickCountElement.addEventListener('click', handleClick);

function handleClick() {
    clickCount++;
    let name = null

        // Prompt for name
        name = prompt('What\'s your name?');
        while (!name) {
            name = prompt('Please enter your name:');
        }

        // Confirm the name
        const confirmed = confirm(`Are you sure that ${name} is your name ?`);
        if (confirmed) {
            // Display greeting and set the white box content
            alert(`Hello ${name}!`);
            clickCountElement.innerText = `Hello ${name} !`;
        }
    }
