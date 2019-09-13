/*
 ***************************************************************
 *                                                             *
 * Assignment 1: Time to Practice--The Basics                  *
 *                                                             *
 * router.js                                                   *
 *                                                             *
 * Robert Hieger                                               *
 * August 17, 2019                                             *
 *                                                             *
 * Consult README.md for details on the requirements for       *
 * for this router.                                            *
 *                                                             *
 * This module contains all routing logic for Assignment 1.    *
 *                                                             *
 ***************************************************************
*/

// Instantiate a request handler for HTTP Requests:

const httpRequestHandler = (req, res) => {

    // Declare  constant to hold request URL:

    const url = req.url;

    if (url === '/')  {

        // Set HTTP response header:

        res.setHeader('Content-Type', 'text/html');

        // Write HTML to browser window:

        res.write('<!DOCTYPE html>');
        res.write('<html lang="en">');
        res.write('<head>');
        res.write('<meta charset="utf-8">');
        res.write('<title>Welcome</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Welcome to My Node.js Server!</h1>');
        res.write('<a href="/users">User List</a>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<h2>Add New User:</h2>');
        res.write('<input type="text" placeholder="User Name" name="username">');
        res.write('<button type="submit">Add User</button>');
        res.write('</body>');
        res.write('</html>');

        return res.end();

    }   // end if

    if (url === '/users')  {

        // Set HTTP response header:

        res.setHeader('Content-Type', 'text/html');

        // Write HTML to browser window:

        res.write('<!DOCTYPE html>');
        res.write('<html lang="en">');
        res.write('<head>');
        res.write('<meta charset="utf-8">');
        res.write('<title>Welcome</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>User List</h1>');
        res.write('<a href="/">Home</a>');
        res.write('<ul>');
        res.write('<li>Robert Hieger</li>');
        res.write('<li>Joe Schmo</li>');
        res.write('<li>Jane Doe</li>');
        res.write('<li>John Doe</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');

        return res.end();

    }   // end if

    if (url === '/create-user') {

        // Declare const to hold body of response:

        const body = [];

        req.on('data', chunk => {

        // Push chunk onto body array:
          
        body.push(chunk);

        }); // end req.on('data')

        req.on('end', () => {

            // Declare a constant to hold the parsed body of the response:

            const parsedBody = Buffer.concat(body).toString();

            // Log the returned data to the console:

            console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered

        }); // end req.on('end')

        // Redirect the route to the '/users' path

        res.statusCode = 302;   // Redirect status code

        res.setHeader('Location', '/users');

        res.end();

      } // end if

};  // end httpRequestHandler

// Export httpRequestHandler:

module.exports = httpRequestHandler;
