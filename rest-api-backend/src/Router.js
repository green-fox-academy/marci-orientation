"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Router = /** @class */ (function () {
    function Router() {
        var _this = this;
        this.posts = [{}];
        this.appendALetter = function (request, response) {
            var input = request.params.input;
            var container = {};
            container = { appended: input + "a" };
            response.send(container);
        };
        this.greet = function (request, response) {
            var name = request.query.name;
            var title = request.query.title;
            var container = {};
            if (name && title) {
                container = {
                    welcome_message: "Oh, hi there " + name + ", my dear " + title + "!",
                };
            }
            else if (!name && !title) {
                container = { error: "Please provide a name and a title!" };
                response.status(400);
            }
            else if (!name) {
                container = { error: "Please provide a name!" };
                response.status(400);
            }
            else if (!title) {
                container = { error: "Please provide a title!" };
                response.status(400);
            }
            response.send(container);
        };
        this.getDouble = function (request, response) {
            var myNum = request.query.input;
            var container = {};
            if (myNum) {
                container = {
                    received: myNum,
                    result: myNum * 2,
                };
            }
            else {
                container = {
                    error: "Please provide an input!",
                };
            }
            response.send(container);
        };
        this.getAllPosts = function (request, response) {
            response.send(_this.path);
        };
        // linkToHTMLFile =  ( request: express.Request, response: express.Response) => {
        //   response.sendFile(path.join(__dirname, "index.html"));
        // };
        this.createAPost = function (request, response) {
            // const post: Post = request.body;
            var container = {};
            var action = request.params.action;
            var number = request.body.until;
            if (action === "sum") {
                var sum = 0;
                for (var i = 1; i <= number; i++) {
                    sum += i;
                }
                container = { result: sum };
            }
            else if (action === "factor") {
                var sum = 1;
                for (var i = 1; i <= number; i++) {
                    sum *= i;
                }
                container = { result: sum };
            }
            _this.posts.push(container);
            response.send(container);
        };
        this.path = "/Post";
        this.appendA = "/appenda/:input";
        this.greeter = "/greeter";
        this.double = "/doubling";
        this.doUntil = "/dountil/:action";
        this.router = express.Router();
        this.initializeRoutes();
    }
    Router.prototype.initializeRoutes = function () {
        this.router.get(this.path, this.getAllPosts);
        this.router.get(this.appendA, this.appendALetter);
        this.router.get(this.greeter, this.greet);
        this.router.get(this.double, this.getDouble);
        this.router.post(this.doUntil, this.createAPost);
        // this.router.get(this.path, this.linkToHTMLFile);
    };
    return Router;
}());
exports.default = Router;
