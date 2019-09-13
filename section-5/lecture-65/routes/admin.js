/*
 ***************************************************************
 *                                                             *
 * admin.js                                                    *
 *                                                             *
 * Robert Hieger                                               *
 * September 2, 2019                                           *
 *                                                             *
 * This module contains the routing logic for the Admin page   *
 * that allows addition of products to the online store in     *
 * this sample application.                                    *
 *                                                             *
 ***************************************************************
*/


// Import required third party modules:

const express = require('express');

// Initialize Router service:

const router = express.Router();

// ROUTES:

router.get('/add-product', (req, res, next) => {

    // Send response:

    res.send(
        `<form action="/product" method="POST">
            <input type="text" name="title" />
            <button type="submit">Add Product</button>
        </form>
        `
        );

}); // end router.use()

router.post('/product', (req, res, next) => {

    // Log body of request to console:

    console.log(req.body);


    // NOTE: This statement only logs the content of the request body
    // to the console, but does not render it to a page.
    
    // ALSO, the current parsing of the body allows for both POST requests
    // and for GET requests, which we don't want. This will be addressed
    // in the next lecture.

    // Redirect to root URL:

    res.redirect('/');

});

// Export router for use in other modules:

module.exports = router;
