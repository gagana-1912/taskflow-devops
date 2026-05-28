let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

 
window.onload = function () {
    tasks.forEach(task => createTask(task.text, task.completed));
};

function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    createTask(taskText, false);

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();

    taskInput.value = "";
}

function createTask(taskText, isCompleted) {

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = taskText;

    let statusBtn = document.createElement("button");

    if (isCompleted) {
        statusBtn.innerText = "Completed";
        statusBtn.classList.add("completed-btn");
        span.classList.add("completed");
    }

    else {
        statusBtn.innerText = "Pending";
        statusBtn.classList.add("pending-btn");
    }

     
    statusBtn.onclick = function () {

        let task = tasks.find(t => t.text === taskText);

        if (statusBtn.innerText === "Pending") {

            statusBtn.innerText = "Completed";

            statusBtn.classList.remove("pending-btn");
            statusBtn.classList.add("completed-btn");

            span.classList.add("completed");

            task.completed = true;
        }

        else {

            statusBtn.innerText = "Pending";

            statusBtn.classList.remove("completed-btn");
            statusBtn.classList.add("pending-btn");

            span.classList.remove("completed");

            task.completed = false;
        }

        saveTasks();
    };

     
    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function () {

        li.remove();

        tasks = tasks.filter(t => t.text !== taskText);

        saveTasks();
    };

    
    let buttonGroup = document.createElement("div");

    buttonGroup.classList.add("button-group");

    buttonGroup.appendChild(statusBtn);

    buttonGroup.appendChild(deleteBtn);

    li.appendChild(span);

    li.appendChild(buttonGroup);

    document.getElementById("taskList").appendChild(li);
}

 
function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));
}