/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/


console.log(`Favourite Fruit: \n`);

const favoriteFruits = ["bananas", "strawberries", "mangoes"];

if (favoriteFruits.includes("bananas")) {
    console.log("You really like bananas!");
}

if (favoriteFruits.includes("strawberries")) {
    console.log("You really like strawberries!");
}

if (favoriteFruits.includes("mangoes")) {
    console.log("You really like mangoes!");
}

if (favoriteFruits.includes("apples")) {
    console.log("You really like apples!");
} 

if (favoriteFruits.includes("grapes")) {
    console.log("You really like grapes!");
} 

