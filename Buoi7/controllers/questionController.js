const QuestionSchema = require("../models/questionSchema");

let create = (question) => {
    let newQuestion = {
        questionContent : question,
        yes : 0 ,
        no: 0,
    }
    QuestionSchema.create(newQuestion)
    
};

let getRandomQuestion = (cb) => {
    
    QuestionSchema.aggregate(
        [ {$sample : {size: 1} } ]
    
    ).exec((err,doc) => {
        if (err) return cb(err);
        else {
            return cb(null,doc)};

    })
    
}

let find = (id,callback) => {
    QuestionSchema.findById(id,(err,data) => {
        if (err) console.log(err);
        callback(data)
    });
}

let Update = (answer , id ) => {
    if (answer == "yes") {
        QuestionSchema.findById(id, (err,data) => {
            console.log(data)
            if(err) console.log(err);
            data.yes = data.yes + 1;
            data.save((err) => {
                if (err) console.log(err);
                console.log("Updated")
            });
        });
    };
    if (answer == "no") {
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

module.exports = {
    create,
    getRandomQuestion,
    find,
    Update
}
