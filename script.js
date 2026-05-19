


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


async function dataFetching(){
    let store=await fetch("https://fakestoreapi.com/products");
    let parent=document.getElementById("parent")
  if(store.status==200){
    let data= await store.json();
    console.log(data)
    data.forEach((items)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        let h3=document.createElement("h3");

        img.src=items.image;
        h3.innerHTML=items.title;
        
        div.appendChild(img);
        div.appendChild(h3);
        parent.appendChild(div);
        

    });
  }

}
dataFetching();