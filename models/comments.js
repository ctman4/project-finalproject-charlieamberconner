//File for Comment schema

const mongoose = require('mongoose');

//Define the schema
const Comment = new mongoose.Schema({
  list: String,
  customerID: String,
  text: String
});


//Export the module
module.exports = mongoose.model('Comment', Comment);
