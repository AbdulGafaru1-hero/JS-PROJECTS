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
    let notesObj= {
        title: titleInput.value,
        text: detailsInput.value
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
    <h3 class="noteTitle">${note.title}</h3>
    <p class="noteDetails">${note.text}</p>
         <div class="btns">
         <button class="edit" id=${index} onlick="editNotes(this.id)">Edit Note <span class="material-symbols-outlined">
            edit_note
            </span></button>
         <button class="delete" id=${index} onlick="deleteNotes(this.id)">Delete Note<span class="material-symbols-outlined">
            delete
            </span></button>
        </div>`;
});

if (newNotes.length != 0) {
    note.innerHTML = noteTemplate;
} else {
    note.innerHTML = "No Notes Added yet.";
}
}
displayNote();