// play-es6.js

/*
 ********************************************************************
 *                                                                  *
 * This script is a playground in Lecture 13, which explores        *
 * arrow functions.                                                 *
 *                                                                  *
 ********************************************************************
*/

// Robert Hieger
// August 3, 2019

const name = 'Bobby';        // String Constant

let age = 57;               // Number Variable

const hasHobbies = false;  // Boolean Constant

// Output name to console:

console.log( '\n' + name + '\n');

// Function below commented out to illustrate how it may be
// refactored as an ECMAScript 6 arrow function.

/*

function summarizeUser(userName, userAge, userHasHobby)  {

    return (

        'Name is ' + userName +
        ', age is ' + userAge +
        '. User Has Hobbies: ' + userHasHobby + '\n'

    );

}   // end summarizeUser()

*/

const summarizeUser = (userName, userAge, userHasHobby) =>  {

    return (

        'Name is ' + userName +
        ', age is ' + userAge +
        '. User has hobbies: ' + userHasHobby + '\n'

    );

};   // end summarizeUser()

// NOTE: A key advantage of arrow functions is that they improve upon
//       an anomalous behavior in ECMAScript 5 regarding the scoping
//       of variables  and the this keyword.
//
//       For further information on this, consult Schwarzmüller tutorial
//       at https://academind.com/learn/javascript/this-keyword-function-references/.

console.log( summarizeUser(name, age, hasHobbies) );

// DEMO OF ALTERNATE SYNTAXES FOR ARROW FUNCTIONS:

// Commented out below to allow for refactored code.

/*

const add = (a, b) =>  {

    return a + b;

};

*/

// NOTE: The refactoring below works ONLY when there is only one line of code
//       in the function code block. Notice the required deletion of the
//       return keyword.

const add = (a, b) => a + b;

// Output result of add to console:

console.log( add(1, 2) + '\n' );

const addOne = a =>  a + 1;

//  Output result of addOne to console:

console.log( addOne(1) + '\n' );

// ANOTHER SYNTAX FOR ARROW FUNCTION WITH NO ARGUMENTS:

const addRandom = () => 1 + 2;

// Output result of addRandom to console:

console.log( addRandom() + '\n' );
