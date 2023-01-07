//Hide Scroll Down Arrow When User Scrolled
const scrollBtn = document.getElementById('scroll-btn')

window.onscroll = function()  { scrollFunction() };

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop < 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




