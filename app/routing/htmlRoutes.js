// Routes
// ========================================
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

// Start of the server to begin listening phase
// =============================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});