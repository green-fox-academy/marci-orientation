"use strict";

const request = require("supertest");
const app = require("../routes");

describe("Test groot endpoint with no message", () => {
  test("It should throw an error code", async () => {
    const response = await request(app).get("/groot");

    expect(response.body).toStrictEqual({ error: "I am Groot!" });
    expect(response.statusCode).toBe(400);
  });
});

describe("Test groot endpoint with message", () => {
  test("It should respond to the message", async () => {
    const response = await request(app).get("/groot").query({
      message:
        "Aren't you a bit worried about that exponential cascade scenario we discussed?",
    });

    expect(response.body).toStrictEqual({
      received:
        "Aren't you a bit worried about that exponential cascade scenario we discussed?",
      translated: "I am Groot!",
    });
    expect(response.statusCode).toBe(200);
  });
});
