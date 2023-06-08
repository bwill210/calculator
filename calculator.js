function add(a, b) {
    a = Number(a);  //must convert to number or else they are
    b = Number(b);  //concatenated togeter since they are strings.
    let result = +(a + b).toFixed(8); // 8 decimal places max.
    return result;
}

function subtract(a, b) {
    let result = +(a - b).toFixed(8);
    return result;
}

function multiply(a, b) {
    let result = +(a * b).toFixed(8);
    return result;
}

function divide(a, b) {
    let result = +(a / b).toFixed(8);
    return result;
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
let prevValue = '';
let n1 = undefined;
let n2 = undefined;
let currentOperator = undefined;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className === "number") {
            displayValue = prevValue + button.value; //allows multidigit operands
            console.log(button.value);
            document.querySelector(".display").textContent = displayValue;
            if (currentOperator != undefined) { //entering second operand
                n2 = displayValue;
                prevValue = displayValue;
            }
            else {                  //entering first operand
                n1 = displayValue;
                prevValue = displayValue;
            }
        }
        else if (button.className === "operator") {
            prevValue = '';
            if (n2 != undefined) {
                n1 = operate(n1, n2, currentOperator);
                n2 = undefined;
                currentOperator = button.value;
                displayValue = n1;
                document.querySelector(".display").textContent = displayValue;
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
            prevValue = '';
        }
        else if (button.className === "equals"){
            if (n2 == undefined) {
                result = 'error';
            }
            else {
                result = operate(n1, n2, currentOperator);
            }
            console.log(result);
            document.querySelector(".display").textContent = result;
            n1 = result;
            n2 = undefined;
            currentOperator = undefined;
            prevValue = '';
        }
    })
});