
const userModels = require("./model");

const creatUser = ({ avatarURL, Username, Password, Email }) =>
    new Promise((resolve, reject) => {
        userModels.create({
            avatarURL,
            Username,
            Password,
            Email
        })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const getAllUser = page =>
    new Promise((resolve, reject) => {
        userModels.find({
            "active": true
        })
            .skip((page - 1) * 20)
            .limit(20)
            .select("_id avatarURL Username Email")
            .exec()
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const getUserByID = (id) =>
    new Promise((resolve, reject) => {
        userModels.find({
            "active": true,
            _id: id
        })
            .select("_id avatarURL Username Email")
            .exec()
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const updateUsername = (id, { Username }) =>
    new Promise((resolve, reject) => {
        userModels.update({
            _id: id
        }, {
                Username
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    })

const updateUserEmail = (id, Email) =>
    new Promise((resolve, reject) => {
        userModels.update({
            _id: id
        }, {
                Email
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    })

const updateUserAvatar = (id, avatarURL) =>
    new Promise((resolve, reject) => {
        userModels.update({
            _id: id
        }, {
                avatarURL
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    })

const updateUserPassword = (id, Password) =>
    new Promise((resolve, reject) => {
        userModels.update({
            _id: id
        }, {
                Password
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    })

const deleteUser = (id) =>
    new Promise((resolve, reject) => {
        userModels.update({
            _id: id
        }, {
                active: false
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    })

module.exports = {
    creatUser,
    getAllUser,
    getUserByID,
    updateUsername,
    updateUserEmail,
    updateUserAvatar,
    updateUserPassword,
    deleteUser
}