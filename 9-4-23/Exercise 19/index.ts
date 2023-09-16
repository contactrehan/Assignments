// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

var guestList = ["Quaid-E-Azam","Emma Watson","Elon Musk","Akhtar Lawa"]
var messageGuest = "How about sharing a delicious meal together at my place?"
for (let i=0;i<guestList.length ;++i) 
{
    console.log(`\n ${guestList[i]} ${messageGuest}`);
    
}
console.log(`\n We are inviting ${guestList.length} guests today!`);
