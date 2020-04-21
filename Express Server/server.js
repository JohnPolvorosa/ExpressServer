//jshint esversion:6

const express = require("express");
const app = express();

// Port connection
app.listen(3000, function() {
    console.log("Server started on port 3000");
});

// Call back method (request and response) when connected
// To specify what happnes when browsers gets requrest
// Slash is home page --> ROUTE input parameter (first)
app.get("/", function(request, response) {
    // Response!!!
    response.send("<h1>Hello, world!</h1>");
    // console.log(request);
});

// Contact route
app.get("/contact", function(req,res) {
    res.send("Welcome to contact page");
});

// About route
app.get("/about", function(req,res) {
    res.send("My name is Humongous Jay");
});

