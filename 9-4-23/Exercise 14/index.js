"use strict";
// Exercise 14\
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three 
// people you’d like to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.
var guestList = ["Quaid-E-Azam", "Emma Watson", "Elon Musk", "Akhtar Lawa"];
var messageGuest = "How about sharing a delicious meal together at my place?";
for (let i = 0; i < guestList.length; ++i) {
    console.log(`\n ${guestList[i]} ${messageGuest}`);
}
