/* //importing dependencies
const axios = require("axios");
// setting up api call via axios
const api = {
    getUser(username) {
        return axios.get(
                `https://api.github.com/user/${username}?client_id=${process.env.CLIENT_ID}&clinet_secret=${process.env.Client_secret}`
            )
            .catch(err => {
                console.log("username invalid")
                process.exit(9);
            })
    }
};
module.exports = api; */
/*

// importing dependencies
const questions = [
];


// function to write readme filenames
function writeToFile(fileName, data) {

}


// function to initialize program
function init() {
    
}

// function call to initialize program
init();*/

// project description 


/*
type: "list",
    name: "license",
        message: "what license are you using to license repo?"
choices: ["MIT"] */