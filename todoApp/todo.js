
// const addBtn = document.querySelector(".btn")

// const todoList = document.querySelector(".todo-list")

//  function addBtn(){
//  let todoList = document.querySelector(".todo-list")
//   let input = document.querySelector(".input-field").value
//  let li = document.createElement("li");
//  let t = document.createTextNode(input);
//  li.appendChild(t);
//  if (input === ''){ 
//   alert("You must write something!");
// } else{
// todoList.appendChild(li)

// }
// document.querySelector(".input-field").value = ""
//  }


const todoList = document.querySelector(".todo-list")

 function addBtn(){  
  let input = document.querySelector(".input-field").value
  if (input === '') {
    alert("You must write something!");
  } else {
    todoList.innerHTML += `<li>${input}</li>`
  }
document.querySelector(".input-field").value = ""
 }


