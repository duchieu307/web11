const express = require("express");
const Router = express.Router() ;
const QuestionController = require('../controllers/questionController');


Router.get("/:id", (req,res) => {
    let id = req.params.id;
    console.log(id)
    QuestionController.find(id,(data) => {
        let sum = data.yes + data.no;
        let percentYes = data.yes/sum *100 ;
        let percentNo = 100 - percentYes;
        if (data.yes == 0 && data.no == 0 ) {
            let percentYes = 50 ;
            let percentNo = 50 ;
            res.render("answerPage", {
                question : data.questionContent,
                percentYes : percentYes ,
                percentNo: percentNo
            })
        }

        res.render("answerPage", {
            question : data.questionContent,
            vote : data.yes + data.no,
            yes : data.yes,
            no: data.no,
            percentYes : percentYes.toFixed(2) + "%" ,
            percentNo: percentNo.toFixed(2) + "%",
        })
    })
    
})



module.exports = Router ;