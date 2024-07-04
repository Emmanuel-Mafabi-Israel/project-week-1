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
    if( _marks_ <= 100.0 && _marks_ > 80.0) {
        return ` Result: A`;
    } else if(_marks_ <= 80.0 && _marks_ >= 60.0) {
        return ` Result: B`;
    } else if(_marks_ < 60.0 && _marks_ > 50.0) {
        return ` Result: C`;
    } else if(_marks_ <= 50.0 && _marks_ >= 40.0 ) {
        return ` Result: D`;
    } else if(_marks_ < 40.0 && _marks_ >= 0) {
        return ` Result: E`;
    } else {
        return ` Error: Value Out of Range!, marks range: (0 - 100). issued value: ${_marks_}`;
    }
}

// we prompt the user for input - function call for prompting user for 
// input via the console interface
console_io.console_input.question(` :Student's Marks: `, (marks) => {
    if(isNaN(marks)) {
        // we check if our marks is a valid number
        // A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
        console.log(` Error: Expected a numerical value. Unknown value: ${marks}`);
    } else {
        let student_marks = parseFloat(marks);
        console.log(determine_grade(student_marks));
    }
    console_io.console_input.close();
});