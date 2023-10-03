const paragraphs = document.querySelectorAll('p');

  paragraphs.forEach(paragraph => {
    paragraph.addEventListener('mouseover', () => {
      paragraph.style.color = 'blue';
    });

    paragraph.addEventListener('mouseout', () => {
      paragraph.style.color = '';
    });
    
    paragraph.addEventListener('click', () => {
      paragraph.style.backgroundColor = paragraph.style.backgroundColor === 'yellow' ? '' : 'yellow';
    });
  });
