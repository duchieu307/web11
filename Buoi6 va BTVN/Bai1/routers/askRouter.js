const express = require("express");
const Router = express.Router() ;
const fileController = require("../filecontroller")


Router.get("/", (req,res) => {
    res.render("ask")
});

Router.post("/", (req, res) => {
    let questionList= [...fileController.readFileSync("./data.json") ];
    let newQuestion = {
        id: questionList.length + 1,
        questionContent: req.body.question,
        };
    newQuestion.questionAnswer = [];
    questionAnswer = req.body.answer ;
    newQuestion.questionAnswer.push(questionAnswer);
    questionList.push(newQuestion);
    fileController.writeFile("./data.json", questionList, (err) => {
        if (err) {console.log(err)};
        res.redirect("/ask");
    });
});

module.exports = Router ;