window.addEventListener("load", function loadHandler() {});

// retrieve task from local storage or inicialize empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoContainer = document.getElementById("to-do-container");
const textInput = document.getElementById("text-input");
const taskList = document.getElementById("task-list");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const taskDone = document.getElementById("task-done");
// alot of help from chatgpt https://chat.openai.com/share/3a0e8f0b-becc-412c-aff6-1f09ffe15cb9
// hackr.io https://hackr.io/blog/how-to-create-a-javascript-to-do-list#step-7-saving-to-local-storage-optional

function saveToLocalStorage() {
  const tasks = [];
  document.querySelectorAll("#task-list li").forEach((task) => {
    const taskText = task.querySelector("span").textContent;
    const isCompleted = task.querySelector("input[type='checkbox']").checked;
    tasks.push({ text: taskText, completed: isCompleted });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.addEventListener("DOMContentLoaded", function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    addTask(task.text, task.completed);
  });
});

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
  saveToLocalStorage();
});

function addTask(task, isCompleted) {
  const listItem = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = task;
  listItem.appendChild(taskText);

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  listItem.appendChild(checkBox);

  // styles added with chat gpt https://chat.openai.com/share/3a0e8f0b-becc-412c-aff6-1f09ffe15cb9
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.style.border = "none";
  listItem.appendChild(deleteBtn);
  deleteBtn.style.backgroundColor = "pink";
  deleteBtn.style.padding = "4px 7px 2px 7px";
  deleteBtn.style.borderRadius = "20px";
  deleteBtn.style.cursor = "pointer";

  addBtn.style.backgroundColor = "pink";
  addBtn.textContent = "+";
  addBtn.style.fontSize = "16px";
  addBtn.style.fontWeight = "bold";
  addBtn.style.color = "white";

  taskList.appendChild(listItem);

  addCheckbox(checkBox, taskText, isCompleted);
  addDeleteBtn(deleteBtn, listItem);
}

function addCheckbox(checkBox, taskText, isCompleted) {
  checkBox.checked = isCompleted;
  if (isCompleted) {
    taskText.style.textDecoration = "line-through";
  } else {
    taskText.style.textDecoration = "none";
  }

  checkBox.addEventListener("change", function () {
    if (this.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
    saveToLocalStorage();
  });
}

function addDeleteBtn(deleteBtn, listItem) {
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(listItem);
    saveToLocalStorage();
  });
}
