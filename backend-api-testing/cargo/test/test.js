'use strict';

const request = require('supertest');
const app = require('../src/routes');

describe('Test rocket cargo with no ammo provided', () => {
  test('It should respond with an error and instructions to fill the ship', async () => {
    const response = await request(app).get('/rocket/fill');

    expect(response.body).toStrictEqual({
      error: 'Please fill the ship with ammo!',
    });
    expect(response.statusCode).toBe(400);
  });
});

describe('Test the overall status of the ship without adding ammo', () => {
  test('It should return the cargo of the ship', async () => {
    const response = await request(app).get('/rocket');

    expect(response.body).toStrictEqual({
      caliber25: 0,
      caliber30: 0,
      caliber50: 0,
      shipstatus: 0,
      ready: false,
      received: 0,
      amount: 0,
    });

    expect(response.statusCode).toBe(200);
  });
});

describe('Test the overall status of the ship with adding ammo', () => {});
test('It should return the cargo of the ship', async () => {
  const response = await request(app).get('/rocket').query({
    caliber: '.25',
    amount: 12500,
  });
  expect(response.body).toStrictEqual({
    received: '.25',
    shipstatus: 'full',
    ready: true,
  });
  expect(response.statusCode).toBe(200);
});
