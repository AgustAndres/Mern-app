const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy("/login2", { target: "http://localhost:5000"}));
};