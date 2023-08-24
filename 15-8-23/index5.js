"use strict";
//  - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorialNum(num) {
    let Result = 1;
    while (num != 0) {
        Result *= num;
        num--;
    }
    console.log(`Factorial:`, Result);
    return Result;
}
const Output = factorialNum(5);
