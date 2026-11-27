// Name: Maricar Untalan Vinluan
// Section: IV-BSIT A
// Activity: N2 - Modular Calculator
// Date: November 26, 2026

// Import custom and built-in modules
const operations = require("./operations");
const formatResult = require("./formatter");
const path = require("path");

// Get command-line arguments
const operation = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);

console.log("=== MODULAR CALCULATOR ===");
console.log("Name: Maricar Vinluan");
console.log("Section: IV-BSIT A");

try {
    if (!Object.hasOwn(operations, operation)) {
        throw new Error("Unknown operation.");
    }

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new Error("Please enter two valid numbers.");
    }

    const result = operations[operation](a, b);
    console.log(formatResult(operation, a, b, result));

} catch (error) {
    console.log("Error: " + error.message);
    console.log(`Usage: node ${path.basename(__filename)} add 12 8`);
}