//File for User Schema

const mongoose = require('mongoose');

//define the schema
const User = new mongoose.Schema({
  _id: String,
  Name: String,
  location: String,
  phone: Number
});

//Export the module
module.exports = mongoose.model('User', User);
