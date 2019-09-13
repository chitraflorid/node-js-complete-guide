/*
 *****************************************************************
 *                                                               *
 * Assignment 2: Time to Practice--Express.js                    *
 *                                                               *
 * app.js                                                        *
 *                                                               *
 * Robert Hieger                                                 *
 * September 1, 2019                                             *
 *                                                               *
 * This is a very simple web application that demonstrates       *
 * the HTTP response-handling and routing capabilities of the    *
 * Express.js third party framework. This framework is the       *
 * de facto standard for response handling and routing with      *
 * the Node.js platform.                                         *
 *                                                               *
 *****************************************************************
*/

// Import necessary third party modules:

const express = require('express');

// Initialize express app:

const app = express();

// MIDDLEWARE:

/*
 *****************************************************************
 
 COMMENTED OUT IN FAVOR OF TWO DISTINCT ROUTES THAT FOLLOW.

app.use('/', (req, res, next) => {

    console.log('Middleware #1...\n');

    // Pass request to next middleware:

    next();

}); // end app.use('/')

app.use('/', (req, res, next) => {

    console.log('Middleware #2...\n');

    res.send('<h1>Welcome to My Node.js Page!</h1>');

});

*/


// NEW MIDDLEWARE:

app.use('/users', (request, response, next) => {

    console.log('Sending response for "/users"\n');

    response.send(
        `<h1>User List:</h1>
         <ul>
            <li>Robert Hieger</li>
            <li>John Doe</li>
            <li>Jane Doe</li>
         </ul>
         <a href='/'>Home</a>`
    );

}); // end app.use('/users')

app.use('/', (request, response, next) => {

    console.log('Sending response for "/"\n');

    response.send(
        `<h1>Welcome to Node.js!</h1>
         <a href='/users'>User List</a>`
    );

 });  // end app.use('/')

// Initialize HTTP express-based server:

app.listen(3000, () => {

    console.log(`\nServer listening on port 3000...\n`);

}); // end app.listen(3000)
