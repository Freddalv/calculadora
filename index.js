let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue); // Evaluate the expression
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid input");
        }
        displayValue = result.toString();
        document.getElementById("display").value = displayValue;
    } catch (error) {
        displayValue = "Error";
        document.getElementById("display").value = displayValue;
    }
}
