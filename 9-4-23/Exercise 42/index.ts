/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
*/


console.log(`Great Magicians:`);

const _magicians = ["Ali","Saabu","Hamza","Uncle Majboor"]
function _show_magicians(_magicians:string[])
{
    for (let i=0;i<_magicians.length;++i)
    {
        console.log(_magicians[i]);
        
    }
}

// making new function
function make_great(_magicians:string[])
{
    for (let i=0;i<_magicians.length;i++)
    {
        _magicians[i]="The Great "+_magicians[i]
    }return _magicians
} 
// consoling result
_show_magicians(make_great(_magicians))