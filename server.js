const mongoose = require('mongoose');
const app = require('./app');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Student');
mongoose.connection.once('open', () => console.log('Connection was successful'));

// import all of our models

// Start our app!
app.set('port', process.env.EXPRESS_LOCALPORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
