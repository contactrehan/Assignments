// Given an array of strings ["apple", "banana", "cherry", "date", "grape"],
//  use the filter method to create a new array containing only the fruits with more than 5 characters.
let fruits:string[]=["apple","banana","cherry","data","grapes"]
let onlFruits =fruits.filter((f)=>{
    return f.length>=5
})
console.log(onlFruits)