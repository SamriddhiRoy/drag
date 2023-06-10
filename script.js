// Get the containers and items
const firstContainer = document.querySelectorAll('.container')[0];
const secondContainer = document.querySelectorAll('.container')[1];
const items = document.querySelectorAll('.item');

// Add event listeners to enable dragging
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Add event listeners to enable dropping
secondContainer.addEventListener('dragover', dragOver);
secondContainer.addEventListener('dragenter', dragEnter);
secondContainer.addEventListener('dragleave', dragLeave);
secondContainer.addEventListener('drop', dragDrop);

// Functions for dragging and dropping
let draggedItem = null;

function dragStart() {
  draggedItem = this;
  setTimeout(() => {
    this.style.display = 'none'; // Hide the dragged item
  }, 0);
}

function dragEnd() {
  draggedItem.style.display = 'block'; // Show the dragged item again
  draggedItem = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('drag-over');
}

function dragLeave() {
  this.classList.remove('drag-over');
}

function dragDrop() {
  this.classList.remove('drag-over');
  this.appendChild(draggedItem);
  showMessage('Item dropped successfully!');
}

function showMessage(message) {
  const successMessage = document.createElement('div');
  successMessage.className = 'message';
  successMessage.innerText = message;
  document.body.appendChild(successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, 2000);
}

function resetContainers() {
  // Clear the second container
  secondContainer.innerHTML = '<h2>Second Container</h2>';

  // Reset the first container
  items.forEach(item => {
    firstContainer.appendChild(item);
  });
}
