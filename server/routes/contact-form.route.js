const express = require('express');
const router = express.Router();
let ContactFormModel = require('../model/contact-form.model');

router.get('/', (req, res) => {
    ContactFormModel.find({}).then(document => {
        res.status(200).json(document);
        console.log(document);
    }).catch(err => {
        res.status(404).send(`Contact form not found: ${err}`);
    });
});

router.post('/post', (req, res) => {
    const { email, topic, message } = req.body;

    let newItemDocument = new ContactFormModel(
        { email, topic, message });
    newItemDocument.save().then(document => {
        console.log(document);
        res.status(200).json(document);
    }).catch(err => {
        console.error(err);
        res.status(400).send(`Failed to add new contact form`);
    });
});

router.delete('/', (req, res) => {
    const { deleteItem } = req.body;

    ContactFormModel.findOneAndDelete({
        deleteItem,
    })
        .then((document) => {
            res.status(200).send(`Form successfully deleted!`);
        }).catch((err) => {
            res.status(404).send(`Form deletion was unsuccessful.`);
        });
});

module.exports = router;
