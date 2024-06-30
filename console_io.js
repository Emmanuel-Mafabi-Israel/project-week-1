/*
    GLORY BE TO GOD,
    Console Input Output - Utilizing the readline library,
    By Israel Mafabi Emmanuel
*/

const readline = require('node:readline');

// for console interfacing, getting input from user
const console_input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = {
    // For exposing our depended functions, methods and objects
    console_input
};