const mongoose = require('mongoose');
const connect = require('./db');
const List = require('./models/list');
const User = require('./models/user');

//connect to the database
connect();

/*
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
*/

//model a collection of Lists
const lists = [
  new List({
    _id: 'charlestirrell99',
    customerName: 'Charles Tirrell',
    location: 'Marion, MA',
    items: ['Bananas','Carrots','Beef','Orange Juice','Doritos'],
    budget: '100.00',
    timePosted: '4/7/2020 4:19 PM',
    fulfilled: 'No',
    comments: [ [ 'amberlapata1','what kind of cheese would you like?'],['charlietirrell99','Swiss cheese please'] ]
  })
];


/*
const User = new mongoose.Schema({
  _id: String,
  Name: [String],
  location: String,
  available: String,
  phone: Number
});
*/

const users = [
  new User({
    _id: 'charlietirrell99',
    Name: 'Charles Tirrell',
    location: 'Marion, MA',
    phone: '5087285505'
  }),

  new User({
    _id: 'amberlapata1',
    Name: 'Amber Lapata',
    location: 'Boston, MA',
    phone: '5087281010'
  }),

  new User({
    _id: 'connershumway4',
    Name: 'Conner Shumway',
    location: 'Boston, MA',
    phone: '5087891234'
  })
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(users.map(user => user.save())))
  .then(() => Promise.all(lists.map(list => list.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));