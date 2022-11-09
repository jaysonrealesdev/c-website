AOS.init();

/* || Open Menu On Small Screen */
const menuBtn = () => {
  const hamburger = document.querySelector('.hamburger');
  hamburger.onclick = function () { 
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
  }
}
  
/* || Animate Close Button */
const closeBtn = () => {
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

/* || Show Back Button on Scroll */
const showBackBtn = () => {
  let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  
  scrollProgress.style.background = `conic-gradient(#215cff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
}

const enroll = () => {
  window.location.href = "http://enroll.catcollege.edu.ph/enrollment/";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

document.querySelector('#search-input').addEventListener('input', filterList);

function filterList() {
  const searchInput = document.querySelector('#search-input');
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  const empty = document.querySelector("#empty");

  listItems.forEach((item) => {
    let text = item.textContent;
    if(text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

$("#form-wrapper").each(function() {
  
  const input = $(this).find("#search-input");
  const clear = $(this).find("#clear");

  input.on("input", function(){
    clear.toggle(!!this.value);
  });
  
  clear.on("touchstart click", function(e) {
    e.preventDefault();
    input.val("").trigger("input");
  });
  
});

$(function() {  
  $('.btn-6')
    .on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    });
});
    
showBackBtn();
closeBtn();
menuBtn();
  
