/*
    GLORY BE TO GOD,
    Student's Grade Calculator,
    By Israel Mafabi Emmanuel
*/

// our dependencies
const console_io = require('./console_io');

// function for determining the student's grade
function determine_grade(_marks_ = 100) {
    // default value = 100 A
    if(isNaN(_marks_)) {
        // we check if our marks is a valid number
        return ` Error: Expected a numerical value. ${_marks_}`;
    } else if( _marks_ <= 100 && _marks_ > 79) {
        return ` Result: A`;
    } else if(_marks_ <= 79 && _marks_ >= 60) {
        return ` Result: B`;
    } else if(_marks_ <= 59 && _marks_ >= 49) {
        return ` Result: C`;
    } else if(_marks_ < 49 && _marks_ >= 40) {
        return ` Result: D`;
    } else if(_marks_ < 40 && _marks_ >= 0) {
        return ` Result: E`;
    } else {
        return ` Error: Value Out of Range!, marks range: (0 - 100). issued value: ${_marks_}`;
    }
}

// we prompt the user for input - function call for prompting user for 
// input via the console interface
console_io.console_input.question(` :Student's Marks: `, (marks) => {
    console.log(determine_grade(marks));
    console_io.console_input.close();
});