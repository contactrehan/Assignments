// Exercise 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest 
// who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
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

