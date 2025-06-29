const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const client = new MongoClient('mongodb://admin:csi%40123@csi-mongo:27017/?authSource=admin');

app.get('/', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('csidb');
    const employees = await db.collection('employees').find({}).toArray();
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(8080, () => console.log('API running on port 8080'));