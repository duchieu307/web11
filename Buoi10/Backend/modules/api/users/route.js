const express = require("express");
const Router = express.Router();

const userController = require("./controller")

Router.get("/", (req, res) => {
    userController
        .getAllUser(req.query.page || 1)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

Router.get("/:id", (req, res) => {
    userController
        .getUserByID(req.params.id)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
})

Router.post("/", (req, res) => {
    userController
        .creatUser(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

Router.put("/:id/username", (req, res) => {
    userController
        .updateUsername(req.params.id, req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
})

Router.put("/:id/email", (req, res) => {
    userController
        .updateUserEmail(req.params.id, req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
})

Router.put("/:id/avatar", (req, res) => {
    userController
        .updateUserAvatar(req.params.id, req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
})

Router.put("/:id/password", (req, res) => {
    userController
        .updateUserPassword(req.params.id, req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
})

Router.delete("/:id", (req, res) => {
    userController
        .deleteUser(req.params.id)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
})


module.exports = Router;