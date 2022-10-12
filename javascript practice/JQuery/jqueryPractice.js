$(function(){
    $("#todobutton").click(handleButton);
})

function handleButton(){
   $("#todos").append("<li>"+$("#todoInput").val()+"</li>");
}