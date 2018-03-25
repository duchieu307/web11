const QuestionSchema = require("../models/questionSchema");

//ham tao cau hoi moi truyen vao 1 bien la cau hoi roi tao du lieu tren database
let create = (question) => {
    let newQuestion = {
        questionContent : question,
        yes : 0 ,
        no: 0,
    }
    QuestionSchema.create(newQuestion)
    
};


//ham random 1 cau hoi truyen vao 1 bien callback co the la (err,data) sau do tra ve callback la data
let getRandomQuestion = (cb) => {
    
    QuestionSchema.aggregate(
        [ {$sample : {size: 1} } ]
    
    ).exec((err,doc) => {
        if (err) return cb(err);
        else {
            return cb(null,doc)};

    })
    
}

//ham tim kiem theo id 
let find = (id,callback) => {
    QuestionSchema.findById(id,(err,data) => { //truyen vao 1 id lay ra data
        if (err) console.log(err);
        callback(data) //gan ham callback voi data tim dc
    });
}


//ham update
let Update = (answer , id ) => { //lay 2 bien la cau tra loi va id
    if (answer == "yes") { // neu tra loi co
        QuestionSchema.findById(id, (err,data) => { //tim ham theo id
            console.log(data)
            if(err) console.log(err);
            data.yes = data.yes + 1; //da tra ve ham va dang thao tac khi an nut yes thi gia tri dap an tang len 1
            data.save((err) => { // luu bien moi vao
                if (err) console.log(err);
                console.log("Updated")
            });
        });
    };
    if (answer == "no") { // tuong tu tren
        QuestionSchema.findById(id, (err,data) => {
            if(err) console.log(err);
            console.log(data)
            data.no = data.no + 1;
            data.save((err) => {
                if (err) console.log(err);
                console.log("Updated")
            });
        });
    };

}


//xuat cac ham ra de dung
module.exports = {
    create,
    getRandomQuestion,
    find,
    Update
}
