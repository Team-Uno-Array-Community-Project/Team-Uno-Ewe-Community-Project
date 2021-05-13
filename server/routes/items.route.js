const express = require('express');
const router = express.Router();
let ItemModel = require('../model/item.model');

router.get('/', (req, res) => {
    ItemModel.find({}).then(document => {
        res.status(200).json(document);
        console.log(document);
    }).catch(err => {
        res.status(404).send(`Items not found: ${err}`);
    });
});

router.post('/post', (req, res) => {
    const item = req.body;

    let newItemDocument = new ItemModel(
        item);
    newItemDocument.save().then(document => {
        console.log(document);
        res.status(200).send(`Congrats, new item added!`);
    }).catch(err => {
        res.status(400).send(`Failed to add new item.`);
    });
});

router.delete('/', (req, res) => {
    const { deleteItem } = req.body;

    ItemModel.findOneAndDelete({
        deleteItem,
    })
        .then((document) => {
            res.status(200).send(`Item successfully deleted!`);
        }).catch((err) => {
            res.status(404).send(`Item deletion was unsuccessful.`);
        });
});

module.exports = router;
