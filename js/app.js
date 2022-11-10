AOS.init(); // Iniliaze Animate On Scroll (AOS) Library

const menuBtn = () => { // Open Menu On Small Screen
  const hamburger = document.querySelector('.hamburger');
  hamburger.onclick = function () { 
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
  }
}

const closeBtn = () => { // Animate Close Button
  const menuBtn = document.querySelector('.hamburger');
  let menuOpen = false;
  menuBtn.addEventListener('click', function () {
  if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
  } else {
      menuBtn.classList.remove('open');
      menuOpen = false;;
  }
});
}

const enroll = () => {
  window.location.href = "http://enroll.catcollege.edu.ph/enrollment/";
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) { // Close the dropdown if the user clicks outside of it
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// showBackBtn();
closeBtn();
menuBtn();






// Show Back Button on Scroll
// const showBackBtn = () => {
//   let calcScrollValue = () => {
//   let scrollProgress = document.getElementById("progress");
//   let progressValue = document.getElementById("progress-value");
//   let pos = document.documentElement.scrollTop;
//   let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   let scrollValue = Math.round((pos * 100) / calcHeight);
  
//   if (pos > 100) {
//     scrollProgress.style.display = "grid";
//   } else {
//     scrollProgress.style.display = "none";
//   }
//   scrollProgress.addEventListener("click", () => {
//     document.documentElement.scrollTop = 0;
//   });
  
//   scrollProgress.style.background = `conic-gradient(#215cff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
//   };
  
//   window.onscroll = calcScrollValue;
//   window.onload = calcScrollValue;
// }
  
