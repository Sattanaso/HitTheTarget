const mongoose = require("mongoose");

module.exports = (envParams) => {
	const uri = envParams.db;
	mongoose.Promise = global.Promise;
	mongoose.connect(uri);

	const db = mongoose.connection;

	db.on("error", (err) => {
		console.error(`Database connection error: ${err}`);
	});
	db.once("open", (err) => {
		if (err) {
			console.error(`Database could not be opened: ${err}`);
			return;
		}

		console.log("Database up and running...");
	});
};
