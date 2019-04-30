const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser')

//routes
const usersRoutes = require('./api/routes/usersRoutes');
const sleepLogRoutes = require('./api/routes/sleepLog');
const indexRoutes = require('./api/routes/index')

// only requests to / will be sent to our "index router"
app.use('/', indexRoutes);
// only requests to /sleepLog will be sent to our "sleep log router"
app.use('/sleepLog', sleepLogRoutes);
// only requests to /users will be sent to our "users router"
app.use('/users', usersRoutes);

//setting hbs
app.set('view engine', 'hbs');
//middleWARE
//this points to my css
app.use(express.static(__dirname + "/public"));
//this is the body parser for creating req body for posts
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'))


module.exports = app;