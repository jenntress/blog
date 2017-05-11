//  blog/routes/articles.js       (sample at routes/superheroes.js )

var express = require('express');
var Router  = express.Router();
var Article = require('../models/article');


//******* GET ********
Router.route('/')
 .get(function(req,res){
   Article.find(function(err,data){
     if(err){
       console.log(err);
     }else {
       res.json(data);
     }
   });
 });

 //****** GET by ID *****
 Router.route('/:article_id')
  .get(function(req, res){
    Article.findById(req.params.article_id, function(err, data){
      if(err){
        console.log(err);
      }else{
        res.json(data);
      }
    });
  });

 //****** POST ********
 Router.route('/')
  .post(function(req,res){
    var newArticle = new Article();
    newArticle.loadData(req.body);
    newArticle.save(function(err,sh){
      if(err){
         console.log(err)
      }else{
        res.json(sh)
      }
    });
  })

  module.exports = Router;
