"use strict";
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to 
// create a new array containing the doubled values of odd numbers.
let Array2 = [3, 6, 9, 12, 15, 18];
let newArr2 = Array2.filter((v) => {
    return v % 2 != 0;
}).map((v) => {
    return v * 2;
});
console.log(newArr2);
