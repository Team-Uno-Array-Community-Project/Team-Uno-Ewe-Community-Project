const express = require('express');
const router = express.Router();
let BlogModel = require('../model/blog.model');

router.get('/', (req, res) => {
    BlogModel.find({}).then(document => {
        res.status(200).json(document);
        console.log(document);
    }).catch(err => {
        res.status(404).send(`Blogs not found: ${err}`);
    });
});

router.post('/post', (req, res) => {
    const posts = req.body;

    let newPostDocument = new BlogModel(
        posts);
    newPostDocument.save().then(document => {
        console.log(document);
        res.status(200).send(`Congrats, new post created!`);
    }).catch(err => {
        res.status(400).send(`Failed to create new post.`);
    });
});

router.delete('/', (req, res) => {
    const { deletePost } = req.body;

    BlogModel.findOneAndDelete({
        deletePost,
    })
        .then((document) => {
            res.status(200).send(`Post successfully deleted!`);
        }).catch((err) => {
            res.status(404).send(`Post deletion was unsuccessful.`);
        });
});

module.exports = router;
