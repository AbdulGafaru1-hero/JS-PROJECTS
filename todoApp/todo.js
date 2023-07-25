

const todoList = document.querySelector(".todo-list")

 function addBtn(){  
  let input = document.querySelector(".input-field").value
  if (input === '') {
    alert("You must write something!");
  } else {
    todoList.innerHTML += `<li>${input} 
    <span class="material-symbols-outlined delete">
    delete
    </span></li>`
  }
    input.value = "";
 };

todoList.forEach(element =>  {
  element.addEventListener("click", function(event){
  if (event.target.classList.contains("delete")) {
      event.target.parentElement.remove();
    } } )
  });

