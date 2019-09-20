/*
 ***************************************************************
 *                                                             *
 * path.js                                                     *
 *                                                             *
 * Robert Hieger                                               *
 * September 20, 2019                                           *
 *                                                             *
 * This module contains a helper function used to refine the   *
 * navigation for this application.
 *                                                             *
 ***************************************************************
*/


// Import required core modules:

const path = require('path');

// Construct a variable that helps construct a path to the
// parent directory:

module.exports = path.dirname(process.mainModule.filename);
