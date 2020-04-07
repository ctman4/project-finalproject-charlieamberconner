//File for List schema

const mongoose = require('mongoose');

//Define the schema
const List = new mongoose.Schema({
  _id: String,
  customerName: String,
  location: String,
  items: [String],
  phone: String
});

//Export the module
module.exports = mongoose.model('List', List);
