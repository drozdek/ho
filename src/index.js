var express = require('express');
var app = express();
var port = 3000;

var { db } = require('./db');

app.get('/', function (res, req) {
    req.send('opened')
})

app.listen(port);