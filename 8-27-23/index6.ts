// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to 
// create a new array containing the doubled values of odd numbers.

let Array2:number []= [3,6,9,12,15,18]
let newArray= Array2.filter((value)=>{   
    return value%2!=0
}).map((value)=>{
    return (value*2)
})
console.log(newArray)
