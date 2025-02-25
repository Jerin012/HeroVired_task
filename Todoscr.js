document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    let now = new Date();
    let timeString = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    let task = {
        text: taskInput.value,
        time: timeString
    };

    saveTask(task);

    let li = document.createElement("li");
    li.innerHTML = `${task.text} <span class="time">(${task.time})</span> 
                    <button onclick="removeTask(this, '${task.text}')">X</button>`;

    taskList.appendChild(li);
    taskInput.value = "";
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let taskList = document.getElementById("taskList");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task.text} <span class="time">(${task.time})</span> 
                        <button onclick="removeTask(this, '${task.text}')">X</button>`;
        taskList.appendChild(li);
    });
}

function removeTask(button, taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    button.parentElement.remove();
}

// Function to add task with time
function addTaskWithTime(taskText, taskTime) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; 
    tasks.push({ text: taskText, time: taskTime });
    localStorage.setItem("tasks", JSON.stringify(tasks));  
    console.log("Task Added:", taskText, "at", taskTime);
}

// Example Usage (Manually add task with time)
addTaskWithTime("Complete Assignment", "14:30");
