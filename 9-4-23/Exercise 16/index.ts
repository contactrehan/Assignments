// Exercise 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end 
// of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 

// • Print a new set of invitation messages, one for each person in your list.
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

