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

//Image Galley Transition Effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const hideElements = document.querySelectorAll(".hidden");
hideElements.forEach((element) => observer.observe(element))

