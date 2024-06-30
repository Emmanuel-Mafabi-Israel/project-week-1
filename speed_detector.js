/*
    GLORY BE TO GOD,
    Speed Detector,
    By Israel Mafabi Emmanuel
*/

const console_io = require('./console_io')
const base_speed = 70.0; // reference speed, 70Km/h

function detect_speed(vehicle_speed = 70.0) {
    // giving it a default value of 70,
    // if there's no input it should point to 
    // 0 speed change -> [vehicle_speed - base_speed]
    let speed_change = vehicle_speed - base_speed;
    let demerit_points = speed_change/5;
    if(demerit_points <= 0) {
        // the vehicle's speed is less than or equal to the 
        // reference speed.
        if(demerit_points === 0) {
            return ` No demerit Points given, Speed equals limit: Points: ${demerit_points}.`;
        } else {
            return ` No demerit Points given, Speed is below limit: Keep your license.`;
        }
    } else if(demerit_points > 12) {
        // we should error out,
        // the owner's license is rendered
        // invalid.
        return ` License Suspended: Points: ${demerit_points}.`;
    } else {
        // return the points to the user!
        return ` Points assigned: ${demerit_points}.`;
    }
}

// we prompt the user for input
console_io.console_input.question(` :Vehicle's Speed: `, (speed) => {
    // but before proceeding further, we need to evaluate
    // the input the user presents -> is it a numerical value
    // if not - we need to error out!
    if(isNaN(speed)) {
        console.log(` Invalid entry given. Error - check the vehicle speed value: ${vehicle_speed}.`);
    } else {
        console.log(` Your Output: ${detect_speed(speed)}`);
    }
    console_io.console_input.close();
});