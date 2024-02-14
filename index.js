const express = require("express");
const app = express();
const path = require("path");
const data = require("./docs/info.json");
let ejs = require("ejs");
// set the view engine to ejs
app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "docs")));
app.use(express.static("docs"));
// index page
app.get("/backendPage", function (req, res) {
    console.log(data);
    res.render("pages/index");
    // use res.render to load up an ejs view file
});

app.listen(3000);
console.log("Server is listening on port 3000");
