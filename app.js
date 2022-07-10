//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const app = express();
const title = "";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("html", {
        title : "The world's most annoying site"
      });
});

app.get("/shakeblock", function(req, res){
  res.render("noshake", {
      title : "The world's most annoying site"
    });
});


app.listen(3000, function() {
  console.log("Server started successfully on port 3000");
});