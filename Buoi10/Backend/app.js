const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const imageRouter = require("./modules/api/images/route")
const userRouter = require("./modules/api/users/route")

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/images", imageRouter)
app.use("/api/users", userRouter)

app.get("/", (req, res) => {
    res.send("OK")
})

mongoose.connect("mongodb://localhost:27017/tk-hotgirls", err => {
    if (err) console.log(err);
    else console.log("Database Connected")
})

const port = process.env.port || 5000;

app.listen(port, err => {
    if (err) console.log(err);
    console.log("Server listened at " + port)
})