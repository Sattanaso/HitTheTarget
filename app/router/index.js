module.exports = (express, app, mongo, nodemailer, params, view) => {
    // rest api
    const apiRouter = require('./api')(express, mongo, nodemailer, params);
    app.use('/api', apiRouter);
    
    // view frames
    app.get("/home", view.home);
    app.get("/about", view.about);
    app.get("/cvs", view.cvs);
    app.get("/blog", view.blog);
    app.get("*", (req, res) => {
        res.redirect("/home");
    });
}
