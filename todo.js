function displayDate() {
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
}

window.onload = function () {
    displayDate()
}


// const retrivesTodo = () => {
//     let todos = localStorage.getItem("todoEntries");
//     if(todos){
//        todos = JSON.parse(todos);
//     }
//     else{
//        todos = [];
//     }
//     return todos;
// }

// let todoArray = retrivesTodo();

const toDoitems = document.getElementsByClassName("to-do-item")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

// const addTask = () => {
//     const todoItem = input.value;
//     todoArray.push(todoItem);
//     localStorage.setItem("todoEntries", JSON.stringify(todoArray));
//     input.value = '';
//     displayTodo();
// }

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter")
        addTask();
})

function addTask() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>' + input.value + '</div>';

    checkIcon.className = "fa fa-check-square";
    checkIcon.style.color = "black";
    checkIcon.addEventListener("click", function () {
        checkIcon.style.color = "limegreen";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fa fa-trash";
    trashIcon.style.color = "black";
    trashIcon.addEventListener("click", function () {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoitems.appendChild(divParent);

    input.value = '';


}


