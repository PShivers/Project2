const express = require('express');
const app = express();
const methodOverride = require('method-override');

//routes
const userRoutes = require('./api/routes/user');
const sleepLogRoutes = require('./api/routes/sleepLog');
const indexRoutes = require('./api/routes/index')

//things to apply
app.use('/', indexRoutes)
app.use('/sleepLog', sleepLogRoutes);
app.use('/user', userRoutes);

//setting hbs
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


module.exports = app;