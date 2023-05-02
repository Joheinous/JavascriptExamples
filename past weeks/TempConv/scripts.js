function cToF() {

    const field1 = document.getElementById("celciusField");

    let number1 = Number(celciusField.value);

    let answer = Math.round((number1*(9/5))+32);

    const outputField = document.getElementById("output");
    outputField.innerText=`${answer}° Fahrenheit`;
}


function fToC() {

    const field1 = document.getElementById("celciusField");

    let number1 = Number(fahrenheitField.value);

    let answer = Math.round((number1-32)*(5/9));

    const outputField = document.getElementById("output");
    outputField.innerText=`${answer}° Celcius`;
}