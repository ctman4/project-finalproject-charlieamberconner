//File for List schema

const mongoose = require('mongoose');

//Define the schema
const List = new mongoose.Schema({
  title: String,
  customerID: String,
  items: [String],
  timePosted: Date,
  claimedBy: String,
  fulfilled: String,
  comments: [[String]]
});

/*
// Provide a 12-hour time string as a virtual property
List.virtual('time12').get(function() {
  return this.time.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
});

// Provide a 24-hour time string as a virtual property
List.virtual('time24').get(function() {
  return this.time.toLocaleTimeString('en-US', {hour12: false});
});
*/

//Export the module
module.exports = mongoose.model('List', List);
