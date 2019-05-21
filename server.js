// Declaration of dependencies - Path and Express
// ==============================================
var express = require('express');
var path = require('path');

// Set up of the Express App
// ==============================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set up of Express app to handle data parsing
// ==============================================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Router
// ===============================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start of the server to begin listening phase
// =============================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});