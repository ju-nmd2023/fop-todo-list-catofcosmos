// retrieve task from local storage or inicialize empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoContainer = document.getElementById("to-do-container");
const textInput = document.getElementById("text-input");
const taskList = document.getElementById("task-list");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");

// hackr.io
todoContainer.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTask = textInput.value;

  if (newTask === "") {
    alert("enter task");
    return;
  }

  // this clears the input field
  textInput.value = "";
  addTask(newTask);
});

function addTask(task) {
  const listItem = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = task;
  listItem.appendChild(taskText);

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  listItem.appendChild(checkBox);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  listItem.appendChild(deleteBtn);

  taskList.appendChild(listItem);

  addCheckbox(checkBox, taskText);
  addDeleteBtn(deleteBtn, listItem);
}

function addCheckbox(checkBox, taskText) {
  checkBox.addEventListener("change", function () {
    if (this.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  });
}

function addDeleteBtn(deleteBtn, listItem) {
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(listItem);
  });
}
