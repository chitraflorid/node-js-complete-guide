// Import required 3rd party modules:

const express = require('express');

// Initialize express:

const app =  express();

// Set Listening port and start Node.js HTTP Server:

app.listen(3000, () => {

    console.log('\nServer Listening on Port 3000...\n');

}); // end app.listen(3000)
