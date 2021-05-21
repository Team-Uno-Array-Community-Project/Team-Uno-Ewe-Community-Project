const express = require('express');
const { findOneAndUpdate } = require('../model/item.model');
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
    const { item, price, description, vendor, image, featured } = req.body;

    let newItemDocument = new ItemModel(
        { item, price, description, vendor, image, featured });
    newItemDocument.save().then(document => {
        console.log(document);
        res.status(200).send(`Congrats, new item added!`);
    }).catch(err => {
        console.error(err);
        res.status(400).send(`Failed to add new item.`);
    });
});

// router.patch('/updateItem', (req, res) => {
//     ItemModel
       
//     .findOneAndUpdate({'vendor': 'woolfolk'}, {$set:'featured'}, {new: true, useFindAndModify: false})
//     .then(document => {
//         console.log(document);
//         res.status(200).send(`Congrats, new item featured!`);
//     }).catch(err => {
//         console.error(err);
//         res.status(400).send(`Failed to add new item featured.`);
//     });
// });

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
router.patch('/patch', (req, res) => {
    // const query = {'vendor': 'woolfolk'};
    // const newFeaturedStatus = {'featured': false};
    const {_id, newFeaturedStatus } = req.body;

    let updatedUserDocument = {};
    if (newFeaturedStatus) updatedUserDocument.featuredStatus = newFeaturedStatus;
   

    ItemModel.findOneAndUpdate({
        _id: _id //searching by this
    }, {
        featured: newFeaturedStatus //updating it to this
    }, {
        new: true //got the document in the promise
    }).then(document => {
        res.status(200).json(document);
    }).catch(err => {
        console.error(err);
        res.status(404).send('did not update');
    });
});

module.exports = router;
