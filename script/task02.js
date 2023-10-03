const clickCountElement = document.querySelector("footer div");

let clickCount = 0;

clickCountElement.addEventListener('click', handleClick);

function handleClick() {
    clickCount++;
    let name = null

        name = prompt('What\'s your name?');
        while (!name) {
            name = prompt('Please enter your name:');
        }

        const confirmed = confirm(`Are you sure that ${name} is your name ?`);
        if (confirmed) {
            alert(`Hello ${name}!`);
            clickCountElement.innerText = `Hello ${name} !`;
        }
    }
