// Jan 1st 1970 00:00:00 am is 'zero'; time is measured in ms from this moment

var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// console.log(date.format('MMM Do, YYYY'));

var date = moment();
console.log(date.format('h:mm a'));