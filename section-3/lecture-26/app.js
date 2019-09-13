/*
 ***************************************************************
 *                                                             *
 * Lecture 26: The Node Lifecycle & Event Loop                 *
 *                                                             *
 * In this course module, I take the HTTP server created in    *
 * Lecture 25, and add a method that exits or terminates       *
 * the event loop so that the server ceases to listen for      *
 * any requests.                                               *
 *                                                             *
 ***************************************************************
*/


// Import http module for HTTP protocol support:

const http  = require('http');

// BUILD AND CONFIGURE SERVER:

// Instantiate http server:

const server = http.createServer( (req, res) => {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log('\n', req, '\n');

    // Exit the process event loop:

    process.exit();

});  // end http.createServer()

//  Set listening port for server and invoke server:

server.listen(3000, () => {

    console.log('\nListening on port 3000...\n');

});


// NOTE: Visiting localhost:3000 would not have any output to a browser
// window as no response has been defined. However, if you make a
// request from localhost:3000, the terminal window will feedback
// the entire request object.

// However, in this version of the server, slightly revised from that in
// Lecture 25, the server exits because the process.exit() method is invoked,
// terminating the event loop, and thus halting the server.
