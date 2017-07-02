module.exports = (app, db) => {
	const passport = require("passport");
	const LocalStrategy = require("passport-local").Strategy;
	const userData = require("../data").userData;

	app.use(passport.initialize());
	app.use(passport.session());

	passport.use(new LocalStrategy(
		(username, password, done) => {
			userData.getUserByUsername(username)
				.then((user) => {
					if (err) {
						return done(err);
					}

					if (!user) {
						return done(null, false, { message: "Incorrect username." });
					}

					if (!user.validPassword(password)) {
						return done(null, false, { message: "Incorrect password." });
					}

					return done(null, user);
				})
				.catch((err) => {
					return (err);
				})
		}
	));
}
