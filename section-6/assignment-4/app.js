/*
 *****************************************************************
 *                                                               *
 * app.js                                                        *
 *                                                               *
 * Robert Hieger                                                 *
 * October 13, 2019                                              *
 *                                                               *
 * This module is the entry point to the application and will    *
 * import all needed native, third party, and custom modules     *
 * necessary for the required functionality of the application.  *
 *                                                               *
 *****************************************************************
*/

// REQUIRED CORE MODULES:

const path = require('path');

// REQUIRED 3RD PARTY MODULES:

const express = require('express');

const bodyParser = require('body-parser');

// INITIALIZE EXPRESS MODULE:

const app = express();

// CONFIGURE VIEW ENGINE:

app.set('view engine', 'ejs');

app.set('views', 'views');      // Default path to templates

// CONFIGURE BODY PARSING WITH body-parser:

app.use( bodyParser.urlencoded( {extended: false} ) );

// CONFIGURE SERVING OF STATIC FILES with Express and path module:

app.use( express.static( path.join(__dirname, 'public') ) );

// SET UP MOCK DATA STORE FOR USERS:

const users = [];

// CONFIGURE LISTENING PORT AND INITIALIZE HTTP SERVER:

app.listen(3000, () => {

    console.log('\nServer Listening on Port 3000...\n');

});

// MIDDLEWARE:

app.get('/', (request, response, next) =>  {

    // Log to console route taken:

    console.log('\nSent Add User Response...\n');

    response.render('add-user',
      
        {
            docTitle: 'Add User',
            path: '/',
            ActiveInput: true
        }
    
    );

});

app.get('/users', (request, response, next) =>  {

    // Log to console route taken:

    console.log('\nSent User List Response...\n');

    // Define data store for User Names:

    const userNames = users;

    response.render('users.ejs',

        {
            users: userNames,
            docTitle: 'User List',
            path: '/users',
            activeList: true
        }

    );

}); // end app.get('/users')

app.post('/', (request, response, next) => {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log(users);

    // Push new user name element onto users[]:

    users.push( {name: request.body.fullName} );

    console.log(users);

    // Redirect to users page:

    response.redirect('/users');

});

// Catchall Middleware:

app.use( (request, response, next)  => {

    console.log('\nSent 404 Response...\n');
    
    response.status(404).render('404',

        {
            docTitle: 'Page Not Found'
        }
    
    );

});
