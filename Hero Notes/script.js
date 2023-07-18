let note = document.querySelector(".notes");
const titleInput = document.querySelector(".titleInput");
const detailsInput = document.querySelector(".detailsInput");
const addNote = document.querySelector(".addNote");
const noteTitle = document.querySelector(".noteTitle");
const noteDetails = document.querySelector(".noteDetails");



addNote.addEventListener("click", function(event){
   event.preventDefault();

    if (titleInput.value == "" || detailsInput.value == "") {
        alert("Please write something!")
    };

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        newNotes = [];
        
    } else {
        newNotes = JSON.parse(notes);
    }
    let notesObj = {
        title: titleInput.value,
        text: detailsInput.value,
    };
newNotes.push(notesObj);
   localStorage.setItem("notes", JSON.stringify(newNotes));
    titleInput.value = ""
    detailsInput.value = ""
   displayNote();
})


function displayNote() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        newNotes = [];
        
    } else {
        newNotes = JSON.parse(notes);
    };

    let noteTemplate = "";
    newNotes.forEach(function(note, index){
  
    noteTemplate += `
    <div class="note">
    <p class="noteNumber">Note ${index + 1}</p>
    <h3 class="noteTitle">${note.title}</h3>
    <p class="noteDetails">${note.text}</p>
         <div class="btns">
         <button class="edit" id=${index} onclick="editNote(this.id)">Edit Note <span class="material-symbols-outlined">
            edit_note
            </span></button>
         <button class="delete" id=${index} onclick="deleteNote(this.id)"> Delete Note<span class="material-symbols-outlined">
            delete
            </span></button>
            </div>
        </div>`;
});
if (newNotes.length != 0) {
    note.innerHTML = noteTemplate;
} else {
    note.innerHTML = "No Notes Added yet.";
}

}
displayNote();

function deleteNote(index) {
    let confirmDelete = confirm("You are about to delete this Note!");

    if(confirmDelete == true) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        newNotes = [];
    } else {
        newNotes = JSON.parse(notes);
    }
    
    newNotes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(newNotes));
    displayNote();
    }
}



function editNote(index) {
let notes = localStorage.getItem("notes"); 
if (titleInput.value !== "" || detailsInput.value !== "") {
    return alert("Please clear input before editing note");
}
 
    if (notes == null) {
        newNotes = [];
    } else {
        newNotes = JSON.parse(notes);
    }
newNotes.findIndex((note, index) =>{
    titleInput.value = note.title;
    detailsInput.value = note.text;
})
newNotes.splice(index, 1);
localStorage.setItem("notes", JSON.stringify(newNotes));
displayNote();
}



