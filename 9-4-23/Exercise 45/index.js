"use strict";
/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctl
*/
console.log(`Cars:`);
function createCar(manufacturer, modelName) {
    const carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    return carInfo;
}
// Call the function
const car = createCar("Honda", "Civic");
// consoling
console.log(car);
