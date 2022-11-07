AOS.init();

/* document.querySelector('#search-input').addEventListener('input', filterList);

function filterList() {
  const searchInput = document.querySelector('#search-input');
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach((item) => {
    let text = item.textContent;
    if(text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
} */

const searchBox_3 = document.getElementById("search-input");
searchBox_3.addEventListener("keyup",function(){
  var keyword = this.value;
  keyword = keyword.toUpperCase();
  var table_3 = document.getElementById("emp-table");
  var all_tr = table_3.getElementsByTagName("tr");
  for(var i=0; i<all_tr.length; i++){
          var all_columns = all_tr[i].getElementsByTagName("td");
          for(j=0;j<all_columns.length; j++){
              if(all_columns[j]){
                  var column_value = all_columns[j].textContent || all_columns[j].innerText;
                  column_value = column_value.toUpperCase();
                  if(column_value.indexOf(keyword) > -1){
                      all_tr[i].style.display = ""; // show
                      break;
                  }else{
                      all_tr[i].style.display = "none"; // hide
                  }
              }
          }
      }
})   

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
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
  menuBtn();
  closeBtn();