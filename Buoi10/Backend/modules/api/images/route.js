const express = require('express');
const Router = express.Router();

const imageController = require("./controller");

Router.get("/", (req, res) => {
    imageController
        .getAllImages(req.query.page || 1)
        .then(images => res.send(images))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

Router.get("/:id", (req, res) => {
    imageController
        .getImagesByID(req.params.id)
        .then(images => res.send(images))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

Router.post("/", (req, res) => {
    imageController
        .creatImage(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

Router.post("/:id/comment", (req, res) => {
    imageController
        .addComment(req.params.id, req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
})

Router.put("/:id", (req, res) => {
    imageController
        .updateImage(req.params.id, req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

Router.put("/:id/like", (req, res) => {
    imageController
        .addLike(req.params.id)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
})

Router.put("/:id/unlike", (req, res) => {
    imageController
        .unLike(req.params.id)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
})

Router.delete("/:id", (req, res) => {
    imageController
        .deleteImage(req.params.id)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
})

Router.delete("/:id/deletecomment/:idComment", (req, res) => {
    imageController
        .deleteComment(req.params.id, req.params.idComment)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
})

module.exports = Router;