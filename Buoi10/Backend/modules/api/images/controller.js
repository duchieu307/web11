
const imageModels = require("./model");

const creatImage = ({ imageUrl, title, description, createdBy }) =>
    new Promise((resolve, reject) => {
        imageModels.create({
            imageUrl,
            title,
            description,
            createdBy,
        })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const getAllImages = page => new Promise((resolve, reject) => {
    imageModels.find({
        "active": true
    })
        .skip((page - 1) * 20)
        .limit(20)
        .select("_id imageUrl title description createdAt createdBy view like")
        .exec()
        .then(data => resolve({ id: data._id }))
        .catch(err => reject(err))
});

const getImagesByID = id => new Promise((resolve, reject) => {
    imageModels.find({
        "active": true,
        _id: id
    })
        .select("_id imageUrl title description createdAt createdBy view like")
        .exec()
        .then(data => resolve({ id: data._id }))
        .catch(err => reject(err))
})

const updateImage = (id, { imageUrl, title, description }) =>
    new Promise((resolve, reject) => {
        imageModels.update({
            _id: id
        }, {
                imageUrl,
                title,
                description,
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const deleteImage = id => new Promise((resolve, reject) => {
    imageModels.update({
        _id: id
    }, {
            active: false
        })
        .then(data => resolve({ id: data._id }))
        .catch(err => reject(err))
})


const addComment = (id, { createdBy, content }) =>
    new Promise((resolve, reject) => {
        imageModels.update({
            _id: id
        }, {
                $push: { comment: { createdBy, content } }
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err));
    });

const deleteComment = (id, idComment) =>
    new Promise((resolve, reject) => {
        imageModels.update({
            _id: id
        }, {
                $pull: { comment: { _id: idComment } } // chon comment co id = idComment
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err));
    })

const addLike = (id) =>
    new Promise((resolve, reject) => {
        imageModels.update({
            _id: id,
        }, {
                $inc: { like: +1 }   //mongodb doc update operators
            })
            .then(data => resolve(console.log(data)))
            .catch(err => reject(err));
    })

const unLike = (id) =>
    new Promise((resolve, reject) => {
        imageModels.update({
            _id: id,
        }, {
                $inc: { like: -1 }   //mongodb doc update operators
            })
            .then(data => resolve(console.log(data)))
            .catch(err => reject(err));
    })


module.exports = {
    creatImage,
    getAllImages,
    updateImage,
    deleteImage,
    getImagesByID,
    addComment,
    addLike,
    unLike,
    deleteComment
}