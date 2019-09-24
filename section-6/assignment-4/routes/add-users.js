/*
 ***************************************************************
 *                                                             *
 * add-users.js                                                *
 *                                                             *
 * Robert Hieger                                               *
 * September 23, 2019                                          *
 *                                                             *
 * This module contains the routing logic for the              *
 * '/admin/add-users/' route.                                  *
 *                                                             *
 ***************************************************************
*/

// Import required core modules:

const path = require('path');

// Import required third party modules:

const express = require('express');

// Initialize Express Router service:

const router = express.Router();

// Declare a constant to hold user data: mock database

const users = [];

// ROUTES:

// Path: '/admin/add-users'--displays a form to input a new user

router.get('/admin/add-users', (request, response, next)  =>  {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log('\nSending \'/admin/add-users\' Response...\n');
    
    response.render('add-users',
        {
            pageTitle: 'Add User',
            path: '/admin/add-users'
        } );

})  // end router.get('/')

// Export Router:

module.exports = router;
