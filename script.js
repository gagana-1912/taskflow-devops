function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
 
    let span = document.createElement("span");
    span.innerText = taskText;
 
    span.onclick = function () {
        span.classList.toggle("completed");
    };

    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}