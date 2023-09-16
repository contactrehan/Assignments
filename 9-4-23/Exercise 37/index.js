"use strict";
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
console.log(`Lare Shirts Function:`);
let make_newshirt = (size = "Large", message = "I love Typescript") => {
    console.log(`\nYour T-Shirt size is ${size} and "${message}" is printed on the T-Shirt as a message.`);
};
//making large shirt
make_newshirt();
//making medium shirt
make_newshirt("Medium");
//making random size shirt
make_newshirt("XL", "Pakistan can CODE");
