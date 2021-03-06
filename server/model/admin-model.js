let mongoose = require('mongoose');

let adminSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true,
		unique: true,
		lowercase: false
	},
}); 

module.exports = mongoose.model('admin', adminSchema);