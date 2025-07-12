const express = require('express');
const app = express();
const port = 8080;

let ready = false;

app.get('/readyz', (req, res) => {
  if (ready) {
    res.status(200).send('App is ready');
  } else {
    res.status(503).send('App is not ready');
  }
});

app.get('/healthz', (req, res) => {
  res.status(200).send('App is healthy');
});

setTimeout(() => {
  ready = true;
}, 5000); 

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
