var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/addevent', function (req, res) {
    console.log('addevent post called');
    console.log(req.body.id);
});


app.get('/', function (req, res) {
    console.log('index called');
})

app.listen(port);