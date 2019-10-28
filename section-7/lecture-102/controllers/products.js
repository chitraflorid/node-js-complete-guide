/*
 ***************************************************************
 *                                                             *
 * products.js                                                 *
 *                                                             *
 * Robert Hieger                                               *
 * October 27, 2019                                            *
 *                                                             *
 * This module contains controllers with product-related       *
 * logic, including listing or adding products to the          *
 * products page.                                              *
 *                                                             *
 ***************************************************************
*/

// Import required custom modules:

const Product = require('../models/product');

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

    // Instantiate object of type Product:

    const product = new Product(req.body.title);

    // Save new product to products array:

    product.save();

    // Redirect to Landing Page.
    
    res.redirect('/');

};  // end exports.postAddProduct()

// Logic to get products for display in view:

exports.getProducts = (req, res, next) => {

    // Get all products for rendering:

    Product.fetchAll( (products) =>  {

        // Send response:

        res.render( 'shop',

        {
            prods: products,
            pageTitle: 'Shop', path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true

        }); // end res.render('shop')

    }); // end products()    
  
};  // end exports.getProducts()
