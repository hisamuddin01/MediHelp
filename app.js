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
//slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnNext= document.querySelector('.slide--btn-right');
const btnPrev = document.querySelector('.slide--btn-left');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;


const activateDot = function(slide) {
    document
        .querySelectorAll('.dot')
        .forEach(dot => dot.classList.remove('active'));

    document
        .querySelector(`.dot[data-slide="${slide}"]`)
        .classList.add('active')
}
activateDot(0)

const goToSlide = function(slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)) ;
}
goToSlide(0);
// Next Slide 
const nextSlide = function() {
    if(curSlide === maxSlide - 1) {
        curSlide = 0
    }
    else{
        curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide)
}
// Prev Slide 
const prevSlide = function() {
    if(curSlide === 0) {
        curSlide = maxSlide -1
    }
    else{
        curSlide--;
    }
    goToSlide(curSlide)
    activateDot(curSlide)
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

dotContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('dot')) {
        const {slide} = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
    }
})

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

// TABBED COMPONENT
const tabs = document.querySelectorAll('.depart-tab');
const tabsContainer = document.querySelector('.departments--tabs');
const tabsContent = document.querySelectorAll('.depart--content');

tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.depart-tab');
    console.log(clicked)

  if(!clicked) return;

    tabs.forEach(t => t.classList.remove('depart--btn-active'));
    tabsContent.forEach(c => c.classList.remove('depart--content-active'))
    clicked.classList.add('depart--btn-active')

    // Activate content
    console.log(clicked.dataset.tab)
    document
        .querySelector(`.depart--content-${clicked.dataset.tab}`)
        .classList.add('depart--content-active')
})