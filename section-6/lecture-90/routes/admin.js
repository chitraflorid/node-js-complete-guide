/*
 ***************************************************************
 *                                                             *
 * admin.js                                                    *
 *                                                             *
 * Robert Hieger                                               *
 * September 21, 2019                                          *
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

const rootDir = require('../util/path');

// Initialize Router service:

const router = express.Router();

// Initialize a constant to act as a mock database for products:

const products = [];

// ROUTES:

router.get('/add-product', (req, res, next) => {

    // Send response:

    res.render('add-product',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            formsCSS: true,
            productCSS: true,
            activeAddProduct: true
        } );

}); // end router.use()

router.post('/add-product', (req, res, next) => {

    // Push new element onto products array:

    products.push( { title: req.body.title } );

    res.redirect('/');
});

// Export router for use in other modules:

exports.routes = router;

exports.products = products;
