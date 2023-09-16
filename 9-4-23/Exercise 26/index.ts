/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block
*/
let _line = "_"


//version 1
var alienColour = "green";
if(alienColour=="green")
{
    console.log(`The player just earned 5 points.`);
    
}
else{console.log(`The player just earned 10 points.`);
}


console.log(`${_line.repeat(60)}`);


//version 2
var alien_Colour = "red";
if(alien_Colour=="green")
{
    console.log(`The player just earned 5 points.`);
    
}
else{console.log(`The player just earned 10 points.`);
}


console.log(`${_line.repeat(60)}`);
