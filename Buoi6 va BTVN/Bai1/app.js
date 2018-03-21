const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const fileController = require("./filecontroller")

let app = express();
const homeRouter =  require("./routers/homeRouter");
const askRouter =  require("./routers/askRouter")


app.use(bodyParser.urlencoded({extended: false}));

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/", homeRouter);


app.use("/ask", askRouter);

app.use(express.static('public'));

app.listen(5000, (err) => {
    if (err) {console.log(err)};
    console.log("Success. App listen at 5000");
})
