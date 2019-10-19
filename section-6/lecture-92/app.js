// Import required 3rd party modules:

const express = require('express');

// Initialize express:

const app =  express();

// ROUTES:

app.get('/', (req, res, next)  =>  {

    res.render(path);

}); // end app.get('/')

app.get('/users', (req, res, next)  =>  {

    res.render(path);

}); // end app.get('/users')

app.post('/add-user', (req, res, next)  =>  {

     res.redirect('/users');

}); // end app.post('/add-user')

// Set Listening port and start Node.js HTTP Server:

app.listen(3000, () => {

    console.log('\nServer Listening on Port 3000...\n');

}); // end app.listen(3000)
