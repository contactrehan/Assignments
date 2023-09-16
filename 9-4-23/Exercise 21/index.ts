/*
They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.
*/

type ninja={name:string,favouritejutsu:string,haircolour:string} // creating using function because why not
function createNinja(name:string,favouritejutsu:string,haircolour:string){
    return {name,favouritejutsu,haircolour}

}
let shikamaro = createNinja("Shikamaro","Shadow possesion","black")

// manualy creating objects
let naruto :ninja ={name:"Naruto",favouritejutsu:"Shadow Clone Jutsu",haircolour:"Orange"}
let kakashi :ninja ={name:"Kakashi",favouritejutsu:"Chidori",haircolour:"White"}
let sasuke :ninja ={name:"Sasuke",favouritejutsu:"Chidori",haircolour:"Black"}

let ninjaArray : ninja[]=[naruto,kakashi,sasuke,shikamaro]

console.log(ninjaArray);
