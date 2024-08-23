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
        return "DUMBASS";
    }
}

let oprnd1 = null;
let oprnd2 = null;
let oprtr = null;

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

    return result;
}

const buttons = document.querySelector(".buttons");
let displayVal = "";
let isPrevInputOprtr = false;

buttons.addEventListener("click", (event) => {
    const target = event.target;

    const display = document.querySelector(".display");

    switch (target.id) {
        case "num":
            if (isPrevInputOprtr) {
                displayVal = "";
            }
            displayVal += target.textContent;
            isPrevInputOprtr = false;
            break;

        case "op":
            if (displayVal !== "DUMBASS") {
                oprnd1 = Number(displayVal);
                displayVal = target.textContent;
                oprtr = displayVal;
                isPrevInputOprtr = true;
            }
            break;

        case "eq":
            if (oprnd1 !== null && oprtr !== null && !("/*-+".includes(displayVal))) {
                oprnd2 = Number(displayVal);
                let result = operate(oprnd1, oprnd2, oprtr);
                if (result === "DUMBASS") {
                    displayVal = result;
                    oprnd1 = null;
                } else {
                    oprnd1 = Math.round(result * 10) / 10;
                    displayVal = "" + oprnd1;
                }
                isPrevInputOprtr = true;
                oprnd2 = null;
                oprtr = null;
            }
            break;

        case "C":
            displayVal = "0";
            isPrevInputOprtr = true;
            oprnd1 = null;
            oprnd2 = null;
            oprtr = null;
            break;
    }
    display.textContent = displayVal;
});