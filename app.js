const express = require('express');
const passport = require('passport');
// We may add session features later
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

// Eventually, we will be using Passport JS for our authentication
// const passport = require('passport');
// require('./handlers/passport');

// These tools may come in handy for future development
// const cookieParser = require('cookie-parser');
// const promisify = require('es6-promisify');
// const helpers = require('./helpers');

const expressValidator = require('express-validator');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');

// create our Express app
const app = express();

// use passport jwt authentication
app.use(passport.initialize());
require('./validation/passport')(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('escuela/build'));
}

// Takes all requests renders their data into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data
app.use(expressValidator());

// After the above middleware, we finally handle our own routes!
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Otherwise this was an unexpected error of some kind

if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}
// production error handler
app.use(errorHandlers.productionErrors);

// done! we export it so we can start the backend in server.js
module.exports = app;
