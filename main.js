function kickme(event)
{
    event.preventDefault();
    const expence = document.getElementById("exampleInputEmail1").value;
    const description = document.getElementById("exampleInputPassword1").value;
    const category = document.getElementById("inputGroupSelect02").value;
    //console.log(expence,description,category)

    var obj ={
        expence,
        description,
        category
    }

    localStorage.setItem("expenceDetails",JSON.stringify(obj));
    storeexpence(obj);
}
function storeexpence(obj)
{
const parentEle = document.getElementById("Listofexpence");
const childEle = document.createElement("li");
childEle.className ="list-group-item list-group-item-action list-group-item-light"; 
childEle.textContent = obj.expence+ "-"+ obj.description +"-" + obj.category;
childEle.style.color = "Green";
const deletebtn = document.createElement("input");
deletebtn.type = "button";
deletebtn.value ="delete";
deletebtn.className ="btn btn-outline-danger float-right";
deletebtn.onclick = Babaji;
const editbtn = document.createElement("input");
editbtn.type="button";
editbtn.value="Edit";
editbtn.className ="btn btn-outline-info float-right";
editbtn.onclick = Shivji;
parentEle.appendChild(childEle);
childEle.appendChild(deletebtn);
childEle.appendChild(editbtn);
function Babaji()
{
    localStorage.removeItem("expenceDetails");
    parentEle.removeChild(childEle);
}
function Shivji()
{
    localStorage.removeItem("expenceDetails");
    parentEle.removeChild(childEle);
    document.getElementById("exampleInputEmail1").value = obj.expence;
    document.getElementById("exampleInputPassword1").value = obj.description;
    document.getElementById("inputGroupSelect02").value = obj.category;

}

}


