var sqlite3 = require('sqlite3');

const DB = './database/db.db';

new sqlite3.Database(DB, sqlite3.OPEN_READWRITE, err => {
    if (err) {
        return console.error('DB opened in W+ mode');
    }
});


new sqlite3.Database(DB, sqlite3.OPEN_READONLY, (err) => {
    if (err)
        return console.error('DB opened in R mode')
});
