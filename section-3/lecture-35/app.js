/*
 ***************************************************************
 *                                                             *
 * Lecture 35: Blocking and Non-Blocking Code                  *
 *                                                             *
 * In this course module, I take the HTTP server created in    *
 * Lecture 25, and refactor the code so that it is no longer   *
 * blocking, but rather asynchronous code.                     *
 *                                                             *
 ***************************************************************
*/

// Import core module dependencies:

const http  = require('http');  // Support HTTP protocol operations.

const fs = require('fs');       // Support file system oeprations.

// BUILD AND CONFIGURE SERVER:

// Instantiate http server:

const server = http.createServer( (req, res) => {

    // Set constant for URL:

    const url = req.url;

    // Set constant for request method:
    
    const method = req.method;

    // BASIC ROUTING:

    if (url === '/')  {

        // Send html content:

        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head><meta charset="utf-8"><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message">' +
            '<button type="submit">Send</button></form></body>');
        res.write('</html>');

        // Signal end of response:

        return res.end();

    }

    if (url === '/message' && method === 'POST')  {

        // DECLARE A CONSTANT TO STORE THE REQUEST BODY,
        // WHICH TAKES THE FORM OF THE REFERENCE TYPE ARRAY:

        const body = [];

        // DECLARE AN EVENT LISTENER TO MONITOR THE 'data" EVENT
        // (streaming data):

        req.on('data', (chunk) => {

            // Push incoming array element onto body array:

            console.log(chunk);

            // NOTE: console.log() must precede the push method because the
            // moment chun is pushed onto the body array, its value would
            // be undefined.
            
            body.push(chunk);

        }); // end req.on('data')

        // DECLARE AN EVENT LISTENER TO PROCESS THE END OF AN
        // INCOMING HTTP REQUEST:

        return req.on('end', () => {

            // DECLARE A CONSTANT TO HOLD THE REQUEST BODY:

            const parsedBody = Buffer.concat(body).toString();

            // LOG TO CONSOLE:

            // console.log(parsedBody);

            // DECLARE A CONSTANT TO STORE parsedBody to message:

            const message = parsedBody.split('=')[1];

            // Write contents to a log file:

            // fs.writeFileSync('./message.txt', message);

            // NOTE: Above writeFileSync is a blocking I/O operation, which is
            // why it has been commented out. Instead, for more efficient
            // code, it is refactored below in its asynchronous form so that
            // the code does not block other operations that follow it.

            fs.writeFile('./message.txt', message, err => {

                // Write header information:

                res.statusCode = 302;   // Redirect

                res.setHeader('Location', '/');

                return res.end();

            });

        }); // end req.on('end')

    }   // end if

     // Set response header:

     res.setHeader('Content-Type', 'text/html');

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
