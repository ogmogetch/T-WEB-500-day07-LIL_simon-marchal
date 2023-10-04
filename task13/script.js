const items = [
  { text: 'This is a note.', type: 'note' },
  { text: 'Send an email.', type: 'email' },
  { text: 'Complete the todo.', type: 'todo' },

];

function displayItems(itemsToShow) {
  const bulletList = document.getElementById('bulletList');
  bulletList.innerHTML = '';

  itemsToShow.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.text;
    listItem.classList.add(item.type);
    bulletList.appendChild(listItem);
  });
}

function searchItems() {
  const searchDropdown = document.getElementById('searchDropdown');
  const selectedType = searchDropdown.value;

  if (selectedType === 'all') {
    displayItems(items);
  } else {
    const filteredItems = items.filter(item => item.type === selectedType);
    displayItems(filteredItems);
  }
}

function resetSearch() {
  document.getElementById('searchDropdown').value = 'all';
  displayItems(items);
}


displayItems(items);
