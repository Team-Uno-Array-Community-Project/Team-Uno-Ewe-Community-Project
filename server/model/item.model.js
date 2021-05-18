let mongoose = require('mongoose');

let itemModel = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        unique: false,
        lowercase: true
    },
    price: {
        type: String,
        required: true,
        unique: false,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    // vendor: {
    //     type: String,
    //     required: true,
    //     unique: false,
    //     lowercase: true
    // },
    // image: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     lowercase: true
    // },
    // featured: {
    //     type: Boolean,
    //     required: true

    // }
});


module.exports = mongoose.model(`item`, itemModel);