module.exports = (express, app, db, nodemailer, controller) => {
    app.get("/home", controller.view().home);

    app.get("/about", controller.user.getUsers);

    app.get("/news", controller.view().news);

    app.get("/collection", controller.view().collection);
    app.post("collection", (req, res) => { });

    app.get("/change-password", controller.view().changePassword);
    app.post("/change-password", (req, res) => { });

    app.get("/contact-us", controller.view().contactUs);
    app.post("/contact-us", (req, res) => { });

    app.get("/sign-in", controller.view().signIn);
    app.post("/sign-in", (req, res) => { });

    app.get("*", (req, res) => {
        res.redirect("/home");
    });
}
