// Name: Maricar Untalan Vinluan
// Section: IV-BSIT A
// Activity: N3 - File Manager
// Date: November 26, 2026

const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "files");

const command = process.argv[2];
const filename = process.argv[3];
const content = process.argv.slice(4).join(" ");

console.log("=== FILE MANAGER ===");
console.log("Name: Maricar Untalan Vinluan");
console.log("Section: IV-BSIT A");

try {
    if (command === "list") {
        const files = fs.readdirSync(folder);

        console.log("\nAvailable Files:");

        for (const file of files) {
            const filePath = path.join(folder, file);

            console.log("\nFull Path: " + filePath);
            console.log("File Name: " + path.basename(filePath));
            console.log("Extension: " + path.extname(filePath));
            console.log("Content: " + fs.readFileSync(filePath, "utf8"));
        }

    } else {
        if (!filename || path.basename(filename) !== filename) {
            throw new Error("Please enter a valid filename.");
        }

        const filePath = path.join(folder, filename);

        switch (command) {
            case "create":
                fs.writeFileSync(filePath, content, { flag: "wx" });
                console.log("File created: " + filename);
                break;

            case "read":
                console.log("Content: " + fs.readFileSync(filePath, "utf8"));
                break;

            case "update":
                if (!fs.existsSync(filePath)) {
                    throw new Error("File does not exist.");
                }
                fs.appendFileSync(filePath, "\n" + content);
                console.log("File updated: " + filename);
                break;

            case "delete":
                fs.unlinkSync(filePath);
                console.log("File deleted: " + filename);
                break;

            default:
                console.log("Error: Unknown command.");
        }
    }

} catch (error) {
    if (error.code === "ENOENT") {
        console.log("Error: File does not exist.");
    } else if (error.code === "EEXIST") {
        console.log("Error: File already exists.");
    } else {
        console.log("Error: " + error.message);
    }
}