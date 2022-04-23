document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector("form#create-task-form")
  form.addEventListener("submit", e => {
    e.preventDefault();
    let input = document.querySelector("input#new-task-description")
    logToDoTask(input.value)
    form.reset()
  })
});

function logToDoTask(toDoTask) {
  let toDoList = document.querySelector("ul#tasks")
  let list = document.createElement("li")
  let button = document.createElement("button")
  button.addEventListener("click",deleteList)
  button.innerHTML="x"
  list.textContent = `${toDoTask} `
  toDoList.appendChild(list)  
  list.appendChild(button)
  console.log(toDoList)
}

function deleteList(e){
  e.target.parentNode.remove()
}