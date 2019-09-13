// play-es6-callback.js

/*
 ********************************************************************
 *                                                                  *
 * This script is a playground in Lecture 19, which explores        *
 * asynchronous code and the use of callbacks, and some of the      *
 * pitfalls of this approach.                                       *
 *                                                                  *
 ********************************************************************
*/

// Robert Hieger
// August 10, 2019

// DEMONSTRATE USE of setTimeOut(), which runs a specified command
// after the time out specified ends:

// Declare a function to be used as a callback:

const fetchData = callback => {

    setTimeout( () => {

        // Carry out code below after 1.5 seconds:

        callback('Done!\n');

    }, 1500);   // end setTimeOut()

};  // end fetchData()

console.log('\nTime out...\n')

setTimeout( () => {

    // Carry this action out after 2 seconds (2,000 milliseconds).

    console.log('Timer is done!\n');

    // Now carry this out:

    fetchData( (text) => {

        console.log(text);

    }); // end fetchData( (text) )

}, 2000);   // end setTimeOut()

// NOTE: The above code is considered asynchronous because it does
// not run immediately. There is a delay of 2 seconds in this case.

// DEMONSTRATE 2 PIECES OF SYNCHRONOUS CODE:

console.log('\nTHE NEXT 2 MESSAGES ARE SYNCHRONOUS (THEY HAPPEN BEFORE TIMER IS DONE)!\n');

console.log('Hello!\n');

console.log('Hi!\n');
/*
 ***************************************************************
 *                                                             *
 * NOTE: The convoluted nature of nested callbacks shown       *
 * above produces diminishing returns as it becomes more       *
 * and more confusing to maintain. This is where promises      *
 * enter the picture. They were devised to help ease the       *
 * mental strain associated with deep nesting of callbacks.    *
 *                                                             *
 ***************************************************************
*/
