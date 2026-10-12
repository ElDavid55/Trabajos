const inputText=document.getElementById("texto");
const inputTitle=document.getElementById("titulos");
const registerButton=document.getElementById("btnRegister");
const notesContainer=document.getElementById("notes");


function Note(title,text){
    this.title=title;
    this.text=text; 
}

function register(){
    let newNote=new Note(inputTitle.value,inputText.value);
    if(newNote.title=="" || newNote.text==""){  
        alert("Please fill in all fields");
        return;
    }   
    save(newNote);
    console.log(newNote);
    display();
}




function display(){
    let notes=read();
    notesContainer.innerHTML="";
    notes.forEach((item, index  ) => {
        let li = document.createElement("li");
        li.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
        let btnDelete = document.createElement("button");
        btnDelete.id = "btnDelete";
        btnDelete.textContent = "Delete";
        btnDelete.addEventListener("click",()=>{
                delete_item(index);
        });
        notesContainer.appendChild(li);
        li.appendChild(btnDelete);
    });
}


function delete_item(index){
    let notes=read();
    notes.splice(index,1);
    localStorage.setItem("Notes", JSON.stringify(notes));
        console.clear();
        display();
    
}

function init(){
    registerButton.addEventListener("click",register);
    display();
}
window.onload=init;