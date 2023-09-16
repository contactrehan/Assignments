"use strict";
/*
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/
let make_album = (artistName, albumTitle, tracksNO) => {
    if (tracksNO !== undefined) {
        return {
            artistName,
            albumTitle,
            tracksNO
        };
    }
    else {
        return {
            artistName,
            albumTitle
        };
    }
};
//making different albums
let album1 = make_album("Arijit Singh", "Love");
let album2 = make_album("Atif Aslam", "Suqoon");
let album3 = make_album("Rahat Fateh Ali Khan", "Zaroori tha", 6);
// Consoling
console.log(album1);
console.log(album2);
console.log(album3);
