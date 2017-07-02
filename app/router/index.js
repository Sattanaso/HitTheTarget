module.exports = (express, app, db, nodemailer, controller) => {
    app.get("/home", controller.view().home);

    app.get("/about", controller.view().about);

    app.get("/news", controller.view().news);

    app.get("/blog", controller.view().blog);
    app.post("/blog", (req, res) => {
        console.log(req.body);
    });

    app.get("/change-password", controller.view().changePassword);
    app.post("/change-password", (req, res) => {
        console.log(req.body);
    });

    app.get("/forgot-password", controller.view().forgotPassword);
    app.post("/forgot-password", (req, res) => {
        console.log(req.body);
    });

    app.get("/contact-us", controller.view().contactUs);
    app.post("/contact-us", (req, res) => { });

    app.get("/sign-in", controller.view().signIn);
    app.post("/sign-in", (req, res) => {
        console.log(req.body);
    });

    app.get("/sign-up", controller.view().signUp);
    app.post("/sign-up", (req, res) => {
        console.log(req.body);
    });

    app.get("*", (req, res) => {
        res.redirect("/home");
    });
}
