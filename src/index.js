var express = require('express');
var cors = require('cors');
var app = express();
var port = 3000;

app.use(cors());

app.post('/addevent', function (req, res) {
    console.log('post  called');
});


app.get('/', function (req, res) {
    console.log('get called index');
})

app.listen(port);