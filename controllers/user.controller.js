module.exports = (userData) => {
	return {
		signUp: (req, res, next) => {
			let id = "5914370637843824a8637921";

			userData.getUserById(id)
				.then((user) => {
					console.log(user);
				});
		},
		contactUs: (req, res, next) => {
			res.render("contact-us", {});
		},
		changePassword: (req, res, next) => {
			res.render("change-password", {});
		},
		signIn: (req, res, next) => {
			res.render("sign-in", {});
		}
	}
}