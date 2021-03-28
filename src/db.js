var sqlite3 = require('sqlite3');

let d = sqlite3.crea

let db = new sqlite3.Database('./database/db.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('DB instantiated...');
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the db connection.');
});


exports.db = db;