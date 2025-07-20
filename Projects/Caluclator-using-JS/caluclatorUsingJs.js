let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let res = document.querySelector('.res');
let select = document.querySelector('#operator');
let body = document.querySelector('body');

res.addEventListener('click', () => {
    let number1 = Number(num1.value)
    let number2 = Number(num2.value)
    let option = select.value
    let result
    if (option == "+") {
        result = number1 + number2
    }
    else if (option == "-") {
        result = number1 - number2
    }
    else if (option == "/") {
        result = number1 / number2
    }
    else if (option == "*") {
        result = number1 * number2
    }
    let para = document.createElement('p');
    para.textContent = result;
    document.body.appendChild(para);
})
