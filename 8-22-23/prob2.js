"use strict";
//  Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
var array = [1, 2, 4, 5, 6, 9];
var evenArr = [];
for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        evenArr.push(array[i]);
    }
}
console.log(evenArr);
