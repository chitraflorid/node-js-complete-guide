/*
 ***************************************************************
 *                                                             *
 * Lecture 31: Routing Requests                                *
 *                                                             *
 * In this course module, I take the HTTP server created in    *
 * Lecture 25, and for the first time begin to construct       *
 * meaningful routing that produces a meaningful response      *
 * to the HTTP request.                                        *
 *                                                             *
 ***************************************************************
*/


// Import http module for HTTP protocol support:

const http  = require('http');

// BUILD AND CONFIGURE SERVER:

// Instantiate http server:

const server = http.createServer( (req, res) => {

    // Set constant for URL:

    const url = req.url;

    // BASIC ROUTING:

    if (url === '/')  {

        // Set response header:

        res.setHeader('Content-Type', 'text/html');

        // Send html content:

        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head><meta charset="utf-8"><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text">' +
            '<button type="submit">Send</button></form></body>');
        res.write('</html>');

        // Signal end of response:

        return res.end();

    }

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
// Lecture 25, the server adds the first meaningful routing, which produces
// a meaningful response to the HTTP request.
