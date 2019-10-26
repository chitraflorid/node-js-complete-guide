/*
 ***************************************************************
 *                                                             *
 * shop.js                                                     *
 *                                                             *
 * Robert Hieger                                               *
 * October 26, 2019                                            *
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

// Import custom modules:

const productsController = require('../controllers/products');

// Initialize Router service:

const router = express.Router();

// ROUTES:

router.get('/', productsController.getProducts);

// Export router:

module.exports = router;
