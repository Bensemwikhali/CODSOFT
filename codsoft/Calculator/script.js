const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ["%", "*", "/", "-", "÷", "="];
let output = "";

const calculate = (btnValue) => {
    try {
        if (btnValue === "=" && output !== "") {
            // Replace "%" with "/100" and "÷" with "/" for evaluation
            output = eval(output.replace("%", "/100").replace("÷", "/"));
        } else if (btnValue === "AC") {
            output = "";
        } else if (btnValue === "DEL") {
            output = output.toString().slice(0, -1);
        } else {
            if (output === "" && specialChars.includes(btnValue)) return;
            output += btnValue;
        }
        display.value = output;
    } catch (error) {
        display.value = "Error";
        output = "";
    }
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});