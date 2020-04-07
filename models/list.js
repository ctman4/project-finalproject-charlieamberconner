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

// Convert incoming time strings to Date objects
Section.path('time').set(function(time) {
  return new Date(`1/15/2020 ${time}`);
});

// Provide a 12-hour time string as a virtual property
Section.virtual('time12').get(function() {
  return this.time.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
});

// Provide a 24-hour time string as a virtual property
Section.virtual('time24').get(function() {
  return this.time.toLocaleTimeString('en-US', {hour12: false});
});

//Export the module
module.exports = mongoose.model('List', List);
