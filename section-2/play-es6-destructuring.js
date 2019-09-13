// play-es6-destructuring.js

/*
 ********************************************************************
 *                                                                  *
 * This script is a playground in Lecture 18, which explores        *
 * destructuring of objects and arrays.                             *
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

// LOG person object to console:

console.log('\nperson OBJECT:');

console.log('=============\n');

console.log(person, '\n');

// Demonstrate the concept of destructuring, which in this case will extract
// the name from the person object.

const printName = ( { name } ) =>  {

    console.log(name, '\n');

};  // end printName(person)

console.log('\nLOG person OBJECT with printName() FUNCTION:');

console.log('===========================================\n');

printName(person);

// Demonstrate destructuring object:

console.log('\nDestructuring - CONTENTS OF CONSTANT { name, age }:');

console.log('==================================================\n');

const { name, age } = person;

console.log(person);

// Demonstrate destructuring an array:

const hobbies = ['Sports', 'Cooking'];  // Declared array

console.log('\nDestructuring ARRAY hobbies:');

console.log('===========================\n');

console.log('\Original Contents of Array hobbies:\n')

console.log(hobbies);

console.log('\n');

// Destructuring hobbies array:

console.log('Destructuring hobbies array...\n');

console.log('Done.\n');

// Destructure hobbies array:

const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);
