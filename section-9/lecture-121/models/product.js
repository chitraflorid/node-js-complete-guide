/*
 ***************************************************************
 *                                                             *
 * product.js                                                  *
 *                                                             *
 * Robert Hieger                                               *
 * November 25, 2019                                           *
 *                                                             *
 * This module contains a model for the data structure of a    *
 * product that will be rendered on the Shop page.             *
 *                                                             *
 ***************************************************************
*/
 
// Import required core modules:
 
const fs = require('fs');
 
const path = require('path');

const p = path.join(

    path.dirname(process.mainModule.filename),
    'data',
    'products.json'

);  // end const p

// Helper Function:

const getProductsFromFile = callBack =>  {

    // Read in data file:

    fs.readFile( p, (err, fileContent) => {

        if (err)  {

            // Return empty array:

            return callBack([]);

        }   // end if

        // Return array of products data:

        callBack(JSON.parse(fileContent));

    }); // end fs.readFile(p)

};  // end getProductsFromFile()
 
// Declare Product class:
 
module.exports = class Product {
 
    constructor(
        title,
        imageUrl,
        description,
        price
    )  {
 
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
 
    }   // end constructor(title)
 
    // METHODS:
 
    save()  {

        // Unique ID for product:

        this.id = Math.random().toString();
 
        getProductsFromFile( products =>  {

            // Push new product onto products array:

            products.push(this);

            // Write new product to file:

            fs.writeFile( p, JSON.stringify(products), (err) => {

                console.log(err);

            });

        });

        fs.readFile(p, (err, fileContent) => {

            // Declare variable to hold product data:

            let products = [];

        }); // end fs.readFile(p)
 
    }   // end save()
 
    static fetchAll(callBack)  {

        getProductsFromFile(callBack);
                            
    }   // end fetchAll()

    static findById(id, callBack)  {

        getProductsFromFile(products => {

            const product = products.find( prod => prod.id === id);

            callBack(product);

        }); // end getProductsFromFile()

    }   // end findById(id, callBack)
 
};  // end Product()
