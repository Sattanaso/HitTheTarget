module.exports = (dbRequester) => {
	const userData = require("./user.data")(dbRequester);

	return {
		userData
	}
}