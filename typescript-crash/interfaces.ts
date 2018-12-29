interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(todo.title + " " + todo.text);
}

let myTodo = {
  title: "Trash",
  text: 'Take out trash'
}

showTodo(myTodo)
