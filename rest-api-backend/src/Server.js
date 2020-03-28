"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var Router_1 = require("./Router");
var app = new App_1.default([new Router_1.default()], 8080);
app.listen();
