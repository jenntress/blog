//   blog/config/database-seeder.js
//  (use this so we don't spend a bunch of time creating data)

const faker = require('faker');
const Article = require('../models/article');

module.exports = () => {
  //remove all the articles in the database
    Article.remove(err => {
      if(err) {
        console.error(err, "ERROR DELETING ARTICLES")
      } else {
        console.log("OLD ARTICLES DELETED... MAKING NEW ONES")
      }
    })

  for (var i = 0; i < 20; i++){
    var someNewArticle = new Article({
      title: faker.lorem.word(),
      content: faker.lorem.sentences()
    });

  someNewArticle.save();
  }
}
