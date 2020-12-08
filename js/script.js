const hamburger = document.getElementById('hamburger');
const navLink = document.getElementById('nav-section');


hamburger.addEventListener('click',()=>{
    navLink.classList.toggle('show');
})