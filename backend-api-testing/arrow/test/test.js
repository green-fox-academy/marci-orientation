'use strict';

const request = require('supertest');
const app = require('../routes');

describe('Test yondu endpoint without query params', () => {
  test('It should respond with an error message and code', async () => {
    const response = await request(app).get('/yondu');

    expect(response.body).toStrictEqual({
      error: 'Please enter a number for both distance and time!',
    });
    expect(response.statusCode).toBe(400);
  });
});

describe('Test yondu endpoint with query params', () => {
  test('It should divide the distance with time', async () => {
    const response = await request(app).get('/yondu').query({
      distance: 100.0,
      time: 10.0,
    });

    expect(response.body).toStrictEqual({
      distance: 100.0,
      time: 10.0,
      speed: 100 / 10,
    });

    expect(response.statusCode).toBe(200);
  });
});
