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
