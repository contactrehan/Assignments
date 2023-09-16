"use strict";
/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/
const animals = ["Dog", "Cat", "Rabbit"];
// Loop to print the names of each animal
console.log("Animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Modifing loop tp pring statement about animals
console.log(`\n About these Animals:`);
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
// Print the common characteristic in these animals
const commonCharacteristic = "They are friendly in nature and make great pets.";
console.log(`\n${commonCharacteristic}`);
// Personal opinion
console.log("\n I think dogs are more loyal");
