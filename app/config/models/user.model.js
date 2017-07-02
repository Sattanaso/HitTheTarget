module.exports = (db) => {
	const schema = new db.Schema({
		id: Number,
		name: String,
		email: String,
		hashedPassword: String,
		image: String
	});

	const User = new db.Model('users', schema);

	return User;
}