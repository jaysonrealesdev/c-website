let selectedItem;

function selectItem(e) {
  if (this === selectedItem) return;
  selectedItem.classList.remove('selected');
  this.classList.add('selected');
  selectedItem = this;
}

function init() {
  selectedItem = document.querySelector('a.selected');
  const items = document.querySelectorAll('a');
  items.forEach((item) => {
    item.addEventListener('click', selectItem, true);
  })
}

init();