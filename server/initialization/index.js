"use strict";
let debug = require("debug")("app:initialization");
const INIT_SECTIONS = [
    require("./sections/body_parsing"),
    require("./sections/jade_rendering"),
    require("./sections/static_content")
];
module.exports = {
    configure (app) {
        INIT_SECTIONS.forEach((sec) => {
            debug("configuring " + sec.name);
            sec.configure(app);
        });
    }
};
