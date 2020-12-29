const hamburger = document.getElementById('hamburger');
const navLink = document.getElementById('nav-section');


hamburger.addEventListener('click', () => {
  navLink.classList.toggle('show');
})


// accrodiain part start
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
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


// trying to fix modal
var modals = document.querySelectorAll("[data-modal]");

modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    var modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    var exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});

// trying to fix modal



// addaing a google map
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = {
    lat: -25.344,
    lng: 131.036
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
// addaing a google map




// Setting up active button
// Add active class to the current button (highlight it)
// var header = document.getElementById("nav-section");
// var btns = header.getElementsByClassName("active-class");
// Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");

//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += " active";
//   });
// }



// aos
AOS.init();

// i will fix(clear this later)
// make a div a ..clickable content.
document.getElementById('web-development').addEventListener('click', function() {
  location.href = 'web-development.html'
}, false);
document.getElementById('digital-marketing').addEventListener('click', function() {
  location.href = 'digital-marketing.html'
}, false);

document.getElementById('graphic-design').addEventListener('click', function() {
  location.href = 'graphic-design.html'
}, false);

document.getElementById('data-entry').addEventListener('click', function() {
  location.href = 'data-entry.html'
}, false);