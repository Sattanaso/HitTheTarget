module.exports = {
    init: (() => {
        const env = process.env.NODE_ENV || 'development';

        const params = require('./config/')[env];
        const dbConnect = params.db;

        const mongo = require('./config/mongo')(dbConnect);

        const express = require('express');

        const app = express();

        require('./config/express')(express, app, params);

        require('./config/passport')(app, dbConnect);

        const nodemailer = require('./config/nodemailer')(params);

        const dbRequester = require('./utils/dbRequester')(mongo);

        const data = require('./data')(dbRequester);

        const controllers = require('./controllers')(data);

        require('./router')(express, app, dbConnect, nodemailer, controllers);

        const port = params.port;

        app.listen(port);

        console.log(`Server running on port:${port}`);

        if (env === 'development') {
            require('openurl').open(`http://localhost:${port}`);
        }
    })()
}
