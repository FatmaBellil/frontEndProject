<script>
  import { v4 as uuidv4 } from "uuid";
  import Title from "./Title.svelte";
  import TodoList from "./TodoList.svelte";
  import AddTodoForm from "./AddTodoForm.svelte";



  let todoText = "";
  let todoItems = [];  
  let doneItems = [];

  function deleteTodo(id) {
    const found = todoItems.findIndex((todo) => todo.id == id);
    const done = todoItems[found];
    todoItems.splice(found, 1);
    todoItems = [...todoItems];
    doneItems.push(done);
    doneItems = [...doneItems];
  }


  function addTodo() {
    const todo = {
      text: todoText,
      date: new Date().toLocaleString("en-IE"),
      id: uuidv4(),
    };
    todoItems.push(todo);
    todoItems = [...todoItems];
    todoText = "";
  }
</script>


<div class="container">
  <Title  title="Simple Todo List" subTitle="Fun Things to do"/>
  <div class="section box">
    <AddTodoForm {addTodo} />
  </div>
  <TodoList caption="Items Todo" items="{todoItems}" deleteHandler="{deleteTodo}"/>
  <TodoList caption="Items Done" items="{doneItems}"/>



</div>
