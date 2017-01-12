"use strict";

var express = require('express');
var app = express();
app.use(express.static('build'));

app.listen(process.env.PORT || 8080, function() {
  console.log('Server running @ localhost:8080');
});

exports.app = app;
