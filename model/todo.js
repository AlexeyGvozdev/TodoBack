const {Schema, model} = require('mongoose');

const schema = new Schema({
  title: String,
  text: String,
  completed: Boolean
});

module.exports = model('Todo', schema);

