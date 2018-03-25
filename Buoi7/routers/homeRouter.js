//cac thu vien
const express = require("express");
const Router = express.Router() ; //yeu cau Router
const QuestionController = require('../controllers/questionController'); //yeu cau file chua cac ham dieu khien

Router.get("/", (req,res) => {
    QuestionController.getRandomQuestion((err,data) => { //lay 1 cau ngau nhien
        if (err) res.send(err); // neu co loi thi in ra loi
        if (data.length == 0) res.render("extraPage") //neu cau hoi day rong thi lien ket den trang nhap cau hoi
        if (data.length != 0 ) { // khong thi hien thi cau hoi
            res.render("homepage", {
                question : data[0].questionContent,
                id : data[0]._id,
            });
            
        }
        
        
    });
    
    
        
    
});

module.exports = Router ; // xuat Router ra