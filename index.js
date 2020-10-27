// These are the importing dependencies
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// Internal modules
const generateMarkdown = require("./utils/generateMarkdown");


// This line will create an array of ques for user
const ques = [{

        //GITHUB USERNAME SECTION
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        default: "Team-AG",
        // validate if username was inputted correctly
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Username not valid!");
            }
            return true;
        }
    },

    {
        //GITHUB SECTION
        type: "input",
        name: "repo",
        message: "What is the name of the GitHub repo?",
        default: "My first good README",
        // validate if github was inputted correctly
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("GitHub Repo not validated!");
            }
            return true;
        }
    },

    {
        //EMAIL SECTION
        type: "input",
        name: "email",
        message: "What is your email address?",
        default: "andylgunter@gmail.com",
        // validate if email was inputted correctly
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Email address not valid!");
            }
            return true;
        }
    },


    {
        //WHAT IS THE COMMAND TO INSTALL DEPENDENCIES
        type: "input",
        name: "dependencies",
        message: "What command installs dependencies",
        default: "npm install + created variole name",
        // validate if dependencies was inputted correctly
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Not a valid command");
            }
            return true;
        }
    },


    {
        //PROJECT TITLE
        type: "input",
        name: "Title",
        message: "What is the name of this project?",
    },

    {
        //PROJECT DESCRIPTION
        type: "input",
        name: "description",
        message: "Describe the project?",
        default: "Project Description",
    },


    {
        //INSTALLATION SECTION
        type: 'input',
        name: 'installation',
        message: "If possible, Please describe all the steps required to properly install the project for which is required for the installation section.",
    },

    {
        //USAGE SECTION
        type: 'input',
        name: 'usage',
        message: "Please provide all the instructions plus all possible examples of the project in use for under the Usage section.",
    },

    {
        //LICENSE SECTION
        type: "list",
        name: "license",
        message: "What license are you using to license repo?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "other", "none"]
    },

    {
        //CONTRIBUTING SECTION
        type: "list",
        name: "CONTRIBUTING",
        message: "If possible, Please provide your guidelines on how other developers can contribute to the project.",
    },

    {
        //TEST SECTION
        type: "input",
        name: "test",
        message: "If possible, Please provide all tests written methods for the application then provide all examples on how to run them properly.",
    },


];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


// This line will make a function that makes write README files
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data);
}

// This line cause the function to initialize the program
function init() {

    // then make the function
    inquirer.prompt(qSection)
        .then((answers) => {
            console.log("Success!! Generating README...");
            writeToFile("README.md", generateMarkdown({
                ...answers
            }))
        });
};


init();