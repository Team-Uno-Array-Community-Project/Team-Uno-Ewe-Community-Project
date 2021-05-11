const router = require('express').Router();
let BlogSchemaModel = require('../model/BlogSchema');
let InventorySchemaModel = require('../model/InventorySchema');

router.get('/',(req,res) =>{
BlogSchemaModel.find({}).then(document => {
    res.status(200).json(document);
    console.log(document);
}).catch(err => {
    res.status(404).send(`collection not found: ${err}`);
});
});

router.post('/post', (req,res) => {
    const posts =req.body;
    
    let newPostDocument =new BlogSchemaModel(
        posts );
        newPostDocument.save().then(document => {
            console.log(document);
            res.status(200).send(`created post`);
        }).catch(err => {
            res.status(400).send(`failed to create post`);
        });
        });

        router.get('/',(req,res) =>{
            InventorySchemaModel.find({}).then(document => {
                res.status(200).json(document);
                console.log(document);
            }).catch(err => {
                res.status(404).send(`collection not found: ${err}`);
            });
            });
            
            router.post('/item', (req,res) => {
                const items =req.body;
                
                let newItemDocument =new InventorySchemaModel(
                    items );
                    newItemDocument.save().then(document => {
                        console.log(document);
                        res.status(200).send(`created item`);
                    }).catch(err => {
                        res.status(400).send(`failed to create item`);
                    });
                    });
            
module.exports = router;
