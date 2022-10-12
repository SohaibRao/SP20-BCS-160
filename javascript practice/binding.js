function newFunction(){
    console.log("this is new function");
}

function dobinding(){
    console.log("it is do binding function");
    // var btn = document.getElementById('todobutton');

    // btn.onclick = newFunction;

}

//dobinding(); will not work due to dom didnot ready

window.onload = function(){
    //do all coding here all binding here
    dobinding();
    var btn = document.getElementById('todobutton');

    btn.onclick = addnew;
}

function addnew(){
    var newTodo = document.getElementById('todoInput').value;
    var addtodo = document.getElementById("todos");

    var newtodotext = document.createTextNode(newTodo);
    var newLi = document.createElement("li");
    newLi.appendChild(newtodotext);
    addtodo.appendChild(newLi);
 
}