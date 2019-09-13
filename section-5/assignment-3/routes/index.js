/*
 *****************************************************************
 *                                                               *
 * index.js                                                      *
 *                                                               *
 * Robert Hieger                                                 *
 * September 8, 2019                                             *
 *                                                               *
 * This module contains the routing logic for the application.   *
 *                                                               *
 *****************************************************************
*/


//  IMPORT REQUIRED CORE MODULE:

const path = require('path');

// IMPORT REQUIRED THIRD PARTY MODULES:

const express = require('express');

// Initialize Express Router Service:

const router = express.Router();

// ROUTES:

router.get('/', (request, response, next) => {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log('Sending response for \'/\'...\n');

    response.sendFile( path.join(__dirname, '..', 'views', 'index.html') );

}); // end router.get('/')

router.get('/add-log-entry', (request, response, next) => {

    // FOR DIAGNOSTIC PURPOSES ONLY:
    
    console.log('Sending response for \'/add-log-entry\'...\n');

    response.sendFile( path.join(__dirname, '..', 'views', 'add-log-entry.html') );

});

router.post('/add-log-entry', (request, response, next) => {

    // Log posted entry to console:

    console.log('Adding physical fitness log entry...\n');

    console.log(request.body);

    console.log('\n');

    console.log("Redirecting to \'/\'...\n");

    response.redirect('/');

});

module.exports = router;
