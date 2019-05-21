//LOAD DATA

var displayFriends = require("../data/friends");

// Routing 
// ===========================================
module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(displayFriends);
    });

    app.post("/api/friends", function (req, res) {
        if (displayFriends.length < 5) {
            displayFriends.push(req.body);
            res.json(true);
        }
    });
};