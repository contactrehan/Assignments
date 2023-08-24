"use strict";
//  - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
let sum = 0;
function sumArray(array) {
    let i = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
    console.log(sum);
    return sum;
}
sumArray([2, 3, 5]);
