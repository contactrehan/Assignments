/*
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/

console.log(`Stage of Life:`);
let PersonAge = 16
if (PersonAge < 2) {
    console.log("Baby");
    } else if ((PersonAge >= 2 && PersonAge <= 4)) {
        console.log('Toddler');
        }else if((PersonAge > 4 )&&(PersonAge<=13)){
            console.log ('Kid') ;}
        else if((PersonAge > 13 )&&(PersonAge<=20)){
            console.log ('Teenager') ;}
        else if((PersonAge >= 20 )&&(PersonAge<65)){
            console.log ('Adult') ;}
        else if(PersonAge >= 65){
            console.log ('Elder') ;}
            

