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

    static addProduct(id)  {

        // Fetch the previous cart from cart.json file.

        // Analyze cart => is added product in existing cart?

        // New product ? addProduct : increment quantity of existing product

    }   // end addProduct()

};   // end Cart()
