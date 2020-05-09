const express = require('express');
const app = express();

const cargo = {
  caliber25: 0,
  caliber30: 0,
  caliber50: 0,
  shipstatus: 'empty',
  ready: false,
};

const inventory = {
  received: 0,
  amount: 0,
  shipstatus: 0.4,
  ready: false,
};

app.get('/rocket', (req, res) => {
  res.status(200).send({ cargo, ...inventory });
});

module.exports = app;

app.get('/rocket/fill', (req, res) => {
  if (req.query.caliber && req.query.amount) {
    let temp = {
      received: (inventory.received += req.query.caliber),
      amount: (inventory.amount += req.query.amount),
      shipstatus: (inventory.shipstatus /= req.query.amount),
      ready: (inventory.ready = false),
    };

    if (inventory.amount >= 12500) {
      temp = {
        received: (inventory.received = req.query.caliber),
        shipstatus: (inventory.shipstatus = 'full'),
        ready: (inventory.ready = true),
      };
    }
    res.status(200).send(temp);
  } else {
    res.status(400).send({ error: 'Please fill the ship with ammo!' });
  }
});
