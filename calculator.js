function add(a, b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(n1, n2, operator) {
    switch(operator) {
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case 'x':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
        default:
            return console.log("Please pick a valid operator.");
    }
}

const buttons = document.querySelectorAll("button");
let displayValue;
let n1 = undefined;
let n2 = undefined;
let currentOperator = undefined;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className === "number") {
            displayValue = button.value;
            document.querySelector(".display").textContent = displayValue;
            if (n1 != undefined) {
                n2 = displayValue;
            }
            else {
                n1 = displayValue;
            }
        }
        else if (button.className === "operand") {
            if (n2 != undefined) {
                n1 = operate(n1, n2, currentOperator);
                n2 = undefined;
                currentOperator = button.value;
            }
            else {
            currentOperator = button.value;
            }
        }
        else if (button.className === "clear") {
            displayValue = button.value;
            document.querySelector(".display").textContent = displayValue;
            n1 = undefined;
            n2 = undefined;
            currentOperator = undefined;
        }
        else if (button.className === "equals"){
            result = operate(n1, n2, currentOperator);
            console.log(result);
            document.querySelector(".display").textContent = result;
            console.log(button.currentOperator);
            n1 = result;
            n2 = undefined;
            currentOperator = undefined;
        }
    })
});