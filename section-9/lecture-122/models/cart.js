/*
 ***************************************************************
 *                                                             *
 * cartt.js                                                    *
 *                                                             *
 * Robert Hieger                                               *
 * December 11, 2019                                           *
 *                                                             *
 * This module contains a model for the product shopping       *
 * cart to which products are added when a user shops.         *
 *                                                             *
 * Functionality:                                              *
 *                                                             *
 * 1. Cart must hold all products added to order.              *
 * 2. Group products by ID and include quantity to allow       *
 *    for adding more than 1 of same product.                  *
 *                                                             *
 ***************************************************************
*/

// Import necessary core modules:

const fs = require('fs');

const path = require('path');

// Configure path to cart:

const p = path.join(

    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'

);  // end const p

// DECLARE Cart CLASS:

modules.export = class Cart {

    /*
    constructor()  {

        // Add products array:

        this.products = [];
        this.totalPrice = 0;

    }   // end constructor()
    */

    // constructor() commented out because we do not need to
    // instantiate a cart over and over again. The cart is
    // always there even if its contents are null. Rather its
    // state changes to include products, quantities and total
    // price of orders. The refactoring follows with a static
    // method that can only be used directly with the Cart
    // class, not with an instantiated Cart object.

    // METHODS:

    static addProduct(id, productPrice)  {

        // Fetch the previous cart from cart.json file.

        // Declare empty cart object:

        let cart = { products: [], totalPrice: 0 };

        fs.readFile(p, (err, fileContent) =>  {

            if (!err)  {

                // If no err, set cart equal to parsed fileContent:

                cart = JSON.parse(fileContent);

            }   // end if

            // Analyze cart => find existing product index:

            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);

            // Store value of existingProductIndex:

            const existingProudct = cart.products[existingProductIndex];

            // Declare updatedProduct:

            let updatedProduct;

        // addProduct / increment quantity

        if (existingProduct)  {

                // Set value for updatedProduct:

                updatedProduct = {...existingProduct};

                // Increment qty on updatedProduct:

                updatedProduct.qty += 1;

                cart.products = [...cart.products];

                // Update products in cart:

                cart.products[existingProductIndex] = updatedProduct;

            }   else  {

                // if no existingProduct:

                updatedProduct = { id: id, qty: 1 };

                // Update products in cart:

                cart.products = [...cart.products, updatedProduct];

            }   // end if-else

            // Update total for cart:

            cart.totalPrice = cart.totalPrice + productPrice;

            // Write cart data to cart.json data store:

            fs.write(p, JSON.stringify(cart), (err) =>  {

                console.log(err);

            }); // end fs.write()

        }); // end fs.readFile()
 
    }   // end addProduct()

};   // end Cart()
