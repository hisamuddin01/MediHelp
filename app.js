////////////////SELECTORS/////////////////
const navToggle = document.querySelector('.nav--toggle');
const navContainer = document.querySelector('.nav--links-container');
const navLinks = document.querySelector('.nav--links');

/////////////////////////////////////
navToggle.addEventListener('click', function() {
    const linksHeight = navLinks.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;

    navContainerHeight === 0 ? navContainer.style.height = `${linksHeight}px` : navContainer.style.height = 0;
});
//Fixed--nav
const navbar = document.getElementById('nav');
window.addEventListener('scroll', function() {
    const scrollHeight = this.window.pageYOffset;
    if(scrollHeight > 500) {
        navbar.classList.add('fixed--nav');
    }
    else{
        navbar.classList.remove('fixed--nav')
    }
});
// ///////////////////////////////////////////////////
document.querySelector('.nav--links').addEventListener('click', function(e) {
    console.log(e.target)
    if(e.target.classList.contains('nav--link')) {
        e.preventDefault();
        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
        });
    }
});
// ///////////////////////////////////////////////////
const btnsScrollTo = document.querySelectorAll('.btn--scroll-to');
const section1 = document.querySelector("#about");
// BTN scrolling
btnsScrollTo.forEach((btn) => {
    btn.addEventListener("click",(e) => {
        e.preventDefault();
        const s1coords = section1.getBoundingClientRect();
        const navbar = document.querySelector('.nav')
        console.log(navbar)
        const navbarHeight = navbar.getBoundingClientRect().height;
        window.scrollTo( {
            left: s1coords.left + window.pageXOffset,
            top: s1coords.top -navbarHeight + window.pageYOffset - navbarHeight,
            behavior: 'smooth'
        });
    });
});