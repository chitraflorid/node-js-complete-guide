/*
 *****************************************************************
 *                                                               *
 * add-log-entry.js                                              *
 *                                                               *
 * Robert Hieger                                                 *
 * September 8, 2019                                             *
 *                                                               *
 * This module contains the routing logic for the Add a Log      *
 * Entry page.                                                   *
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

router.get('/add-log-entry', (request, response, next) => {

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.log('Sending response for \'/add-log-entry\'...\n');

    response.sendFile( path.join(__dirname, '..', 'views', 'add-log-entry.html') );

}); // end router.get('/')

module.exports = router;
