const express = require("express");
const Router = express.Router() ;
const QuestionController = require('../controllers/questionController');

Router.get("/:id/:answer", (req,res) => { //lay id va cau tra loi
    let id = req.params.id;
    let answer = req.params.answer;   
    QuestionController.Update(answer,id); //ham update cua QuestionController
    res.redirect("/answerPage/" + id) //khi update xong se dan toi trang chua cau hoi va gui ca id cua cau hoi vua update
    // res.render("answerPage")
})

module.exports = Router ; // xuat Router ra