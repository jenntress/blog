// blog/models/comment.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: {type: String}
});

CommentSchema.methods.loadData = function(data){
  this.content = data.content;
}

module.exports = mongoose.model('Comment', CommentSchema);
