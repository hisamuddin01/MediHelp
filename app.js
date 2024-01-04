const navToggle = document.querySelector('.nav--toggle');
const navContainer = document.querySelector('.nav--links-container');
const navLinks = document.querySelector('.nav--links');

navToggle.addEventListener('click', function() {
    const linksHeight = navLinks.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;

    navContainerHeight === 0 ? navContainer.style.height = `${linksHeight}px` : navContainer.style.height = 0;
})