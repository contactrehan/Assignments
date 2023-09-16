"use strict";
//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
// var arrayRemovedNeg:number[]=[]
function arrayNegRemove(array) {
    for (let i = 0; i < array.length; i++) { //using for loop with conditon that i<5 in this case from function
        if (array[i] < 0) {
            array.splice(i, 1); //removing the array element if its less than 0 which is negative
            i--;
        }
    }
    console.log(`Array after Removing negative Numbers:${array}`);
}
arrayNegRemove([1, 5, -7, 8, -9, -69, 2, -69999999, 7, -3, -70, -68, -72]);
