module.exports = () => {
	return {
		home: (req, res, next) => {
			res.render("home", {});
		},
		about: (req, res, next) => {
			res.render("about", {});
		},
		news: (req, res, next) => {
			res.render("news", {});
		},
		collection: (req, res, next) => {
			res.render("collection", {});
		},
		contactUs: (req, res, next) => {
			res.render("contact-us", {});
		},
		changePassword: (req, res, next) => {
			res.render("change-password", {});
		},
		signIn: (req, res, next) => {
			res.render("sign-in", {});
		},
		signUp: (req, res, next) => {
			res.render("sign-up", {});
		}
	}
}