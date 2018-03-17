const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const fileController = require("./filecontroller")

let app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");



app.get("/", (req,res) => {
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

app.post("/", (req,res) => {
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




app.get("/ask", (req,res) => {
    res.render("ask")
});

app.post("/ask", (req, res) => {
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



app.listen(5000, (err) => {
    if (err) {console.log(err)};
    console.log("Success. App listen at 5000");
})
