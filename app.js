const express = require('express');
const app = express();
const bodyParser = require('body-parser')
//import controllers
const usersController = require('./controllers/usersController');

//use handlebars as template engine
app.set('view engine', 'hbs');

//point at CSS file
app.use(express.static(__dirname + "/public"));

//used to parse req.body for POST requests
app.use(express.urlencoded({ extended: true }));

//fire controllers
usersController(app);
// sleepLogController(app);




//assign port or let environment assign port
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
}); //https://stackoverflow.com/questions/14322989/first-heroku-deploy-failed-error-code-h10