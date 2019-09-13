// play-es6-arrays.js

/*
 ********************************************************************
 *                                                                  *
 * This script is a playground in Lecture 15, which explores        *
 * arrays and array methods.                                        *
 *                                                                  *
 ********************************************************************
*/

// Robert Hieger
// August 3, 2019

// Declare  an array:

/*

const hobbies = [
    'Sports',
    'Cooking',
    1,
    true,
    {  }
];

*/

// NOTE: Arrays are not restricted to a single type. The one above contains 2 Strings,
//       1 Number, 1 Boolean and one empty Object type.

//       For our purposes in this playground, we will use an array that is restricted
//       to String type only, as refactored below:

const hobbies = ['Sports', 'Cooking'];

console.log('\n', hobbies, '\n');

// EXPLORE METHODS EXPOSED BY ARRAY OBJECT:

// Output hobbies to console using for...of loop:

console.log('OUTPUT above hobbies array using for...of loop:\n');

for (let hobby of hobbies) {

    console.log(hobby);

}   // end for...of

// Message that loop is finished:

console.log('\nDone.\n');

// Map Method:

console.log('MAPPED OUTPUT of hobbies array:\n')

console.log( hobbies.map(hobby => 'Hobby: ' + hobby) );

console.log('\n');

console.log('Here is the unmapped array intact:\n');

console.log(hobbies, '\n');
