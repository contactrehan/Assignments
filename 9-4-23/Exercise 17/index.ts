/* Exercise 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message 
saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that person letting them know 
you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program.
*/
var guestList = ["Quaid-E-Azam","Emma Watson","Elon Musk","Akhtar Lawa"]
var messageGuest = "How about sharing a delicious meal together at my place?"
for (let i=0;i<guestList.length ;++i) 
{
    console.log(`\n ${guestList[i]} ${messageGuest}`);
    
}
console.log(`\n \nOh, looks like ${guestList[1]} couldn't make it to the Dinner.`);

// updating list
guestList.splice(1 ,1,"Bill Gates"); 
var newMessage =guestList.map((g)=>{
    return console.log(`\n ${g} Join me for dinner at my place - good food and great company guaranteed!`)}).join(" ")
console.log(newMessage) // consoling new sets of invitations
 
// managing a bigger table
console.log(`\n People it is to inform you guys that there are more people joining us for dinner.`)
guestList.splice(0,0,"Abu Huraira")
// now to add the person in the middle of the array

var index =Math.round(guestList.length/2);
guestList.splice(index,0,"Allama Iqbal");

// now adding person name in the last of the array
guestList.push("Mark Zuckerberg");
for (let i=0;i<guestList.length;i++){
console.log(`\n \n${guestList[i]},I would be honored if you could join me for a formal dinner?`);
}

// Add a new line that prints a message 
// saying that you can invite only two people for dinner.
console.log(`\n Sorry to Inform, but we can only invite 2 people for dinner`);


// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know 
// you’re sorry you can’t invite them to dinner.

guestList.lastIndexOf("")





