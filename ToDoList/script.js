const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-button');

function addTodo() {
  const todoText = newTodoInput.value.trim();

  if (todoText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    listItem.addEventListener('click', removeTodo);
    todoList.appendChild(listItem);
    newTodoInput.value = '';
  }
}

function removeTodo() {
  this.remove();
}

addButton.addEventListener('click', addTodo);

newTodoInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});
