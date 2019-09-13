/*
 ***************************************************************
 *                                                             *
 * Lecture 25: Creating the Node Server                        *
 *                                                             *
 * In this course module, I will create an HTTP server using   *
 * Node.js code, according to instructions from Maximillian    *
 * Schwarzmüller, the course's instructor.                     *
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

});  // end http.createServer()

//  Set listening port for server and invoke server:

server.listen(3000, () => {

    console.log('\nListening on port 3000...\n');

});

// NOTE: Visiting localhost:3000 would not have any output to a browser
// window as no response has been defined. However, if you make a
// request from localhost:3000, the terminal window will feedback
// the entire request object.
