// Import required 3rd party modules:

const express = require('express');

const bodyParser = require('body-parser');  // Parses incoming HTTP POST responses

const expressHbs = require('express-handlebars');

// Initialize express:

const app =  express();

// Create Mock Data Store to Hold User Data:

const users = [];

// Configure Templating Engine:

//1. Pug Configuration

// app.set('view engine', 'pug');

//2. express-handlebars

app.engine('hbs', expressHbs(
    {
        defaultLayout: 'main-layout',
        extname: 'hbs'
    } )
);

app.set('view engine', 'hbs');

// Configure Folder for Templates:

app.set('views', 'views');  // NOTE: This is default in Express; included for completeness

// Configure bodyParser as Middleware:

app.use( bodyParser.urlencoded( {extended: false} ) );

// ROUTES (MIDDLEWARE):

app.get('/', (req, res, next)  =>  {

    res.render('index', {pageTitle: 'Add User'});

}); // end app.get('/')

app.get('/users', (req, res, next)  =>  {

    res.render('users',
        {
            pageTitle: 'User List',
            users: users,
            hasUsers: users.length > 0
        }
    );

}); // end app.get('/users')

app.post('/add-user', (req, res, next) =>  {

    // Push new user elment onto users array:

    // FOR DIAGNOSTIC PURPOSES ONLY:

    console.table(users);
    
    users.push( {name: req.body.userName} );

    console.table(users);

    res.redirect('/users');

}); // end app.post('/add-user')

// Set Listening port and start Node.js HTTP Server:

app.listen(3000, () => {

    console.log('\nServer Listening on Port 3000...\n');

}); // end app.listen(3000)
