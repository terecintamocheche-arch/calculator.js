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