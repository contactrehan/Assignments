/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
console.log(`Great Magicians:`);

const __magicians = ["Ali","Saabu","Hamza","Uncle Majboor"]
function __show_magicians(__magicians:string[])
{
    for (let i=0;i<__magicians.length;++i)
    {
        console.log(__magicians[i]);
        
    }
}

function _make_great(__magicians:string[])
{
    for (let i=0;i<__magicians.length;i++)
    {
        __magicians[i]="The Great "+__magicians[i]
    }return __magicians
} 

//making a copy of array magicians
var copy_magicians = [...__magicians]

//using great function on the copy
_make_great(copy_magicians)
// now calling both arrays

console.log(`Array with the orginal names:`);

__show_magicians(__magicians)

console.log(`\n Array with the Greart included:`);

__show_magicians(copy_magicians)
