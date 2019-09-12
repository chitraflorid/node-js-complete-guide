// play.js

/*
 ********************************************************************
 *                                                                  *
 * This script is a playground to explore some core JavaScript      *
 * features in Lecture 11.                                          *
 *                                                                  *
 ********************************************************************
*/

// Robert Hieger
// August 3, 2019

var name = 'Bobby';         // String Variable

var age = 57;               // Number Variable

var hasHobbies = false;     // Boolean Variable

// Output name to console:

console.log( '\n' + name + '\n');

function summarizeUser(userName, userAge, userHasHobby)  {

    return (

        'Name is ' + userName +
        ', age is ' + userAge +
        '. User Has Hobbies: ' + userHasHobby + '\n'

    );

}   // end summarizeUser()

console.log( summarizeUser(name, age, hasHobbies) );
