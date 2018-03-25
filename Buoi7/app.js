const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path") ;
const mongoose = require("mongoose");

let app = express();
const  homeRouter = require("./routers/homeRouter")
const askRouter = require("./routers/askRouter")
const answerRouter = require('./routers/answerRouter')
const answerPage = require("./routers/answerPageRouter")

app.use(bodyParser.urlencoded({extended: false}));

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/", homeRouter);
app.use("/ask", askRouter);
app.use("/answers", answerRouter);
app.use("/answerPage", answerPage);

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/rework", (err) => {
    if (err) console.log(err);
    console.log("Database connected");
})

app.listen(5000, (err) => {
    if (err) {console.lor(err)};
    console.log("App listen at 5000")
})