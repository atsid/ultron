"use strict";
let passwordChecker = require("../../../components/password_checker");

/**
 * Determines if the given password matches the user"s password
 * @param password the input password
 */
function isValidPassword (password) {
    return passwordChecker.isValidPassword(password, this.password);
}

function process() {
    let result = this.toObject();
    delete result.password;
    delete result._id;
    delete result.__v;
    return result;
}

/**
 * Schema Methods:
 * Schemas should act as facades that thunk out to smaller components that handle singular concerns.
 */
module.exports = {
    isValidPassword,
    process
};
