/*
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/

let numArr =[]
let num = 1
while(numArr.length<9)

{ 
     
    numArr.push(num)
    num++
}
// console.log(numArr);
for (let i=0; i < numArr.length ; i++) {
    if (numArr[i]==1){console.log(numArr[i]+`st`)}
    else if (numArr[i]==2){console.log(numArr[i]+`nd`);}
   else if (numArr[i]==3){console.log(numArr[i]+`rd`);}
    else {console.log(numArr[i]+`th`)
    }

}