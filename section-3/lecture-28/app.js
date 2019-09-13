/*
 ***************************************************************
 *                                                             *
 * Lecture 28: Understanding Requests                          *
 *                                                             *
 * In this course module, I take the HTTP server created in    *
 * Lecture 25, and explore some of the request data that       *
 * may be returned from the browser (user agent) request.      *
 *                                                             *
 ***************************************************************
*/


// Import http module for HTTP protocol support:

const http  = require('http');

// BUILD AND CONFIGURE SERVER:

// Instantiate http server:

const server = http.createServer( (req, res) => {

    // Request some specific values to be returned:

    console.log('\n', req.url, req.method, req.headers, '\n');

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
// Lecture 25, the server returns some selected values from the request
// object and logs them to the console.
