// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//  use the map and filter methods together to create a new array containing the squares of even numbers.
let numbers =[1,2,3,4,5,6,7,8,9,10]
// let EvenNumbers= numbers.filter(e=>{
//     return e%2==0;
// })
// let squareOfEvenNumbers=EvenNumbers.map((square)=>{
//     return square*square
// })
// console.log(squareOfEvenNumbers)

let squareOfEvenNumbers= numbers.filter((f)=>{
    return f %2 ==0 ;}).map ((g)=> {return g *g});
console.log(squareOfEvenNumbers)