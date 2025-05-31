const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Initialize SQLite DB
const db = new sqlite3.Database(path.join(__dirname, 'devpulse.db'), (err) => {
  if (err) return console.error('DB connection error:', err.message);
  console.log('Connected to SQLite database.');
});

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
)`);

module.exports = db;
