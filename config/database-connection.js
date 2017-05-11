//  blog/config/database-connection.js

var mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/blog");
  console.log("Mongoose Database Running!")
}
