const input = document.querySelector(".input-field")
// const addBtn = document.querySelector(".btn")
const todoList = document.querySelector(".todolist")


 function addBtn(){
 input.value = "";
 todoList.innerHTML = `<li> ${input.value} </li>`
  
}