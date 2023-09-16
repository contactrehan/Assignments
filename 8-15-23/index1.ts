//  Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function arrayFunction(arrayFunction:number[]=[10,20,30,40,50] ) 
{
  arrayFunction.splice(2,0,25)  //adding number 25 in between 20 and 30 without removing any index
  return arrayFunction  
}
var modifiedarray =arrayFunction() 
console.log(`Modified Array is :`,modifiedarray)