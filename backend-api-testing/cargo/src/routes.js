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
  received: String(),
  amount: String(),
  shipstatus: String(),
  ready: false,
};

app.get('/rocket', (req, res) => {
  if (inventory.received === '.30') {
    cargo.caliber30 = '.30';
    delete cargo.caliber25;
    delete cargo.caliber50;
  }

  if (inventory.received === '.50') {
    cargo.caliber50 = '.5';
    delete cargo.caliber25;
    delete cargo.caliber30;
  }
  if (inventory.received === '.25') {
    cargo.caliber25 = '.25';
    delete cargo.caliber50;
    delete cargo.caliber30;
  }

  res.status(200).send({ ...cargo, ...inventory });
});

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
        amount: inventory.amount,
      };
    }
    res.status(200).send(temp);
  } else {
    res.status(400).send({ error: 'Please fill the ship with ammo!' });
  }
});

module.exports = app;
