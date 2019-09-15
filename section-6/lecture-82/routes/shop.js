/*
 ***************************************************************
 *                                                             *
 * shop.js                                                     *
 *                                                             *
 * Robert Hieger                                               *
 * September 15, 2019                                          *
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

// Import mock database contained in products array:

const adminData = require('./admin');

// Initialize Router service:

const router = express.Router();

// ROUTES:

router.get('/', (req, res, next) => {

    // Declare data source for products:

    const products = adminData.products;

    // Send response:

    res.render( 'shop', { prods: products, docTitle: 'Shop' } );

    
}); // end router.get()

// Export router:

module.exports = router;
