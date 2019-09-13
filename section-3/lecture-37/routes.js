/*
 ***************************************************************
 *                                                             *
 * Lecture 37: Using the Node Module system.                   *
 *                                                             *
 * routes.js                                                   *
 *                                                             *
 * Robert Hieger                                               *
 * August 17, 2019                                             *
 *                                                             *
 * This module contains all routing logic for Lecture 37.      *
 *                                                             *
 ***************************************************************
*/

const fs = require('fs');

// Create request handler function callable by app.js:

const requestHandler = (req, res) => {

    // BASIC ROUTING:

    // Declare constant to hold request url:

    const url = req.url;

    // Declare constant to hold request method:

    const method = req.method;

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

    }   // end if

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

        req.on('end', () => {

            // DECLARE A CONSTANT TO HOLD THE REQUEST BODY:

            const parsedBody = Buffer.concat(body).toString();

            // LOG TO CONSOLE:

            // console.log(parsedBody);

            // DECLARE A CONSTANT TO STORE parsedBody to message:

            const message = parsedBody.split('=')[1];

            // Write contents to a log file:

            // fs.writeFileSync('./message.txt', message);

            // ABOVE writeFileSync is syncrhonous, and therefore
            // blocking code. This is undesirable, and so here it
            // is, refactored as asynchronous (non-blocking) code:

            fs.writeFile('./message.txt', message, (err) => {

                // Write header information:

                res.statusCode = 302;   // Redirect

                res.setHeader('Location', '/');

                return res.end();

            }); // end fs.writeFile

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

};  // end requestHandler()

// Export requestHandler()

module.exports = requestHandler;