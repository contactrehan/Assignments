"use strict";
//Develop a program that calculates and prints the sum of the first 10 even numbers using a for loop.
let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) //to get only even numbers
     {
        sum += i;
    }
}
console.log(sum);
