let todoItems = [];

let completedItems=[];

function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

function renderAllTodos() {
    for (let i = 0; i < todoItems.length; i++) {
      renderTodo(todoItems[i]);
    }
}
function renderAllDones() {
    for (let i = 0; i < completedItems.length; i++) {
      renderDone(completedItems[i]);
    }
}

function deleteAllTodos() {
    let table = document.getElementById("todo-table");
    for (let i = 0; i < todoItems.length; i++) {
      table.deleteRow(-1);
    }
}

function deleteAllDones() {
    let table = document.getElementById("done-table");
    for (let i = 0; i < completedItems.length; i++) {
      table.deleteRow(-1);
    }
}

function deleteTodo(id) {
    deleteAllTodos();
    const found = todoItems.findIndex((todo) => todo.id == id);
    todoItems.splice(found, 1);
    renderAllTodos();
}



function renderTodo(todo) {
  const table = document.getElementById("todo-table");
  const row = table.insertRow(-1);
  const textCell = row.insertCell(0);
  textCell.innerText = todo.text;

  const dateCell = row.insertCell(1);
  dateCell.innerText = todo.date;

  const deleteCell = row.insertCell(2);
  deleteCell.innerHTML = `<a onClick="addTodone('${todo.id}')" class="button">delete</a>`;
}

function addTodo() {
  const todoText = document.getElementById("todo-id").value;

  const todo = {
    text: todoText,
    date: new Date().toLocaleString("en-IE"),
    id: uuidv4(),
  };
  todoItems.push(todo);
  renderTodo(todo);
}

function renderDone(done) {
    const table = document.getElementById("done-table");
    const row = table.insertRow(-1);
    const textCell = row.insertCell(0);
    const dateCell = row.insertCell(1);

    textCell.innerText = done.text;
    dateCell.innerText = done.date;
}

function addTodone(id) {
    deleteAllTodos();
    deleteAllDones();
    const found = todoItems.findIndex((todo) => todo.id == id);
    completedItems.push(todoItems[found]);
    todoItems.splice(found, 1);
    renderAllTodos();
    renderAllDones();
}