// DEPENDENCIES
// ========================================
var path = require("path");

// Routes
// ========================================

// HTML Get Requests
module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, PORT + "../public/survey.html"));
    });

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};