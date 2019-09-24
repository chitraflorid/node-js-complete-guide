/*
 ***************************************************************
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * User List Application                                       *
 *                                                             *
 * Robert Hieger                                               *
 * September 21, 2019                                          *
 *                                                             *
 * This module is the entry point to the User List app, and    *
 * contains the Node.js server logic, as well as all critical  *
 * imports and hooks to other parts of the application.        *
 *                                                             *
 ***************************************************************
*/

// Import necessary core modules:

const path = require('path');

// Import 3rd Party Modules:

const express = require('express');

const bodyParser = require('body-parser');

// Import custom modules:

const userRoutes = require('./routes/users');

const adminRoutes = require('./routes/add-users');

// Initialize Express application:

const app = express();

// Set application view engine:

app.set('view engine', 'ejs');

// Set path to view engine templates:

app.set('views', 'views');  // NOTE: This is by default, so this command is explicit,
                            // not necessary.

// Set up HTTP request body parsing:

app.use( bodyParser.urlencoded( { extended: false } ) );

// Set up static file serviing from public folder:

app.use( express.static( path.join(__dirname, 'public') ) );

// CONFIGURE MIDDLEWARE:

app.use(userRoutes);

app.use(adminRoutes);

// MIDDLEWARE:

// Catchall:

app.use( (request, response, next) =>  {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log('\nServing 404 Page Response...\n');

    response.status(404).render('404', 
    {
        pageTitle: 'Page Not Found',
        path: '/*'
    });

}); // end app.use()

// Set listening port for Express Server:

app.listen(3000, () => {

    // Log status to console:

    console.log('\nServer listening at port 3000...\n');

});
