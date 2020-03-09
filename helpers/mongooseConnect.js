const nconf = require('nconf');
const mongoose = require('mongoose');

module.exports = () => {
    
  console.log(nconf.get('database:login') + ':' + nconf.get('database:password'));

  mongoose.connect('mongodb+srv://' 
	+ nconf.get('database:login') 
	+ ':' 
	+ nconf.get('database:password') 
	+ '@cluster0-crix6.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('databased connected');
  }).catch((err) => {
    console.log(err);
  });

};