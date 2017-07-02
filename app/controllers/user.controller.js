module.exports = (userData) => {
	return {
		getUsers: (req, res, next) => {
			userData.getUsers()
				.then((users) => {
					res.send(users);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
}