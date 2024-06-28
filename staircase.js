/*
    GLORY BE TO GOD,
    Printing a staircase - Program,
    By Israel Mafabi Emmanuel
*/

const staircase = [1, 2, 3, 4, 5, 6, 7];
let step = '#';

function draw_staircase(arr = []) {
    for(i = 0; i < arr.length; i++) {
        step = '#';
        // selecting the item - i
        for(j = 0; j < i; j++) {
            if(j <= i) {
                step += '#';
            }
        }
        console.log(step);
    }
}

draw_staircase(staircase);