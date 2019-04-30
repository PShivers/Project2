const http = require('http');

const app = require('./app');

//ALWAYS AT BOTTOM OF FILE
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
}); //https://stackoverflow.com/questions/14322989/first-heroku-deploy-failed-error-code-h10

