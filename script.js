function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2) {
        return num1 / num2;
    } else {
        return "ERROR";
    }
}

let oprnd1;
let oprnd2;
let oprtr;

function operate(oprnd1, oprnd2, oprtr) {
    let result;

    switch (oprtr) {
        case "+":
            result = add(oprnd1, oprnd2);
            break;
        case "-":
            result = subtract(oprnd1, oprnd2);
            break;
        case "*":
            result = multiply(oprnd1, oprnd2);
            break;
        case "/":
            result = divide(oprnd1, oprnd2);
            break;
    }
}