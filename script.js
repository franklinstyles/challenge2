function addItemToList() {
    const newItemInput = document.getElementById('newItem');
    const newItem = newItemInput.value.trim();


    const listItem = document.createElement('li');
    listItem.textContent = newItem;

    const clearButton = document.createElement('button');
    clearButton.classList.add('clear-btn');
    clearButton.textContent = 'clear';
    clearButton.addEventListener('click', function() {
        listItem.parentNode.removeChild(listItem);
    });
    listItem.appendChild(clearButton);

    listItem.addEventListener('click', function() {
        this.classList.toggle('purchased');
    });

    const list = document.getElementById('list');
    list.appendChild(listItem);

    newItemInput.value = '';
}

const addButton = document.getElementById('addBtn');
addButton.textContent = 'Add';
addButton.addEventListener('click', addItemToList);




