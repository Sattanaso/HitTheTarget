const data = require("../data");
const controller = require("../controllers")(data);

module.exports = (app) => {
    app.get("/home", controller.main.home);
    app.get("/sharing", controller.main.sharing);
    app.get("/change-password", controller.user.changePassword);
    app.get("/contact-us", controller.user.contactUs);
    app.get("/sign-in", controller.user.signIn);

    app.get("*", (req, res) => {
        res.redirect("/home");
    });
}
