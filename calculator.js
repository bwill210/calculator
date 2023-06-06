function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return console.log(a * b);
}

function divide(a, b) {
    return console.log(a / b);
}

let n1;
let n2;
let operator;

function operate(n1, n2, operator) {
    switch(operator) {
        case '+':
            add(n1, n2);
            break;
        case '-':
            subtract(n1, n2);
            break;
        case '*':
            multiply(n1, n2);
            break;
        case '/':
            divide(n1, n2);
            break;
        default:
            console.log("surely this will never print");
    }
}

/*
divide(6, 2);
multiply(6, 2);
subtract(6, 2);
add(6, 2);
*/