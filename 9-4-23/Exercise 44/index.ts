/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/
console.log(`Sandwiches:`);
console.log("\n");

function createSandwich(items:string[])
{
   
    console.log(`The Items on the Sandwich are:`);
    for (let i =0 ;i<items.length;i++)
    {
         console.log(items[i]);
    }
   }   

createSandwich(["bread","cheese"]);

console.log("\n");

createSandwich(["tomato","cheese"]);


console.log("\n");

createSandwich(["onion","chicken"])
