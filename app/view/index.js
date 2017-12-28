module.exports = {
    home: (req, res, next) => {
        res.render("home", {});
    },
    about: (req, res, next) => {
        res.render("about", {});
    },
    cvs: (req, res, next) => {
        let isAuth = false;
        if (!isAuth) {
            res.redirect("/sign-in");
        } else {
            res.render("cvs", {});
        }
    },
    blog: (req, res, next) => {
        res.render("blog", {});
    },
    contactUs: (req, res, next) => {
        res.render("contact-us", {});
    },
    changePassword: (req, res, next) => {
        res.render("change-password", {});
    },
    forgotPassword: (req, res, next) => {
        res.render("forgot-password", {});
    },
    signIn: (req, res, next) => {
        res.render("sign-in", {});
    },
    signUp: (req, res, next) => {
        res.render("sign-up", {});
    }
}