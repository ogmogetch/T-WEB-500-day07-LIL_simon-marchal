const firstButton = document.querySelector('button');

function hideParagraphs() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
    paragraph.style.display = 'none';
    });
}

firstButton.addEventListener('click', hideParagraphs);