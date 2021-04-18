const response = require('../utils/response');
const { user } = require('../models/dataSchema');
const { uuid } = require('uuidv4');
async function hello(req, res) {
	try {
		// return res.send(';hello');
		return response.sendResponse(res, 'Hello');
	} catch (error) {
		console.log(error);
		return response.sendError(res, error);
	}
}

async function postData(req, res) {
	try {
		const name = req.body.name.trim();
		const email = req.body.email;
		const newObject = new user({
			userID: uuid(),
			name: name,
			email: email,
		});
		result = await newObject.save();

		if (!result) {
			return res.send({
				success: false,
				data: 'An error occured',
			});
		}
		return res.send({ success: true, data: 'Added User successfully' });
		// return response.sendSuccess(res, 'recieved Data');
	} catch (error) {
		response.sendError(error);
	}
}
module.exports = {
	hello,
	postData,
};
