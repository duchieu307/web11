const express = require("express");
const path = require("path");


let app = express();

app.use(express.static('public'));

// app.get('/', (req,res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.get('/git', (req,res) => {
  res.send("Hello Hellooooooooooooo");
});

app.get('/blah', (req,res) => {
  res.send("Hello Hello Hello");
});

app.listen(6969, (err)=> {
  if (err)(console.log(err));
  console.log("Dep trai vl");
});