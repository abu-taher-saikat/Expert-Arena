const hamburger = document.getElementById('hamburger');
const navLink = document.getElementById('nav-section');


hamburger.addEventListener('click',()=>{
    navLink.classList.toggle('show');
})


// accrodiain part start
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// accrodiain part end