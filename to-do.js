// retrieve task from local storage or inicialize empty array 

let todo = JSON.parse(localStorage.getItem
    ("todo")) || [];



const textInput = document.getElementById("textInput");
const taskList = document.getElementById("taskList");
const addBtn = document.querySelector(".btn");
const deleteBtn = document.getElementById("deleteBtn");

document.addEventListener ("DOMContentLoaded",
function (){
    addBtn.addEventListener("click", addTaskToNoteContainer);

});
function addTaskToNoteContainer (){
    blah
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
