"use strict";
let chai = require("chai");
let expect = chai.expect;
let request = require("supertest");
let app = require("app/routers/root");

describe("/api", () => {
    it("is emits a root data payload", (done) => {
        request(app)
            .get("/")
            .expect(200)
            .expect("Content-Type", /json/)
            .end((err, res) => {
                expect(err).to.be.null;
                // TODO: Check auth type details
                done();
            });
    });
});
