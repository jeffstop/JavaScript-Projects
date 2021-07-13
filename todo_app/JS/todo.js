/* This function gets the task from the input */
function get_todos() {
    /* Creates an array of tasks that are input */
    var todos = new Array;
    /* Pulls the task that was saved in the web browser memory */
    var todos_str = localStorage.getItem('todo');
    /* If input is null then JSON.parse will communicate with web browser to make the task a JS object */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* This function adds the input task to the get_todos function array */
function add() {
    /* Takes the input task and creates a variable of it */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /* Adds a new task at the end of the array */
    todos.push(task);
    /* Converts the task input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/* This function keeps the tasks permanetly displayed on the screen */
function show() {
    /* Sets the task that was retrieved as a variable */
    var todos = get_todos();

    /* Sets up each task as an unordered list */
    var html = '<ul>';
    /* This displays a task to the list in the order that it is inputed */
    for (var i = 0; i < todos.length; i++) {
        /* This also displays the task as a list and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    /* This displays the task as a list */
    document.getElementById('todos').innerHTML = html;

    /* This tells the browser how to display the todo array after an item has been removed */
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
/* This displays the inputed task when the "Add Item" button is clicked */
document.getElementById('add').addEventListener('click', add);
/* This will keep the inputs displayed permanetly on the screen */
show();

/* This allows removing a todo item from the array */
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

/* This tells the browser how to display the todo array after an item has been removed */
var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
};