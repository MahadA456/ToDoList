// script.js
function addTask() {
    var input = document.getElementById('taskInput');
    var newTask = input.value.trim();
    if (newTask !== "") {
        var li = document.createElement('li');
        li.textContent = newTask;
        li.onclick = function() { this.classList.toggle('completed'); };
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() { this.parentElement.remove(); };
        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);
        input.value = ""; // Clear the input after adding
    } else {
        alert("Please enter a task!");
    }
}
