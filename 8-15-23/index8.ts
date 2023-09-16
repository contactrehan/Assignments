//  - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
var tempInCArray :number[]= [38, 40, 41, 42];
var tempInFArray :number[] =[];
for(let i: number = 0;i<tempInCArray.length;++i) {
    tempInFArray[i]=(9/5)*tempInCArray[i]+32 ;

}
console.log("Temperature in Fahrenheit is "+(tempInFArray));

