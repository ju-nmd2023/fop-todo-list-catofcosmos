// retrieve task from local storage or inicialize empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];

const textInputElement = document.getElementById("textInput");
const taskListElement = document.getElementById("taskList");
const addBtn = document.querySelector("addBtn");

// document.addEventListener("DOMContentLoaded", function () {
//   addBtn.addEventListener("click", addTaskToNoteContainer);
// });

function addTaskToNoteContainer() {
  let inputText = textInputElement.value.trim();
  console.log("Hello");
  if (inputText !== "") {
    let task = document.createElement("li");
    task.classList.add("task");

    let taskNode = document.createTextNode(inputText);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
      if (checkbox.checked) {
        task.classList.add("task-done");
      } else {
        task.classList.remove("task-done");
      }
    };

    task.appendChild(checkbox);
    task.appendChild(taskNode);

    taskListElement.appendChild(task);

    inputElement.value = "";
  }
}

  const deleteBtn = document.getElementById("deleteBtn");
  deleteBtn.addEventListener();
  function deleteTasks() {
    while (taskListElement.firstChild)
      taskListElement.removeChild(taskListElement.firstChild);
  }

// function addTaskToNoteContainer() {
//     console.log("Button clicked");
//   const textInputValue = textInputElement.value.trim();
//   console.log("Input value:", textInputValue);
//   if (textInputValue !== "") {
//     const noteElement = document.createElement("div");
//     noteElement.textContent = textInputValue;
//     noteContainerElement.appendChild(noteElement);
//     textInputElement.value = "";
//     console.log("input added to container");
//   } else {
//     console.log("input empty");
//   }
// }

// function addTaskToNoteContainer() {
//   noteContainerElement.appendChild(this);
//   console.log("i was clicked");
// }
