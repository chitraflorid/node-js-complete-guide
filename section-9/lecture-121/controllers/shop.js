/*
 ***************************************************************
 *                                                             *
 * shop.js                                                     *
 *                                                             *
 * Robert Hieger                                               *
 * November 25, 2019                                           *
 *                                                             *
 * This module contains controllers with product-related       *
 * logic, including listing or adding products to the          *
 * products page.                                              *
 *                                                             *
 ***************************************************************
*/

// Import required custom modules:

const Product = require('../models/product');

// Logic to get products for display in view:

exports.getProducts = (req, res, next) => {

    // Get all products for rendering:

    Product.fetchAll( (products) =>  {

        // Send response:

        res.render( 'shop/product-list',

        {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'

        }); // end res.render('shop')

    }); // end products()    
  
};  // end exports.getProducts()

exports.getProduct = (req, res, next) =>  {

    // Get value of productId:

    const prodId = req.params.productId;

    // TEMPORARY
    
    Product.findById(prodId, product => {

        console.log(product);

        // Render Detail View:

        res.render('shop/product-detail',
        {
            product: product,
            pageTitle: product.title,
            path: '/products'
        });


    }); // end product.findById()

    // TEMPORARY:

    // res.redirect('/');
    
};  // end exports.getProduct()

exports.getIndex = (req, res, next)  =>  {

        // Get all products for rendering:

        Product.fetchAll( (products) =>  {

            // Send response:
    
            res.render( 'shop/index',
    
            {
                prods: products,
                pageTitle: 'Shop',
                path: '/shop'
    
            }); // end res.render('shop')
    
        }); // end products()

};  // end exports.getIndex()

exports.getCart = (req, res, next) =>  {

    res.render('shop/cart', {

        path: '/cart',
        pageTitle: 'Your Cart'

    }); // end res.render('shop/cart')

};  // end exports.getCart()

exports.getOrders = (req, res, next) =>  {

    res.render('shop/orders', {

        path: '/orders',
        pageTitle: 'Your Orders'

    }); // end res.render('/shop/orders')

};  // end exports.getOrders()

exports.getCheckout = (req, res, next) =>  {

    res.render('shop/checkout', {

        path: '/checkout',
        pageTitle: 'Checkout'

    }); // end res.render('shop/checkout')

};  // end exports.getCheckOut()
