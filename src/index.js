var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require('./db');
var app = express();

var port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    var sql = "SELECT * FROM events ORDER BY id";
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
})

app.post('/events', (req, res) => {
    console.log('addevent post called...');
    var response = [id, type, actorID, actorLogin, actorAvatarUrl, repoID, repoName, repoUrl] = [req.body];

    // check can be done as well on the native side
    if (typeof req.body.id === "undefined") {
        return;
    }

    var data = {
        id: req.body.id,
        type: req.body.type,
        actorID: req.body.actorID,
        actorLogin: req.body.actorLogin,
        actorAvatarUrl: req.body.actorAvatarUrl,
        repoID: req.body.repoID,
        repoName: req.body.repoName,
        repoUrl: req.body.repoUrl,
        createdAt: new Date().getTime()
    };

    var sql = 'INSERT INTO events (id,type,actorID,actorLogin,actorAvatarUrl,repoID,repoName,repoUrl,created_at) VALUES (?,?,?,?,?,?,?,?,?)';

    db.run(sql, [
        data.id,
        data.type,
        data.actorID,
        data.actorLogin,
        data.actorAvatarUrl,
        data.repoID,
        data.repoName,
        data.repoUrl,
        data.createdAt
    ]);

    res.end(JSON.stringify(response));

});

app.listen(port);