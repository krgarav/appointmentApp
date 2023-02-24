const getkey="https://crudcrud.com/api/aa4901f010fd4bd48a8d1bd3def60588/appointmentData"
window.addEventListener("DOMContentLoaded",()=>{
    const ul= document.getElementById("items");
const name=document.getElementById("name").value;
const email = document.getElementById("email").value;

axios.get(getkey)
.then((res)=>{
let array = res.data
let name,email
array.forEach((element)=>{
     name=element.name
     email= element.email
     //create delete buttn
const deleteBtn = document.createElement("input")
deleteBtn.setAttribute("type","button")
deleteBtn.setAttribute("onclick","deleteBtnFn(event)")
deleteBtn.value="Delete"
deleteBtn.className="delete"
//create edit button    
const editBtn = document.createElement("input")
editBtn.setAttribute("type","button")
editBtn.setAttribute("onclick","editBtnFn()")
editBtn.className="edit"
editBtn.value="Edit"

//create li element
     const liElement=document.createElement("li")
    liElement.className= "item";
    liElement.textContent= `${name}-${email}`
    liElement.appendChild(editBtn)
    liElement.appendChild(deleteBtn)
    ul.appendChild(liElement)
})
})

})

function appointmentDetails(event){
    event.preventDefault();
    const ul= document.getElementById("items");
    const name=document.getElementById("name").value;
    const email = document.getElementById("email").value;
    //create delete buttn
    const deleteBtn = document.createElement("input")
    deleteBtn.setAttribute("type","button")
    deleteBtn.setAttribute("onclick","deleteBtnFn(event)")
    deleteBtn.value="Delete"
    deleteBtn.className="delete"
    //create ewdit button    
    const editBtn = document.createElement("input")
    editBtn.setAttribute("type","button")
    editBtn.setAttribute("onclick","editBtnFn()")
    editBtn.className="edit"
    editBtn.value="Edit"
    
    //create li element
    const liElement=document.createElement("li")
    liElement.className= "item";
    liElement.textContent= `${name}-${email}`
    liElement.appendChild(editBtn)
    liElement.appendChild(deleteBtn)
    
    ul.appendChild(liElement)
    
    const obj={
        "name" : name,
        "email":email
    }

    axios.post(getkey,obj)
    
}

function deleteBtnFn(event){

    event.target.parentNode.style.display="none"
    const name=event.target.parentNode.textContent.split("-")[0]
    const email=event.target.parentNode.textContent.split("-")[1]
    var ids;
    console.log(name,email)
    const id=axios.get(getkey)
    .then((res)=>{
        let arr = res.data;
        let id;
        arr.forEach(element => {
            if(element.name==name && element.email==email){
            id=element._id
        }
        });
        
        return id
    })
id.then(res=>{
    axios.delete(`${getkey}/${res}`)
})

    
}

function editBtnFn(){
    console.log("edit")
}