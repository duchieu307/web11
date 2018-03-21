const express = require("express");
const Router = express.Router() ;
const fileController = require("../filecontroller")

Router.get("/", (req,res) => {
    let questionList = [...fileController.readFileSync("./data.json") ];
    let randomItem = questionList[Math.floor(Math.random() * questionList.length)];
    if (questionList.length == 0) { 
        res.render("extrapage")
    }
    else {
        let i = 0 ;
        let k = 0 ;
        randomItem.questionAnswer.forEach(function(current_value, index, initial_array) {
            if (current_value == "yes") {
                    i = i +1 ;
                }  
            if (current_value == "no") {
                k = k +1 ;
                };        
            });
            
        // alert(randomItem[0]);
        res.render("mainpage", {
            question : randomItem.questionContent,
            yes : i,
            no: k ,
        });
        }
   
    
});

Router.post("/", (req,res) => {
    let questionList = [...fileController.readFileSync("./data.json") ];
    let randomItem = questionList[Math.floor(Math.random() * questionList.length)];
    let anotherAnswer = req.body.answer;
    randomItem.questionAnswer.push(anotherAnswer);
    let i = 0;
    randomItem.questionAnswer.forEach(function(current_value, index, initial_array) {
        if (current_value == anotherAnswer) {
                i = i +1 ;
            }   
        });
    fileController.writeFile("./data.json", questionList, (err) => {
        if (err) {console.log(err)};
        res.render("answer", {
            question : randomItem.questionContent,
            answer : i
        }); 
    });
    
});

module.exports= Router ;
