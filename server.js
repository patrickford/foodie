"use strict";

const express = require('express');
const app = express();

// Setup static server
app.use(express.static('build'));

let users = [];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users/:name", (req, res) => {
  users.push(req.params.name);
  res.status(201).json(users);
});

app.delete("users/:name", (req, res) => {
  console.log('hit delete end point');
  if (users.indexOf(req.params.name) !== -1) {
    let deleted = users.splice(users.indexOf(req.params.name), 1);
    res.status(200).json(deleted);
  } else {
    res.status(400).send("User not found");
  }
});

// launch server and start app
app.listen(process.env.PORT || 8080, function() {
  console.log('Server now running @ localhost:8080');
});

exports.app = app;

