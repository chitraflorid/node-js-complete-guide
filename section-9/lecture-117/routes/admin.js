/*
 ***************************************************************
 *                                                             *
 * admin.js                                                    *
 *                                                             *
 * Robert Hieger                                               *
 * November 18, 2019                                           *
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

const adminController = require('../controllers/admin');

// Initialize Router service:

const router = express.Router();

// ROUTES:


//  /admin/add-product => GET

router.get('/add-product', adminController.getAddProduct);

//  /admin/products => GET

router.get('/products', adminController.getProducts);

//  /admin/add-product => POST

router.post('/add-product', adminController.postAddProduct);

// Export router for use in other modules:

module.exports = router;
