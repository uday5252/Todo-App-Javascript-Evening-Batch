var addTodoBtn = document.querySelector("#addTodoBtn");
addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
    var todoInput = document.querySelector("#todoInput");
    var todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please enter a todo!");
        return;
    }

    var todoList = document.querySelector("#todoList");
    var li = document.createElement("li");
    li.textContent = todoText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        todoList.removeChild(li);
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
    todoInput.value = "";
}
