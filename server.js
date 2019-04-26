const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const userApi = require('./api/userApi.js');
const morningReportApi = require('./api/morningReportApi.js');

//sets up hbs
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

//setup middleware for handling html forms
//where body is a query string 
app.use(express.urlencoded());

//allows html forms to use a "hack" which allows
//PUT/PATCH/DELETE
// e.g: /foo?_method=DELETE
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render("index")
});

app.get('/user', (req, res) => {
    res.render('user')
});

app.get('/night', (req, res) => {
    res.render('night')
});

app.get('/location', (req, res) => {
    res.render('location')
});

//ALWAYS AT BOTTOM OF FILE
const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
}); //https://stackoverflow.com/questions/14322989/first-heroku-deploy-failed-error-code-h10

