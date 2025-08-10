 const colors = ["#ff7675", "#55efc4", "#74b9ff", "#ffd95dff", "#a29bfe", "#fca4f0ff"];
    let colorIndex = 0;

    function addTask() {
        let taskInput = document.getElementById("taskInput");
        let taskValue = taskInput.value.trim();
        if (taskValue === "") return;

        let li = document.createElement("li");
        li.style.backgroundColor = colors[colorIndex % colors.length];
        colorIndex++;

        li.innerHTML = `${taskValue} <button class="delete-btn" onclick="this.parentElement.remove()">×</button>`;
        
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }