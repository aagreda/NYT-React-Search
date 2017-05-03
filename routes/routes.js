//Require Dependencies
var path = require("path");
var db = require("../controller/connection.js");
var schema = require("../models/schema.js");

module.exports = function(app) {
//get all of the articles
       app.get("/articles", function(req, res) {
          schema.find({}).then(function(articles) {
            res.send(articles);
        }).catch(function(err) {
            console.log(err);
        });
    });

    //update the schema to save the article
    app.post("/articles", function(req, res) {
        var savearticle = req.body;
          schema.findOne({_id: savearticle._id}).then(function(result) {
            res.json(result);
        }).catch(function(err) {
            console.log(err);
        });
    });
//delete the article based on id and update the article list
      app.delete("/articles/:id", function(req, res) {
        var deleteArticles = req.params._id;
          schema.delete({_id: deleteArticles}).then(function(articles) {
            res.send(articles);
        }).catch(function(err) {
            console.log(err);
        });
    });
};