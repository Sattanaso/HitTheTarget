module.exports = (dbRequester) => {
	const collection = "users";

	return {
		getUsers: () => {
			return dbRequester.findAll(collection);
		},
		createUser: (user) => {
			return dbRequester.save(collection, user);
		},
		updateImage: (id, imgObj) => {
			const requirementObj = { _id: id },
				updates = { $set: { image: imgObj } };

			return dbRequester.update(collection, requirementObj, updates);
		},
		updatePassword: (id, pass) => {
			const requirementObj = { _id: id },
				updates = { $set: { password: pass } };

			return dbRequester.update(collection, requirementObj, updates);
		},
		updateUser: (id, dataObj) => {
			const requirementObj = { _id: id },
				updates = { $push: dataObj };

			return dbRequester.update(collection, requirementObj, updates);
		},
		getUserById: (id) => {
			const requirementObj = { _id: id };

			return dbRequester.find(collection, requirementObj);
		},
		getUserByUsername: (username) => {
			const requirementObj = { "name": username };

			return dbRequester.find(collection, requirementObj);
		},
		getUserByEmail: (email) => {
			const requirementObj = { "email": email };

			return dbRequester.find(collection, requirementObj);
		}
	}
}
