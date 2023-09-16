/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
let line ="_"
//1 Tests for equality and inequality with strings
console.log(`1- Test for equality and inequality with strings`);


//True Result
console.log('\n')
console.log('Test 1:'); 
var str = "TEST"
if (str == "TEST"){console.log(`Test Passed`)}
else {console.log(`Test Failed`)}

//False result
console.log('\n') 
console.log("Test 2:");
var str2 = 'test'
if(str2 != 'test'){
    console.log(`Test passed`)
    } else{
        console.log(`Test failed`);}
        console.log(`\n${line.repeat(60)}`);

//2 Tests using the lower case function

//true result
console.log("\n")   
console.log("2- Tests using the lower case function");
let text = `\nThis Is A TEST`
console.log(text);

console.log(`\ni predict the upper text will convert to lowercase`)
if(text.length>10)
{let lowerCasetext = text.toLowerCase();
    console.log(lowerCasetext);
}

    
   
    console.log(`\n${line.repeat(60)}`);
    


//false result

let _text = `\nThis Is A TEST`
console.log(text);

console.log(`\ni predict the upper text will not convert to lowercase`)
if(_text.length<10)
{let lowerCasetext = text.toLowerCase();
    console.log(lowerCasetext);}
else{console.log(_text)}

console.log(`\n${line.repeat(60)}`);


//3- Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to,"and" and "or" operators

console.log(`\n 3- Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to,"and" and "or" operators`);
console.log(`\n`);

let marks = 98
console.log(`Marks:${marks}`,`\nI predict these marks will get A grade`);

if (marks>=90){console.log(`\nA Grade`);
}
else if (marks>=80 && marks<= 90 ){console.log(`\nB Grade`);}
else if (marks>=70 && marks<= 80 ){console.log(`\nC Grade`);}
else if (marks>=60 && marks<= 70 ){console.log(`\nC Grade`);}
else {console.log(`\nF Grade`);}


console.log(`\n${line.repeat(60)}`);


// Test whether an item is in a array, Test whether an item is not in a array

console.log(`\nTest whether an item is in a array, Test whether an item is not in a array`);

console.log(`i predict it does exist and the program will work smoothly`);


let sampleArr = ["cpu","ram","hdd","ssd"]
let item = "cpu"
sampleArr.forEach((i)=>
{
    if(i==item)
    {console.log(`the item ${item} exist in the array`)}
    
})

