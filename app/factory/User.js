module.exports = () => {
	class UserModel {
		constructor() { }

		create(newName, newEmail, hashedPassword) {
			return {
				name: newName,
				emil: newEmail,
				hashedPassword: hashedPassword
			}
		}
	}

	const userModel = new UserModel();
	return userModel
}
