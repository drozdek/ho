var sqlite3 = require('sqlite3').verbose();

const DB_NAME = './database/db.db';

let
    db = new sqlite3.Database(DB_NAME, err => {
        if (err) {
            return console.error('DBerror' + err.message);
        }
        else {
            console.log('Connected to DB');
            db.run(`CREATE TABLE events (
                id INTEGER PRIMARY KEY type UNIQUE,
                type text,
                actorID INTEGER,
                actorLogin text,
                actorAvatarUrl text,
                repoID INTEGER,
                repoName text,
                repoUrl text,
                created_at text
                )`,
                err => {
                    if (err) {
                        console.log('table already crated');
                    }
                }
            )
            // db.close();
        }
    });

module.exports = db