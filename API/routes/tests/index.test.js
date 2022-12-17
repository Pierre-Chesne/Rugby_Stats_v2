

const index = require("../index");

const request = require("supertest");
const express = require("express");
const app = express();

app.use("/", index);

describe("test API", () => {
  it("should return API v.1.0.0", (done) => {
    request(app)
      .get("/api")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("API v.1.0.0");
        done();
      })
      .catch((e) => done(e));
  });
});