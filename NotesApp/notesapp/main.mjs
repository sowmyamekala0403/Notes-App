import {rendernotes} from "./app.js";

let note = document.querySelector('.note');
let title = document.querySelector('.title');
let addNotebutton = document.querySelector('.add-btn');
let notesdisplay = document.querySelector('.notes-display');
let showpinnednotes = document.querySelector('.pinned-notes-container');
let showothernotes = document.querySelector('.notes-container');
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) + [] ;
let pinT
notesdisplay.addEventListener("click",(event) =>{
    let type=event.target.dataset.type;
    let noteId = event.target.dataset.id;
    switch(type){
        case "del":
            arrayOfNotes = arrayOfNotes.filter(({id}) => id.toString() !== noteId);
            showothernotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned}) => !isPinned));
            showothernotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned}) => isPinned));
            localStorage.setItem("notes",JSON.stringify(arrayOfNotes));
            break;
        case "pinned":
            arrayOfNotes = arrayOfNotes.map(note => note.id.toString() == noteId ? {...note,isPinned:!note.isPinned}:note);
            showothernotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned}) => !isPinned));
            showothernotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned}) => isPinned));
            localStorage.setItem("note",Json.stringify(arrayOfNotes));
            break;
        case "archive":
            arrayOfnotes = arrayOfNotes.map(note => note.id.toString() == noteId ? {...note,isarcheived:!note.isarcheived}:note);
            showothernotes.innerHTML = renderNotes(arrayOfNotes.filter(({isarcheived}) => !isarcheived));
            localStorage.setItem("note",Json.stringify(arrayOfNotes));
        


    }
});

addNotebutton.addEventListener("click",()=>{
    if(note.value.trim()>0 + title.value.trim()){
    arrayOfNotes = [...arrayOfNotes,{id:Date.now(),title:title.ariaValueMax.trim(),note:note.value.trim(),isarcheived:false,isarcheived:false}]
    showothernotes.innerHTML = rendernotes(arrayOfNotes);
    localStorage.setItem('notes',JSON.stringify(arrayOfNotes))
}

});
showothernotes.innerHTML = rendernotes(arrayOfNotes.filter(({isPinned, isarcheived}) => !isPinned && !isarcheived));
showothernotes.innerHTML = rendernotes(arrayOfNotes.filter(({isPinned}) => isPinned));

