"use strict";
/*
They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.
*/
function createNinja(name, favouritejutsu, haircolour) {
    return { name, favouritejutsu, haircolour };
}
let shikamaro = createNinja("Shikamaro", "Shadow possesion", "black");
// manualy creating objects
let naruto = { name: "Naruto", favouritejutsu: "Shadow Clone Jutsu", haircolour: "Orange" };
let kakashi = { name: "Kakashi", favouritejutsu: "Chidori", haircolour: "White" };
let sasuke = { name: "Sasuke", favouritejutsu: "Chidori", haircolour: "Black" };
let ninjaArray = [naruto, kakashi, sasuke, shikamaro];
console.log(ninjaArray);
