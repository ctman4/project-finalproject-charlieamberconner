//File for List schema

const mongoose = require('mongoose');

//Define the schema
const List = new mongoose.Schema({
  _id: String,
  CustomerName: String,
  location: String,
  items: [String],
  budget: String,
  timePosted: Date,
  fulfilled: String,
  comments: [[String]]
});

// Convert incoming time posted strings to Date objects
List.path('time').set(function(timePosted) {
  return new Date(`${time}`);
});

// Provide a 12-hour time string as a virtual property
List.virtual('time12').get(function() {
  return this.time.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
});

// Provide a 24-hour time string as a virtual property
List.virtual('time24').get(function() {
  return this.time.toLocaleTimeString('en-US', {hour12: false});
});

//Export the module
module.exports = mongoose.model('List', List);
