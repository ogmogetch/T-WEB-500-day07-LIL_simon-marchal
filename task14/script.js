const items = [
  { text: 'This is a note.', type: 'note' },
  { text: 'Send an email.', type: 'email' },
  { text: 'Complete the todo.', type: 'todo' },
  { text: 'Trick Patrick and Derrick with some bricks', type: 'todo' },
  { text: 'Awesome list of real pricks', type: 'note' },

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
  const searchString = document.getElementById('searchString').value.toLowerCase();
  const searchDropdown = document.getElementById('searchDropdown');
  const selectedType = searchDropdown.value;

  let filteredItems;

  if (selectedType === 'all') {
    filteredItems = items.filter(item => item.text.toLowerCase().includes(searchString));
  } else {
    filteredItems = items.filter(item => item.type === selectedType && item.text.toLowerCase().includes(searchString));
  }

  displayItems(filteredItems);
}

function resetSearch() {
  document.getElementById('searchString').value = '';
  document.getElementById('searchDropdown').value = 'all';
  displayItems(items);
}


displayItems(items);
