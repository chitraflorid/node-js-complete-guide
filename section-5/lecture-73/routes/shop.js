/*
 ***************************************************************
 *                                                             *
 * shop.js                                                     *
 *                                                             *
 * Robert Hieger                                               *
 * September 6, 2019                                           *
 *                                                             *
 * This module contains the routing logic for the Shop page    *
 * which is comprised of the items on sale in the theoretical  *
 * application now under development.                          *
 *                                                             *
 ***************************************************************
*/

// Import required core modules:

const path = require('path');

// Import required third party modules:

const express = require('express');

// Import required custom module:

const rootDir = require('../util/path');

// Initialize Router service:

const router = express.Router();

// ROUTES:

router.get('/', (req, res, next) => {

    // Send response:

    // NOTE: The command below is a refactoring of the commented-out
    // code that follows it.

    res.sendFile( path.join(rootDir, 'views', 'shop.html') );

    // res.sendFile( path.join(__dirname, '..', 'views', 'shop.html') );

    // NOTE: The double dots above (..) denote the same thing as
    // '../' in UNIX-based systems or '..\' on Windows. It is
    // therefore preferrable, and even correct to have only the
    // two dots so as to be more correct for either OS file system.

}); // end app.use()

// NOTE: The path specified in this middleware above does not
// specify that the route is to the root path, but that the
// route STARTS with the root path. This is a very important
// distinction, because any other path may be appended.

// Export router:

module.exports = router;
