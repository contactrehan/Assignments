// Exercise 3
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "my name is Rehan."
var personNameinLowerCase:string = personName.toLowerCase();  //function for lower case conversion
console.log(personNameinLowerCase)
var personNameinUpperCase:string = personName.toUpperCase();  //function for upper case conversion
console.log(personNameinUpperCase);
// //  now for the title case
let titleCased = personName.toLowerCase().split(" ")
let titled = titleCased.map((elem)=>
{ return (elem[0].toUpperCase() + elem.slice(1))})
console.log(titled.join(" "));
