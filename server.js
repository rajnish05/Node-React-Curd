const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const users = require('./Route/user')
const customers = require('./Route/customer')

// define our app using express
const app = express();
app.use(cors())
app.use(express.static("public"));
// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

const port = process.env.PORT || 5001;

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mern-crud');
// route for User
app.use('/api/v1/users',users);
// route for Customer
app.use('/api/v1/customers',customers);


// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found !!!</h2>');
});

// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
