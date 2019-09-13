/*
 ***************************************************************
 *                                                             *
 * shop.js                                                     *
 *                                                             *
 * Robert Hieger                                               *
 * September 2, 2019                                           *
 *                                                             *
 * This module contains the routing logic for the Shop page    *
 * which is comprised of the items on sale in the theoretical  *
 * application now under development.                          *
 *                                                             *
 ***************************************************************
*/

// Import required third party modules:

const express = require('express');

// Initialize Router service:

const router = express.Router();

// ROUTES:

router.get('/', (req, res, next) => {

    // Send response:

    res.send('<h1>Hello from Express!</h1>');

}); // end app.use()

// NOTE: The path specified in this middleware above does not
// specify that the route is to the root path, but that the
// route STARTS with the root path. This is a very important
// distinction, because any other path may be appended.

// Export router:

module.exports = router;