const mongoose = require('mongoose');
const app = require('./app');

// import environmental variables from our variables.env file
// require('dotenv').config({ path: 'variables.env' });

// Connect to the Mongo DB
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Student', { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('Connection to MongoDB database was successful'));

// import all of our models
require('./models/Student');
require('./models/Course');

require('./routes/course')(app);

// Start our app!
app.set('port', process.env.EXPRESS_LOCALPORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
