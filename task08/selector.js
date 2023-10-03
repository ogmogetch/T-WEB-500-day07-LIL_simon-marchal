const links = document.querySelectorAll('a');

links.forEach(link => {
    if (!link.hasAttribute('target') || link.getAttribute('target') !== '_blank') {
    link.style.opacity = '0.5';
    }
});
