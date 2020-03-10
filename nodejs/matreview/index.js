"use strict";

const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log("I sent something");
  res.send(`Hi, ${req.query.name}!`);
});

app.get("/alma", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/alma.html");
});

app.get("/templating", (req, res) => {
  res.render("index", {
    a: a,
    b: b
  });
});

app.listen(3000, () => {
  console.log("It works");
});
