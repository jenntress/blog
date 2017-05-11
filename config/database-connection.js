//  blog/config/database-connection.js

var mongoose = require('mongoose');
require('dotenv').config() //a library they're having us use

module.exports = () => {
  if (process.env.NODE_ENV === 'test' ) {
    mongoose.connect("mongodb://127.0.0.1:27017/test-blog");
    console.log("TEST DATABASE OPERATIONAL");
  } else {
    mongoose.connect("mongodb://localhost/blog")
    console.log("DEV DATABASE OPERATIONAL");
  }

}
