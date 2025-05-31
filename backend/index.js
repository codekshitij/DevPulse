const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 4000;
const SECRET = process.env.JWT_SECRET || 'devpulse_secret';

app.use(cors());
app.use(express.json());

const db = require('./db');

// Register endpoint
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required.' });
  const hash = bcrypt.hashSync(password, 10);
  db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hash], function(err) {
    if (err) return res.status(400).json({ error: 'User already exists.' });
    res.json({ id: this.lastID, email });
  });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (err || !user) return res.status(401).json({ error: 'Invalid credentials.' });
    if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ error: 'Invalid credentials.' });
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1d' });
    res.json({ token, email: user.email });
  });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
