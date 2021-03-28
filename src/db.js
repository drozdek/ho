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
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    type text,
                    actorID INTEGER
                )`,
                err => {
                    if (err) {
                        console.log('table already crated');
                    }
                    else {                        
                        var insert = 'INSERT INTO events (id, type, actorID) VALUES (?,?,?)'
                        db.run(insert, [12345, "click", 987])
                    }
                }
            )}
    });

module.exports = db