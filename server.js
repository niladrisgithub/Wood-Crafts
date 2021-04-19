// Load your modules (use require() statements at the top of the file)
 const express = require('express');
 const morgan = require ('morgan');
 const port = 3000;
 const indexRouter = require('./routes/index');
 const woodCraftsRouter = require('./routes/WoodCrafts');

// Create or initialize the express app
const app = express();

// Connect to DB
require('./config/database');
 
// Configure application settings app.set()
 app.set('view engine', 'ejs');

// Mount application middleware app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));

// Mount our route handlers - very much like event listeners
 app.use('/', indexRouter);
 app.use('/', woodCraftsRouter);
// Tell our app to listen on a port - our app needs to process files

app.listen(port, function(){
    console.log(`Express is listening on port:${port}`);
});