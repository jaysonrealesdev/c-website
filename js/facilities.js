const currentLocation = window.location.pathname;
const listItems = document.querySelectorAll(".list-links li");

/* console.log(listItems); */

listItems.forEach(listItems => {
    console.log(listItems.href);
});