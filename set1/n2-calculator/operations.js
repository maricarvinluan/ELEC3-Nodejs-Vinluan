// Name: Maricar Untlan Vinluan
// Section: IV-BSIT A
// Activity: N2 - Modular Calculator
// Date: November 26, 2026

// Mathematical operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

function average(a, b) {
    return (a + b) / 2;
}

// Export functions
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};