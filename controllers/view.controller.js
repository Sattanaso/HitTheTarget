module.exports = {
	home: (req, res, next) => {
		res.render("home", {});
	},
	sharing: (req, res, next) => {
		res.render("sharing", {});
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