"use strict";
/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
*/
console.log(`City Function:`);
let describe_city = (city, country = "Pakistan") => {
    console.log(`\n ${city} is a city of ${country}.`);
};
// 1st city
describe_city("Karachi");
//2nd city
describe_city("Faisalabad");
//3rd city with different country
describe_city('Tokyo', "Japan");
//successsssss ahhh i feel so happy when my program works 
