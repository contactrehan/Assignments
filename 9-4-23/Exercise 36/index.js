"use strict";
/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
console.log(`T-Shirt Function:`);
let make_shirt = (size, message) => {
    console.log(`\nYour T-Shirt size is ${size} and "${message}" is printed on the T-Shirt as a message.`);
};
make_shirt("Large", "Pakistan can CODE");
