// Write a program that uses a function to find the largest element in an array of number
function largestArrElement(numArr:number[])
{
  let k:number = 0
  for (let i=0;i<numArr.length;i++)
  {
    if (numArr[i]>k) 
    {
        k = numArr[i] //by doing that the previos value of numArr[i] becomes current k value and so on the comparison continues
    }
  }
  return console.log(`The largest number is ${k}`)
}
largestArrElement([1,23456789,-1,69999999999]);