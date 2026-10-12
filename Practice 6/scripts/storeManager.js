function save(Note) {
    let Notes=read();
    Notes.push(Note);
    let val=JSON.stringify(Notes);
    localStorage.setItem("Notes",val);
}

function read() {
    let data=localStorage.getItem("Notes");
    if(!data){
        return [];
    }else{
        return JSON.parse(data);
    }
}

