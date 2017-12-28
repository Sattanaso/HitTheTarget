module.exports = {
    init: (() => {
        const env = process.env.NODE_ENV || "development";
        const params = require("./config/")[env];
        const express = require("express");
        const app = express();
        require("./config/express")(express, app, params);
        require("./config/passport")(app, dbConnect);

        const dbConnect = params.db;
        const mongo = require("./config/mongo")(dbConnect);
        const nodemailer = require("./config/nodemailer")(params);
        const views = require("./view");
        require("./router")(express, app, mongo, nodemailer, params, views);

        const port = params.port;
        app.listen(port);
        console.log(`Server running on port:${port}`);
        if (env === "development") {
            require("openurl").open(`http://localhost:${port}`);
        }
    })()
}
