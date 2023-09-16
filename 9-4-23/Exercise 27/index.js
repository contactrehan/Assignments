"use strict";
/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien
*/
let __line = "_";
//version 1
var alienColour1 = "green";
if (alienColour1 == "green") {
    console.log(`The player just earned 5 points.`);
}
else if (alienColour1 == "yellow") {
    console.log(`The player just earned 10 points.`);
}
else if (alienColour1 == "red") {
    console.log(`The player just earned 15 points.`);
}
console.log(`${__line.repeat(60)}`);
//version 2
var alienColour1 = "yellow";
if (alienColour1 == "green") {
    console.log(`The player just earned 5 points.`);
}
else if (alienColour1 == "yellow") {
    console.log(`The player just earned 10 points.`);
}
else if (alienColour1 == "red") {
    console.log(`The player just earned 15 points.`);
}
console.log(`${__line.repeat(60)}`);
//version 1
var alienColour1 = "red";
if (alienColour1 == "green") {
    console.log(`The player just earned 5 points.`);
}
else if (alienColour1 == "yellow") {
    console.log(`The player just earned 10 points.`);
}
else if (alienColour1 == "red") {
    console.log(`The player just earned 15 points.`);
}
console.log(`${__line.repeat(60)}`);
