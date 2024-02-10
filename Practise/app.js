const addbtn=document.querySelector("#addbtn")
const main=document.querySelector("#main")
const saveNotes=()=>{
    const notes =document.querySelectorAll(".note textarea");
console.log(notes);
const data=[];
notes.forEach(
    (note)=>{
        data.push(note.value)
    }
)
if(data.length===0){
    localStorage.removeItem("notes")
}
else{
    localStorage.setItem("notes",JSON.stringify(data))
  }
}
addbtn.addEventListener(
    "click",
     function(){
        addNote()
     }
    )
    const addNote=(Text="")=>{
        const note= document.createElement("div");
        note.classList.add("note")
        note.innerHTML=`
        <div class="tool">
        <i class="save fa-regular fa-floppy-disk"></i>
        <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea>${Text}</textarea>
        `;
        note.querySelector(".trash").addEventListener(
            "click",
            function(){
                note.remove()
                saveNotes()
            }
        )

        note.querySelector(".save").addEventListener(
            "click",
            function(){
                saveNotes()
            }
        )
        note.querySelector("textarea").addEventListener(
            "focusout",
            function(){
                saveNotes()
            }
        )
        main.appendChild(note);
    }
    (
        function(){
            const lsNotes=JSON.parse(localStorage.getItem("notes"));
            if(lsNotes===null){
                addNote()
            }
            else{
                lsNotes.forEach(
                    (lsNotes) => {
                        addNote(lsNotes)
                    }
                )
            }
        }
    )()