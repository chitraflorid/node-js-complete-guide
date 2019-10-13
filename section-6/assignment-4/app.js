/*
 *****************************************************************
 *                                                               *
 * app.js                                                        *
 *                                                               *
 * Robert Hieger                                                 *
 * October 13, 2019                                              *
 *                                                               *
 * This module is the entry point to the application and will    *
 * import all needed native, third party, and custom modules     *
 * necessary for the required functionality of the application.  *
 *                                                               *
 *****************************************************************
*/

// REQUIRED 3RD PARTY MODULES:

const express = require('express');

// INITIALIZE EXPRESS MODULE:

const app = express();

// CONFIGURE LISTENING PORT AND INITIALIZE HTTP SERVER:

app.listen(3000, () => {

    console.log('\nServer Listening on Port 3000...\n');

});