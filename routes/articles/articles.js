//  blog/routes/articles/articles.js       (sample at routes/superheroes.js )

var Article = require('../../models/article');


//******* GET ********
exports.getAll = (req, res) => { //exporting this out to our index
   Article.find(function(err,data){
     if(err){
       console.log(err);
     }else {
       res.json(data);
     }
   });
};

//****** GET by ID *****
exports.getByID = (req, res) => {
  Article.findById(req.params.article_id, function(err, data){
    if(err){
      console.log(err);
    }else{
      res.json(data);
    }
  });
};

//****** POST ********
exports.createArticle = (req, res) => {
  var newArticle = new Article();
  newArticle.loadData(req.body);
  newArticle.save(function(err,arty){
    if (err) throw err;
    res.json(arty);
  });
};

//***** DELETE ********
exports.removeArticle = (req, res) => {
  Article.remove({_id: req.params.article_id}, function (err){
    if(err){
      console.log(err)
    }else{
      Article.find(function(err, articles){
        if (err) res.json({error: err});//gives us an object to play with if it doesn't work.
                 res.send({message:"article successfully removed!", data: articles});
      });
    }
  });
};

//****** PUT *******
exports.updateArticle = (req, res) => {
 Article.findById(req.params.article_id, function(err, entry){
   if(!entry) return res.status(404).send(err, "Can't find that article");
   entry.loadData(req.body);
   entry.save(function(e){
     if(e){
       res.status(500).send(e);
     }else{
       res.json(entry);
     }
   });
 });
};
