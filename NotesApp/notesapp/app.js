export const renderNotes = () => {
    let newNote = notes.map(({id,note,title,isPinned,isArchieved}) =>{
        return (
            `<div class="single-note">
            <div class="d-flex align-center title-container">
            <span>${title}</span>
            <button class="button del-btn v-hidden">
            <span class=" material-icons-outlines">
            delete
            </span>
            </button>
            </div>
            <p>${note}</p>
            <div>
            <button class="button btn pinned-btn v-hidden">
            <span class="material-icons-outlined">
            push_pin
            </span>
            </button>
            <button class="button btn pinned-btn v-hidden">
            <span class="materials-icons-outlined">
            archieve
            </span>
            </button>
            </div>
            </div>            `
        )
    }
    );
    newnote=newnote.join("");
    return newnote;
}
