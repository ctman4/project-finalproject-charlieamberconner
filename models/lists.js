//File for List schema

const mongoose = require('mongoose');

//Define the schema
const List = new mongoose.Schema({
<<<<<<< HEAD
  _id: String,
=======
  title: String,
  customerID: String,
>>>>>>> 688718949af43623ca71175ab2c1cab147d4ce0a
  CustomerName: String,
  location: String,
  items: [String],
  budget: String,
  timePosted: Date,
  claimedBy: String,
  comments: [[String]]
});

// Convert incoming time posted strings to Date objects
List.path('timePosted').set(function(timePosted) {
  return new Date(`${timePosted}`);
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
