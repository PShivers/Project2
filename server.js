const express = require('express');
const app = express();
const methodOverride = require('method-override');

const userApi = require('./api/userApi.js');
const locationApi = require('./api/locationApi.js');

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
    res.render("users/index")
});

//ALWAYS AT BOTTOM OF FILE
const PORT = 3000;
app.listen(PORT, () => {
    console.log("server has started");
});
