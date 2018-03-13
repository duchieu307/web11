const express = require("express");
const path = require("path");

let app = express();
let app2 = express();

app.use(express.static("public"));



// app.get('/', (req,res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.get('/frontendpractice', (req,res) => {
    res.sendFile(__dirname + "/public/dacap.html")
});

app.get('/flexbox', (req,res) => {
    res.sendFile(__dirname + "/public/flex.html")
});

app.listen(5000, (err)=> {
    if (err)(console.log(err));
    console.log("Dep trai vl");
});

