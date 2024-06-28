/*
    GLORY BE TO GOD,
    Student's Grade Calculator,
    By Israel Mafabi Emmanuel
*/

const console_io = require('./console_io');

function determine_grade(_marks_ = 100) {
    // default value = 100 A
    if(isNaN(_marks_)) {
        return ` Error: Expected a numerical value. ${_marks_}`;
    } else if(_marks_ > 79) {
        if(_marks_ > 100) {
            return ` Error: Invalid marks entry!, maximum - 100. ${_marks_}`;
        } else {
            return ` Result: A`;
        }
    } else if(_marks_ <= 79 && _marks_ >= 60) {
        return ` Result: B`;
    } else if(_marks_ <= 59 && _marks_ >= 49) {
        return ` Result: C`;
    } else if(_marks_ < 49 && _marks_ >= 40) {
        return ` Result: D`;
    } else {
        if(_marks_ < 40 && _marks_ >= 0) {
            return ` Result: E`;
        } else {
            return ` Error: Invalid marks entry!, minimum - 0. ${_marks_}`;
        }
    }
}

// we prompt the user for input
console_io.console_input.question(` :Student's Marks: `, (marks) => {
    console.log(determine_grade(marks));
    console_io.console_input.close();
});