const nconf = require('../config');
const mongoose = require('mongoose');

console.log(nconf.get('database:login') + ':' + nconf.get('database:password'));

const connectString = `mongodb+srv://${nconf.get('database:login')}:${nconf.get('database:password')}@cluster0-crix6.mongodb.net/test`;

mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('databased connected');
}).catch((err) => {
  console.log(err);
});

module.exports = mongoose;