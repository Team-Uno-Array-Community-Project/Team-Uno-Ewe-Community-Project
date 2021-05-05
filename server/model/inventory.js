let mongoose = require('mongoose');

let inventorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    item:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    price: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    vendor: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    image: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
});




module.exports = mongoose.model('item', inventorySchema);