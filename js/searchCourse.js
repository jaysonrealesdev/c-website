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