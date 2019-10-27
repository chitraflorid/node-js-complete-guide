/*
 ***************************************************************
 *                                                             *
 * product.js                                                  *
 *                                                             *
 * Robert Hieger                                               *
 * October 26, 2019                                            *
 *                                                             *
 * This module contains a model for the data structure of a    *
 * product that will be rendered on the Shop page.
 *                                                             *
 ***************************************************************
*/
 
// Import required core modules:
 
const fs = require('fs');
 
const path = require('path');
 
// Declare Product class:
 
module.exports = class Product {
 
    constructor(t)  {
 
        this.title = t;
 
    }   // end constructor(title)
 
    // METHODS:
 
    save()  {
 
        const p = path.join(

            path.dirname(process.mainModule.filename),
            'data',
            'products.json'

        );  // end const p

        fs.readFile(p, (err, fileContent) => {

            // Declare variable to hold product data:

            let products = [];
            
            if (!err)  {

                products = JSON.parse(fileContent);

            }   // end if

            // Push new product onto products array:

            products.push(this);

            // Write new product to file:

            fs.writeFile( p, JSON.stringify(products), (err) => {

                console.log(err);

            });

        }); // end fs.readFile(p)
 
    }   // end save()
 
    static fetchAll(callBack)  {

        const p = path.join(

            path.dirname(process.mainModule.filename),
            'data',
            'products.json'

        );  // end const p

        // Read in data file:

        fs.readFile( p, (err, fileContent) => {

            if (err)  {

                // Return empty array:

                callBack([]);

            }   // end if

            // Return array of products data:

            callBack(JSON.parse(fileContent));

        });
 
    }   // end fetchAll()
 
};  // end Product()