"use strict";
/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
// If the list is empty, print the message We need to find some users!
const user__names = ["admin", "Ahmed", "Ultimo", "Ali", "Doha"];
if (user__names.length === 0) {
    console.log("\nWe need to find some users!");
}
else {
    user__names.forEach((user) => {
        if (user === "admin") {
            console.log("\nHello admin, would you like to see a status report?");
        }
        else {
            console.log(`\nHello ${user}, thank you for logging in again.`);
        }
    });
}
// Removing all usernames from the array
user__names.length = 0;
// Checking again
if (user__names.length === 0) {
    console.log("\nWe need to find some users!");
}
