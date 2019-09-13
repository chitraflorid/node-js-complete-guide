/*
 ***************************************************************
 *                                                             *
 * Lecture 29: Sending Responses                               *
 *                                                             *
 * In this course module, I take the HTTP server created in    *
 * Lecture 25, and for the first time send a response to the   *
 * user agent (browser). This is done in this example in the   *
 * most rudimentary of fashions, but will be improved later.   *
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

    // Set response header:

    res.setHeader('Content-Type', 'text/html');

    // Send html content:

    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head><meta charset="utf-8"><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    
    
    // Signal end of response:

    res.end();

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
// Lecture 25, the server returns the first meaningful data to the browser
// by employing the response object (res). Here it is done in a primitive
// and complex way directly from Node.js. Later I will employ a further
// abstraction that eases construction of a response--Express.js.
