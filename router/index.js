const data = require("../data");
const controller = require("../controllers")(data);

module.exports = (app) => {
    app.get("/home", controller.view.home);

    app.get("/sharing", controller.view.sharing);
    app.post("/sharing", (req, res) => { });

    app.get("/change-password", controller.view.changePassword);
    app.post("/change-password", (req, res) => { });

    app.get("/contact-us", controller.view.contactUs);
    app.post("/contact-us", (req, res) => { });

    app.get("/sign-in", controller.view.signIn);
    app.post("/sign-in", (req, res) => { });

    app.get("*", (req, res) => {
        res.redirect("/home");
    });
}
