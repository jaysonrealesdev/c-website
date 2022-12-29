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

const enroll = () => {
  window.open('http://enroll.catcollege.edu.ph/enrollment/', '_blank');
}

const elms = () => {
  window.open('http://elms.catcollege.edu.ph/', '_blank');
}

const library = () => {
  window.open('http://library.catcollege.edu.ph/', '_blank');
}

$(function(){
  $(".headerContent").load("header.html"); 
});

$(function(){
  $(".footerContent").load("footer.html"); 
});

// showBackBtn();







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
  
