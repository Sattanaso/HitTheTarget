module.exports = {
	home: (req, res, next) => {
		res.render("home", {});
	},
	sharing: (req, res, next) => {
		res.render("sharing", {});
	}
}