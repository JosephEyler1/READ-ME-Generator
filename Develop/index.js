// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your Project.",
    },
    {
        type: "input",
        name: "description", // Fixed typo from "descritpion" to "description"
        message: "Please describe the purpose and functionality of this Project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please choose a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
    },
    {
        type: "input",
        name: "usage",
        message: "Describe the usage.",
    },
    {
        type: "input",
        name: "creator",
        message: "Write your GitHub username.",
    },
    {
        type: "input",
        name: "name",
        message: "Write your full name.",
    },
    {
        type: "input",
        name: "email",
        message: "Write your email.",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GitHub usernames)",
    },
    {
        type: "input",
        name: "test",
        message: "Provide a walkthrough of tests if applicable.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
