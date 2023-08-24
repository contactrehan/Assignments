// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
var array:number[]= [1,2,4,5,6,9]
var oddArr:number[]= [];


for(var i=0;i<array.length;i++)
{
if (array[i]%2!=0)
{
    
   oddArr.push(array[i])
   
}
}
console.log(oddArr)
