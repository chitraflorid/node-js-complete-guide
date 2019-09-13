// play-es6-spread-reset.js

/*
 ********************************************************************
 *                                                                  *
 * This script is a playground in Lecture 17, which explores the    *
 * spread and rest operators exposed by objects and arrays.         *
 *                                                                  *
 ********************************************************************
*/

// Robert Hieger
// August 4, 2019

// Declare an object:

const person = {

    name: 'Bobby',
    age: 57

};

// Declare  an array:

const hobbies = ['Sports', 'Cooking'];

console.log('\nCONTENTS OF hobbies ARRAY:')

console.log('==========================\n');

console.log(hobbies, '\n');

// EXPLORING METHODS TO CLONE ARRAYS:

// USING slice() to copy an array:

const copiedArray = hobbies.slice();

// NOTE: The slice() method can take arguments for start and end point
//       of a segment (or slice) of an array and clone that into a
//       new and distinct array. Used in the above form, the slice()
//       method copies the entire array, creating a new one.

console.log('\nCloned hobbies array to copiedArray using slice() method...\n');

console.log('\nCONTENTS of copiedArray ARRAY:');

console.log('=============================\n');

console.log(copiedArray, '\n');

// USING THE spread operator to copy an array:

const copiedArray2 = [...hobbies];

console.log('\nCloned hobbies array to copiedArray2 using spread [...hobbies] operator...\n');

console.log('\nCONTENTS of copiedArray2 ARRAY:');

console.log('==============================\n');

console.log(copiedArray2, '\n');

// DEMONSTRATE CLONING OF OBJECTS:

console.log('\nThis approach works with objects as well.\n');

console.log('\nperson OBJECT:');

console.log('=============\n');

console.log(person, '\n');

// USING spread {...} operator to clone person object:

const copiedPerson = {...person};

console.log('\nCloned person object to copiedPerson object using spread {...person} operator...\n');

console.log('\ncopiedPerson OBJECT:');

console.log('===================\n');

console.log(copiedPerson, '\n');

// EXPLORING THE REST OPERATOR:

// Declare a function toArray():

// PURPOSE: Return an array containing arguments in the
// function signature.

/*

const toArray = (arg1, arg2, arg3) =>  {

    return [arg1, arg2, arg3];

};  // end toArray()

*/

// Above function commented out so that it may be refactored
// using the REST (...args) operator.

/*

    NOTE: The REST operator is syntactically identical to the
    SPREAD operator. What differentiates it is where it is
    used. The REST operator is used in the argument list of
    a function or method.

*/

const toArray = (...args) =>  {

    // Return variable number of arguments using the REST operator:
    
    return args;

};

// Call toArray() function and pass its return values
// to console.log() so that output is viewable.

console.log('\nCalling toArray() function using REST operator and logging its return values...\n');

console.log( toArray(1, 2, 3, 4), '\n' );

console.log('\nNOTE: Using REST operator, we get different numbers of elements:\n')

console.log( toArray(7, 36, 54, 9, 2, 3, 10, -5), '\n' );
