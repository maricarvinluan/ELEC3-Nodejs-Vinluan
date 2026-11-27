// Name: Maricar Untalan Vinluan
// Section: IV-BSIT A
// Activity: N2 - Modular Calculator
// Date: November 26, 2026

function formatResult(operation, a, b, result) {
    const symbols = {
        add: "+",
        subtract: "-",
        multiply: "*",
        divide: "/"
    };

    if (operation === "average") {
        return `Average of ${a} and ${b} = ${result}`;
    }

    return `${a} ${symbols[operation]} ${b} = ${result}`;
}

module.exports = formatResult;