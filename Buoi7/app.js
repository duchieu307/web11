// yeu cau thu vien bat buoc phai co
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path") ;
const mongoose = require("mongoose");

//yeu cau Router
let app = express();
const  homeRouter = require("./routers/homeRouter")
const askRouter = require("./routers/askRouter")
const answerRouter = require('./routers/answerRouter')
const answerPage = require("./routers/answerPageRouter")

//de dung req.body.(variable)
app.use(bodyParser.urlencoded({extended: false}));

//giao dien
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//cac Router
app.use("/", homeRouter);
app.use("/ask", askRouter);
app.use("/answers", answerRouter);
app.use("/answerPage", answerPage);

//thu vien chua css va html
app.use(express.static("public"));

//database
mongoose.connect("mongodb://localhost/rework", (err) => {
    if (err) console.log(err);
    console.log("Database connected");
})

//dia chi http://127.0.0.1:5000
app.listen(5000, (err) => {
    if (err) {console.lor(err)};
    console.log("App listen at 5000")
})