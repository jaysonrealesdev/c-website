AOS.init(); // Iniliaze Animate On Scroll (AOS) Library

/* let mouseCursor = document.getElementById('cursor');
let navLink = document.querySelectorAll('.nav-bar li');
let aLink = document.querySelectorAll('a');
let aButton = document.querySelectorAll('button');

window.addEventListener("mousemove",cursor);

window.addEventListener("click", () => {
  mouseCursor.classList.add("expand");

  setTimeout(() => {
    mouseCursor.classList.remove("expand");
  }, 500)
});

function cursor(e) {

  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

aButton.forEach(aButton => {
  aButton.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    mouseCursor.classList.add("hovered-link");
  });

  aButton .addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    mouseCursor.classList.remove("hovered-link");
  });
})

aLink.forEach(alink => {
  alink.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    mouseCursor.classList.add("hovered-link");
  });

  alink .addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    mouseCursor.classList.remove("hovered-link");
  });
})

navLink.forEach(link => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    mouseCursor.classList.add("hovered-link");
  });

  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    mouseCursor.classList.remove("hovered-link");
  });
}) */


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
  window.open('http://enroll.catcollege.edu.ph/enrollment/', '_blank');
}

const elms = () => {
  window.open('http://elms.catcollege.edu.ph/', '_blank');
}

const library = () => {
  window.open('http://library.catcollege.edu.ph/', '_blank');
}

/* function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
} */
/* const howToBtn = document.querySelector("#howTo");
howToBtn.onclick = function(event) { // Close the dropdown if the user clicks outside of it
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropdown").classList.toggle("active");
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
} */

/* const facBtn = document.querySelector("#facilities-btn");
facBtn.onclick = function(event) { // Close the dropdown if the user clicks outside of it
  document.getElementById("facilitiesDropdown").classList.toggle("facilities-show");
  document.getElementById("facilitiesDropdown").classList.toggle("active");
  if (!event.target.matches('.facilities-btn')) {
    var facilitiesDropdowns = document.getElementsByClassName("facilities-dropdown-content");
    var j;
    for (j = 0; j < facilitiesDropdowns.length; j++) {
      var openFacDropdown = facilitiesDropdowns[j];
      if (openFacDropdown.classList.contains('facilities-show')) {
        openFacDropdown.classList.remove('facilities-show');
      }
    }
  }
} */

  /* $(document).ready(function(){
  // Show hide popover
    $(".aboutDrop").click(function(){
        $(this).find(".about-dropdown-content").slideToggle("fast");
    });
  });
  $(document).on("click", function(event){
    const $trigger = $(".aboutDrop");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".about-dropdown-content").slideUp("fast");
    }            
  });

  $(document).ready(function(){
  // Show hide popover
    $(".facilitiesDrop").click(function(){
        $(this).find(".facilities-dropdown-content").slideToggle("fast");
    });
  });
  $(document).on("click", function(event){
    const $trigger = $(".facilitiesDrop");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".facilities-dropdown-content").slideUp("fast");
    }            
  });

$(document).ready(function(){
  // Show hide popover
  $(".dropbtn").click(function(){
      $(this).find(".dropdown-content").slideToggle("fast");
  });
});
$(document).on("click", function(event){
  const $trigger = $(".dropbtn");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".dropdown-content").slideUp("fast");
  }            
}); */

$(function(){
  $(".headerContent").load("header.html"); 
});

$(function(){
  $(".footerContent").load("footer.html"); 
});

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
  
