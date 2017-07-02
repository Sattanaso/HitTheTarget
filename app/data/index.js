module.exports = (mongo) => {
	const userData = require("./user.data")(mongo);

	return {
		userData
	}
}