


let expression = "";

function num(number){

    expression += number;

    document.querySelector(".output").value = expression;
}

function operator(op){

    expression += op;

    document.querySelector(".output").value = expression;
}

function equal(){

try {

    let result = eval(expression);

    document.querySelector(".output").value = result;

    expression = result.toString();

}
catch (error) {

    document.querySelector(".output").value = "Error";

    expression = "";
}
}

function clearDisplay(){
    expression = "";

    document.querySelector(".output").value = "";
}

function del(){

    expression = expression.slice(0,-1);

    document.querySelector(".output").value = expression;
}

function decimal(){

    expression += ".";

    document.querySelector(".output").value = expression;
}
