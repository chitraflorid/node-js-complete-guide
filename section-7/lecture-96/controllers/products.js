/*
 ***************************************************************
 *                                                             *
 * products.js                                                 *
 *                                                             *
 * Robert Hieger                                               *
 * October 20, 2019                                            *
 *                                                             *
 * This module contains controllers with product-related       *
 * logic, including listing or adding products to the          *
 * products page.                                              *
 *                                                             *
 ***************************************************************
*/

// Declare empty array to hold products data--mock database:

const products = [];

// Add Product Route:

exports.getAddProduct = (req, res, next) => {

    // Send response:

    res.render('add-product',

        {

            pageTitle: 'Add Product',
            path: '/admin/add-product',
            formsCSS: true,
            productCSS: true,
            activeAddProduct: true

        } );    // end res.render('add-product')

};  // end exports.getAddProduct()

// Add Product Logic:

exports.postAddProduct = (req, res, next) => {

    // Push new element onto products array:

    products.push( { title: req.body.title } );

    // Redirect to Landing Page.
    
    res.redirect('/');

};  // end exports.postAddProduct()

// Logic to get products for display in view:

exports.getProducts = (req, res, next) => {

    // Send response:

    res.render( 'shop',

        {
            prods: products,
            pageTitle: 'Shop', path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true

        }); // end res.render('shop')
  
};  // end exports.getProducts()
