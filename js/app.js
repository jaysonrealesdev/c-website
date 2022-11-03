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

  menuBtn();
  closeBtn();