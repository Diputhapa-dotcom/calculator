function addvalue(value){
    document.getElementById("display").value +=value;
}
function reset(){
    document.getElementById("display").value ="";
}
function calculate(){
    document.getElementById("display").value=eval(document.getElementById("display").value);
}