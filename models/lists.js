//File for List schema

const mongoose = require('mongoose');

//Define the schema
const List = new mongoose.Schema({
  title: String,
  customerID: String,
  customerName:String,
  items: [String],
  timePosted: Date,
  claimedBy: String,
  fulfilled: String,
});


//Export the module
module.exports = mongoose.model('List', List);
