module.exports = (obj) => {
	if (!obj) {
		throw new Error("No object to create. Put a string 'user' or some other.");
	}

	if (typeof obj === "string") {
		if (obj === "user") {
			return require("./User");
		}

		return require("./Object");
	}

	throw new Error("Wrong input! It must be a string.");
}