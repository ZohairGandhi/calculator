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

let buttons = document.querySelector(".buttons");
let displayVal = "";
let oprtrEntered = false;

buttons.addEventListener("click", (event) => {
    let btnText = event.target.textContent;

    let display = document.querySelector(".display");

    switch (btnText) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if (oprtrEntered) {
                displayVal = "";
            }
            displayVal += btnText;
            oprtrEntered = false;
            break;

        case "/":
        case "*":
        case "-":
        case "+":
            displayVal = btnText;
            oprtrEntered = true;
            break;

        case "=":
            // eval expr
            break;

        case "C":
            displayVal = "";
            oprtrEntered = false;
            break;
    }
    display.textContent = displayVal;
});