let mongoose = require('mongoose');

let blogModel = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: false,
		lowercase: false
	},

	text: {
		type: String,
		required: true,
		unique: false,
		lowercase: false
	},
	image: {
		type: String,
		required: true,
		unique: false,
		lowercase: false
	},
	author: {
		type: String,
		required: true,
		unique: false,
		lowercase: false
	},
	date: {
		type: String,
		required: true,
		unique: false,
		lowercase: false
	},

});

module.exports = mongoose.model(`blog`, blogModel);
