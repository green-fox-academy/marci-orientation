const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  req.query.message
    ? res.status(200).send({
        received: req.query.message,
        translated: 'I am Groot!',
      })
    : res.status(400).send({ error: 'I am Groot!' });
});

module.exports = app;
