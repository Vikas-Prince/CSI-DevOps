const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
  host: 'csi-db',
  user: 'csiuser',
  password: 'csi@123',
  database: 'csitestdb'
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('Connected to MySQL successfully!');
  }
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS time', (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(`Database Time: ${result[0].time}`);
  });
});

app.listen(8080, () => {
  console.log('API is running on port 8080');
});