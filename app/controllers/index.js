const view = require("./view.controller");
const user = require("./user.controller");

module.exports = (data) => {
    return {
        view: view,
        user: user(data.userData)
    }
};
