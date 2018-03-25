const express = require("express");
const Router = express.Router() ;
const QuestionController = require('../controllers/questionController');

Router.get("/:id/:answer", (req,res) => {
    let id = req.params.id;
    let answer = req.params.answer;   
    console.log(id);
    console.log(answer);
    QuestionController.Update(answer,id);
    res.redirect("/answerPage/" + id)
    // res.render("answerPage")
})

module.exports = Router ;