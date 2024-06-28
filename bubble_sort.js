/*
    GLORY BE TO GOD,
    Bubble Sort Program,
    By Israel Mafabi Emmanuel
*/

// our sample jumbled numbers array
let jumbled_numbers = [5, 6, 1, 3, 4, 2];

// function for arranging the array and logging it
function arrange_array(my_arr = []) {
    my_arr.sort(); // normal, a - b
    for(i = 0; i < my_arr.length; i++) {
        console.log(my_arr[i]);
    }

    console.log(`sorted_numbers = (${my_arr})`);
}

arrange_array(jumbled_numbers);