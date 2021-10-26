//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords (dog_strings, dog_names) {
    for (let i = 0; i < dog_names.length; i++)
        if (dog_string.indexOf(dog_names) != -1) {
            return "Matched Dog Name"
        }
        else {
            return "No Matches"
        }
    }

//Call method here with parameters




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every value that's double is over 50.


*/

given_arr == [13, 22, 26, 40, 1, 10]

function removeOver50 (arr) {
    for(i = 0; i < arr.length; i++) {
        if (arr.length * 2 > 50) {
            arr.remove
        }
    }
}

//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...


// Code Wars

// Even or Odd

function even_or_odd(x) {
    if (x % 2 === 0) {
        return("Even");
    }
    else {
        return("Odd");
    }
}

// Return Negative

function make_negative(x) {
    if (x < 0) {
        return x
    }
    else if (x > 0) {
        return -x
    }
    else {
        return 0
    }
}