// play-es6-objects.js

/*
 ********************************************************************
 *                                                                  *
 * This script is a playground in Lecture 14, which explores        *
 * objects, properties and methods.                                 *
 *                                                                  *
 ********************************************************************
*/

// Robert Hieger
// August 3, 2019

// Declare an Object:

const person = {

    // PROPERTIES:
    
    name: 'Bobby',
    age: 57,

    // METHODS:

    greet()  {

        console.log('Hi, I am ' + this.name + '!\n');

    }   // end greet()

};  // end person()

// Log object as a whole to console:

console.log('\n' + person + '\n');

// NOTE: Just logging the actual object will produce an output of
//       of [object Object], which basically means that it is
//       displaying an object of type Object, which is the root
//       object of the JavaScript language.  This does not tell
//       us anything about the object  properties, however.

//       To avoid this problem, we will break the output into 3
//       lines of code, the top being a newline character, the
//       middle being the object output, itself, and the last
//       being another newline character, as follows:

console.log('\n');
console.log(person);
console.log('\n');

// Call person.greet() method:

person.greet();
