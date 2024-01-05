const navToggle = document.querySelector('.nav--toggle');
const navContainer = document.querySelector('.nav--links-container');
const navLinks = document.querySelector('.nav--links');

navToggle.addEventListener('click', function() {
    const linksHeight = navLinks.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;

    navContainerHeight === 0 ? navContainer.style.height = `${linksHeight}px` : navContainer.style.height = 0;
})

// /////////////////////////////////////////////////////
// const navbar = document.getElementById("nav");
// window.addEventListener("scroll", function() {
//     const scrollHeight = this.window.pageYOffset;
//     console.log(scrollHeight)
//     if(scrollHeight > 500) {
//         navbar.classList.add("fixed--nav")
//     }
//     else {
//         navbar.classList.remove("fixed--nav")
//     }
// })
// ///////////////////////////////////////////////////
// const navLink = document.querySelectorAll('.nav--link');
// navLink.forEach((link)=> {
//     link.addEventListener("click", function(e) {
//         e.preventDefault();

//         const id = e.currentTarget.getAttribute("href");
//         console.log(id)
//         const element = document.getElementById(id).slice(1);
//         const navHeight = navbar.getBoundingClientRect().height;
//         console.log(navHeight);
//         const navContainerHeight = navContainer.getBoundingClientRect().height;
//         console.log(navContainerHeight)
//         const fixedNav = navbar.classList.contains("fixed-nav");
//         let position = element.offsetTop - navHeight;

//         if(!fixedNav) {
//             position = position - navHeight;
//         }
//         if(navHeight > 82) {
//             position = position + navContainerHeight;
//         }

//     })

// })