var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require('./db');
var app = express();

var sqlite3 = require('sqlite3').verbose();

var port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    var sql = "select * from events";
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        else {
            res.json({
                "message": "success",
                "data": rows
            })
        }
    })
    console.log('response');
})

app.post('/addevent', (req, res) => {
    console.log('addevent post called');
    var response = [id, type, actorID, actorAvatarUrl, repoID, repoName, repoUrl] = [req.body];
    res.end(JSON.stringify(response));



});

app.listen(port);