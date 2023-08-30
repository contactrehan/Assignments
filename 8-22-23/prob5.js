"use strict";
//  Develop a program that reads a list of grades and uses the splice 
// method to remove failing grades (below 50) from the array.
var arrayGrades = [40, 35, 50, 69, 78, 64, 83];
var removeGrade = [];
for (let i = 0; i < arrayGrades.length; i++) {
    if (arrayGrades[i] < 50) {
        arrayGrades.splice(i, 1);
    }
    removeGrade.push(arrayGrades[i]);
}
console.log(`The Remaining Grades after removing:${removeGrade}`);
