const express = require("express");
const Router = express.Router() ;
const MongoClient = require("mongodb");
const QuestionController = require('../controllers/questionController');

Router.get("/", (req,res) => {
    QuestionController.getRandomQuestion((err,data) => {
        if (err) res.send(err);
        else console.log(data[0].questionContent);
        res.render("homepage", {
            question : data[0].questionContent,
            id : data[0]._id,
        });
        
    });
    
    
        
    
});

module.exports = Router ;