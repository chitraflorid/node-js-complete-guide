/*
 ***************************************************************
 *                                                             *
 * product.js                                                  *
 *                                                             *
 * Robert Hieger                                               *
 * October 21, 2019                                            *
 *                                                             *
 * This module contains a model for the data structure of a    *
 * product that will be rendered on the Shop page.
 *                                                             *
 ***************************************************************
*/

// Declare array for mock database:

const products = [];

// Declare Product class:

module.exports = class Product {

    constructor(t)  {

        this.title = t;

    }   // end constructor(title)

    // METHODS:

    save()  {

        // Push a product element onto the products array:
        
        products.push(this);

    }   // end save()

    static fetchAll()  {

        // Return complete array of products data:

        return products;

    }   // end fetchAll()

};  // end Product()
