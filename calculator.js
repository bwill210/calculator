function add(a, b) {
    return console.log(a + b);
}

function subtract(a, b) {
    return console.log(a - b);
}

function multiply(a, b) {
    return console.log(a * b);
}

function divide(a, b) {
    return console.log(a / b);
}

function operate(n1, n2, operator) {
    switch(operator) {
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
        default:
            return console.log("Please pick a valid operator.");
    }
}

let n1 = 4;
let n2 = 10;
let operator = '*';
operate(n1, n2, operator);