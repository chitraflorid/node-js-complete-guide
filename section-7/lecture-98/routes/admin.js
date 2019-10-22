/*
 ***************************************************************
 *                                                             *
 * admin.js                                                    *
 *                                                             *
 * Robert Hieger                                               *
 * October 21, 2019                                          *
 *                                                             *
 * This module contains the routing logic for the Admin page   *
 * that allows addition of products to the online store in     *
 * this sample application.                                    *
 *                                                             *
 ***************************************************************
*/


// Import required core modules:

const path = require('path');

// Import required third party modules:

const express = require('express');

// Import custom module:

const productsController = require('../controllers/products');

// Initialize Router service:

const router = express.Router();

// ROUTES:

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

// Export router for use in other modules:

module.exports = router;
