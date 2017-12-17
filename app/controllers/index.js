const view = require("./view");
const user = require("./user");

module.exports = (data) => {
    return {
        view: view,
        user: user(data.userData)
    }
};
