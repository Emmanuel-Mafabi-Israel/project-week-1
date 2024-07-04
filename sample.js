// Prompt user for input
// prompt-sync
// readline-sync, readline

const prompt = require('prompt-sync')();

function studentGradeGenerator() {
    let scores = Number(prompt("Enter students scores (between 0 and 100): "));
    if(isNaN(scores) || scores < 0 || scores > 100) {
        console.log("Invalid Input");
    } else if(scores <= 100 && scores > 79) {
        console.log("You got an A!");
    } else if(scores <= 79 && scores > 69) {
        console.log("You got a B!");
    } else if(scores <= 69 && scores > 59) {
        console.log("You got a C!");
    } else if(scores <= 59 && scores > 49) {
        console.log("You got a D!");
    } else {
        console.log("You got an E!");
    }
}

studentGradeGenerator();