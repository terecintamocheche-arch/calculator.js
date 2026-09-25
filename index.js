// Store all calculations
const history = [];

// Add a calculation to the history
function addToHistory(num1, operator, num2, result) {
    history.push({
        operands: [num1, num2],
        operator: operator,
        result: result
    });
}
// Addition
function add(num1, num2) {
    const result = num1 + num2;
    addToHistory(num1, "+", num2, result);
    return result;
}

// Subtraction
function subtract(num1, num2) {
    const result = num1 - num2;
    addToHistory(num1, "-", num2, result);
    return result;
}

// Multiplication
function multiply(num1, num2) {
    const result = num1 * num2;
    addToHistory(num1, "*", num2, result);
    return result;
}

// Division
function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }

    const result = num1 / num2;
    addToHistory(num1, "/", num2, result);
    return result;
}

/ Display calculation history
function displayHistory() {
    if (history.length === 0) {
        console.log("No stored calculations.");
        return;
    }

    console.log("Calculation History:");

    history.forEach((calculation, index) => {
        const [num1, num2] = calculation.operands;

        console.log(
            `${index + 1}. ${num1} ${calculation.operator} ${num2} = ${calculation.result}`
        );
    });
}