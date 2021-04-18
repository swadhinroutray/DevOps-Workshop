const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
	userID: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
});

const user = mongoose.model('users', dataSchema);

module.exports = {
	user,
};
