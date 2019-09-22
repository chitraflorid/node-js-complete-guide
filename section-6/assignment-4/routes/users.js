/*
 ***************************************************************
 *                                                             *
 * users.js                                                    *
 *                                                             *
 * Robert Hieger                                               *
 * September 22, 2019                                          *
 *                                                             *
 * This module contains the routing logic for the '/' route,   *
 * which displays a list of the app users.                     *
 *                                                             *
 ***************************************************************
*/

// Import required core modules:

const path = require('path');

// Import required third party modules:

const express = require('express');

// TEMPORARY: For now, we will place temporary mock data
// in the template file that will eventually accept data
// input from the add-users.ejs form.

// Initialize Express Router service:

const router = express.Router();

// ROUTES:

// Path: '/'--displays existing user list or No Users Found!

// NOTE: ERROR message described above will only be operational
// once the add-user.ejs form and route is built.

router.get('/', (request, response, next)  =>  {

    // TEMPORARY STATEMENT: TEST ROUTE:

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log('\nSending \'/\' Users Response...\n');
    
    response.send('<h1>Welcome to the Users Page!</h1>');

})  // end router.get('/')

// Export Router:

module.exports = router;