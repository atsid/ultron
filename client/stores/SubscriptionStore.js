"use strict";

let request = require("superagent-bluebird-promise");

class SubscriptionStore {
    list(opts) {
        let req = request.get("/api/profile/subscriptions");
        req.query({limit: opts.limit || 100});
        req.query({skip: opts.skip || 0});
        if (opts.search) {
            req.query({search: opts.search});
        }
        return req.promise();
    }

    get(id) {
        return request.get(`/api/profile/subscriptions/${id}`).promise();
    }

    subscribe(splSetId) {
        return request.post("/api/profile/subscriptions")
            .set("Content-Type", "application/json")
            .send({splSetId: splSetId})
            .promise();
    }

    isSubscribed(splSetId) {
        return this.list({search: {splSetId: splSetId}}).promise()
        .then((res) => res.body.items.length > 0);
    }
}

module.exports = SubscriptionStore;
