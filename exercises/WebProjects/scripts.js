function addBtnClick(){

    const field1 = document.getElementById("field1");
    const field2 = document.getElementById("field2");

    let number1 = Number(field1.value);
    let number2 = Number(field2.value);

    let answer = number1 + number2;

    const outputField = document.getElementById("output");
    outputField.innerText=answer;
}

function subBtnClick(){

    const field1 = document.getElementById("field1");
    const field2 = document.getElementById("field2");

    let number1 = Number(field1.value);
    let number2 = Number(field2.value);

    let answer = number1 - number2;

    const outputField = document.getElementById("output");
    outputField.innerText=answer;
}