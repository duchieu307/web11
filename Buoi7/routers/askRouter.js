const express = require("express");
const Router = express.Router() ;
const fileController = require("../filecontroller");

const questionController = require("../controllers/questionController");

Router.get("/", (req,res) => {
    res.render("ask")
})

Router.post('/', (req,res) => {
    questionController.create(req.body.question) //tao va post cau hoi vao database
    res.render("ask")
});

module.exports = Router ; // xuat Router ra