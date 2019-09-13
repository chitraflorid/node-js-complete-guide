// play-es6-promise.js

/*
 ********************************************************************
 *                                                                  *
 * This script is a playground in Lecture 19, which explores        *
 * asynchronous code and the use of promises.                       *
 *                                                                  *
 ********************************************************************
*/

// Robert Hieger
// August 10, 2019

// NOTE: Promises are often implemented using third party packages,
// but here the intention is to explore coding them ourselves to
// gain further insight into how the third party package achieves
// its aims, and how promises, in general, work.

// DEMONSTRATE USE of setTimeOut(), which runs a specified command
// after the time out specified ends:

// Declare a function to be used as a callback:

const fetchData = () => {

    // Declare a promise:

    const promise = new Promise( (resolve, reject) => {

        // Resolve code:

        setTimeout( () => {

            // Carry out code below after 1.5 seconds:
    
            resolve('Done!\n');
    
        }, 1500);   // end setTimeOut()

    }); // end promise()

    return promise;

    // IMPORTANT: The return statement above is a synchronous statement,
    // meaning that it runs immediately. But the returned promise is not
    // called until the asynchronous code is ready to use it.

};  // end fetchData()

console.log('\nTime out...\n')

setTimeout( () => {

    // Carry this action out after 2 seconds (2,000 milliseconds).

    console.log('Timer is done!\n');

    // Now carry this out:

    fetchData()
        .then( (text) => {

        console.log(text);

        return fetchData();

        })
        .then( (text2) => {

        console.log(text2);

    }); // end fetchData()

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
