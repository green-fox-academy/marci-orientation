'use strict';

const request = require('supertest');
const app = require('../routes');

describe('Test rocket cargo with no ammo provided', () => {
  test('It should respond with an error and instructions to fill the ship', async () => {
    const response = await request(app).get('/rocket/fill');

    expect(response.body).toStrictEqual({
      error: 'Please fill the ship with ammo!',
    });
    expect(response.statusCode).toBe(400);
  });
});
