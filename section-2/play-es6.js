// play-es6.js

/*
 ********************************************************************
 *                                                                  *
 * This script is a playground to explore some differences between  *
 * ECMAScript 5 and ECMAScript 6.                                   *
 *                                                                  *
 ********************************************************************
*/

// Robert Hieger
// August 3, 2019

const name = 'Bobby';        // String Constant

let age = 57;               // Number Variable

const hasHobbies = false;  // Boolean Constant

// name = 'Robert';           // This will throw error as
                           // constants are immutable.

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
