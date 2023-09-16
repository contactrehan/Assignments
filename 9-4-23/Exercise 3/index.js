"use strict";
// Exercise 3
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "my name is Rehan.";
var personNameinLowerCase = personName.toLowerCase(); //function for lower case conversion
console.log(personNameinLowerCase);
var personNameinUpperCase = personName.toUpperCase(); //function for upper case conversion
console.log(personNameinUpperCase);
// //  now for the title case
let titleCased = personName.toLowerCase().split(" ");
let titled = titleCased.map((elem) => { return (elem[0].toUpperCase() + elem.slice(1)); });
console.log(titled.join(" "));
