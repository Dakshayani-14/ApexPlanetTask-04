const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Load Todos from Local Storage
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => addTodoToDOM(todo));
}

// Add Todo to DOM
function addTodoToDOM(todo) {
  const li = document.createElement("li");
  li.textContent = todo;
  todoList.appendChild(li);
}

// Add Button Event Listener
addBtn.addEventListener("click", () => {
  const todo = todoInput.value.trim();
  if (todo) {
    addTodoToDOM(todo);
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
  }
});

// Load Todos on Page Load
loadTodos();
