/*
 ***************************************************************
 *                                                             *
 * admin.js                                                    *
 *                                                             *
 * Robert Hieger                                               *
 * November 11, 2019                                           *
 *                                                             *
 * This module contains controllers that embody the logic      *
 * necessary for maintaining the product base.                 *
 *                                                             *
 ***************************************************************
*/

// Import required custom modules:

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {

    // Send response:

    res.render('admin/add-product',

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

exports.getProducts = (req, res, next) => {

    Product.fetchAll(products => {

      res.render('admin/products', {

        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'

      });   // end res.render('admin/products')

    }); // end Product.fetchAll()

  };    // end exports.getProducts()
