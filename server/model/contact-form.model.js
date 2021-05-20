let mongoose = require('mongoose');

let contactFormModel = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: false
	},
	topic: {
		type: String,
		required: true,
		unique: false,
		lowercase: false
	},
	message: {
		type: String,
		required: true,
		unique: false,
		lowercase: false
	},

});

module.exports = mongoose.model(`form`, contactFormModel);
