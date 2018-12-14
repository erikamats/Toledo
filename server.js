const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config({ path: 'variables.env' });
// Connect to the Mongo DB
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
const connectURI = process.env.MONGODB_URI;
console.log('Attempting mongoDB connection');
try {
  mongoose.connect(connectURI, { useNewUrlParser: true });
} catch (error) {
  console.log(error)
}
mongoose.connection.once('open', () => console.log('Connection to MongoDB database was successful!'));
// import all of our models
require('./models/student');
require('./models/course');
require('./models/assignment');
require('./models/gradebook');
require('./models/user');

// Start our app!
app.set('port', process.env.EXPRESS_LOCALPORT || 5000);
const server = app.listen(app.get('port'), () => {
console.log(`Express running → PORT ${server.address().port}`);
});