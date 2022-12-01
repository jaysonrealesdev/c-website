const images = document.querySelectorAll('.img-grid img');

images.forEach(img => {
    console.log(img);
    img.addEventListener('click', () => { 
        console.log("images");
    })
});