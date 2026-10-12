document.addEventListener("DOMContentLoaded",()=>{
    // all the code will be here
    const btnAdd = document.getElementById("btnAdd");
    const inputItem = document.getElementById("txtItem");
    const list = document.getElementById("itemList");

    console.log(btnAdd,inputItem,list);

    //array of items with anonymous obj (obj constructor, obj literal)
    let items = [
        {name:"Laptop",purchase:false},
        {name:"Speakers",purchase:false},
        {name:"MacBook",purchase:false}
    ]


    function renderList(){
        list.innerHTML=""; // clear the HTML
        items.forEach((item,index)=>{
            console.log(item,index);
            let li = document.createElement("li");
            li.innerHTML=`
            <span>${item.name}</span>
            <button class="btn-delete">Delete</button>
            <button class="btn-edit">Edit</button>
            `;
            let btnEdit = li.querySelector("button:nth-child(3)");
            btnEdit.addEventListener("click",()=>{
                    editItem(index);
            });

            let btnDelete = li.querySelector("button:nth-child(2)");     
            btnDelete.addEventListener("click",()=>{
                    deleteItem(index);
            });
            console.log(li);
            list.appendChild(li);
        });
    }
    

    function editItem(index){
        let newName=prompt("Enter new name",items[index].name);
        if(newName===null){
            return;
        }
        if(newName.trim()===""){
            alert("Please enter a valid name");
            return;
        }
        items[index].name=newName;
        console.clear();
        renderList();
    }


    // deleting items
    function deleteItem(index){
        items.splice(index,1);
        console.clear();

        renderList();
    }



    
    // hook event add
    btnAdd.addEventListener("click",()=>{
        let item = inputItem.value;// getting value from the input
        if (item.trim()===""){
            alert("Please enter a valid item");
            return;
        }
        console.log(items);// print the value
        items.push({name:item,purchase:false});
        console.log(items);// print the value
        renderList();
    });
    
    renderList();// initial render
});