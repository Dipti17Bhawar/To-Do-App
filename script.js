const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <span onclick="removeTask(this)">✖</span>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function removeTask(element) {
  element.parentElement.remove();
}
