
// Exercise 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friendsName:string[]=["Ali","Hamza","Taha","Abdullah","Hafeez"]
for (let i=0;i<friendsName.length;i++)
{
    var message = "Let's go eat something"
    console.log(`${message} ${friendsName[i]}`)
}
