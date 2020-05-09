const express = require('express');
const app = express();

app.get('/yondu?:distance?:time', (req, res) => {
  if (req.query.distance && req.query.time) {
    res.status(200).send({
      distance: req.query.distance,
      time: req.query.time,
      speed: req.query.distance / req.query.time,
    });
  } else {
    res
      .status(400)
      .send({ error: 'Please enter a number for both distance and time!' });
  }
});

module.exports = app;
