import * as express from "express";
import Post from "./Post";
import * as path from "path";

export default class Router {
  public path: string;
  public appendA: string;
  public greeter: string;
  public double: string;
  public doUntil: string;
  private posts: Post[] = [{}];
  public router: express.Application;

  constructor() {
    this.path = "/Post";
    this.appendA = "/appenda/:input";
    this.greeter = "/greeter";
    this.double = "/doubling";
    this.doUntil = "/dountil/:action";
    this.router = express.Router();
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, this.getAllPosts);
    this.router.get(this.appendA, this.appendALetter);
    this.router.get(this.greeter, this.greet);
    this.router.get(this.double, this.getDouble);
    this.router.post(this.doUntil, this.createAPost);
    // this.router.get(this.path, this.linkToHTMLFile);
  }

  appendALetter = (request: express.Request, response: express.Response) => {
    let input: string = request.params.input;
    let container: { [key: string]: any } = {};
    container = { appended: `${input}a` };

    response.send(container);
  };

  greet = (request: express.Request, response: express.Response) => {
    let name: string = request.query.name;
    let title: string = request.query.title;
    let container: { [key: string]: string } = {};

    if (name && title) {
      container = {
        welcome_message: `Oh, hi there ${name}, my dear ${title}!`,
      };
    } else if (!name && !title) {
      container = { error: "Please provide a name and a title!" };
      response.status(400);
    } else if (!name) {
      container = { error: "Please provide a name!" };
      response.status(400);
    } else if (!title) {
      container = { error: "Please provide a title!" };
      response.status(400);
    }
    response.send(container);
  };

  getDouble = (request: express.Request, response: express.Response) => {
    let myNum: number = request.query.input;
    let container: { [key: string]: any } = {};

    if (myNum) {
      container = {
        received: myNum,
        result: myNum * 2,
      };
    } else {
      container = {
        error: "Please provide an input!",
      };
    }
    response.send(container);
  };

  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.path);
  };

  // linkToHTMLFile =  ( request: express.Request, response: express.Response) => {
  //   response.sendFile(path.join(__dirname, "index.html"));
  // };

  createAPost = (request: express.Request, response: express.Response) => {
    // const post: Post = request.body;
    let container: { [key: string]: number } = {};
    let action: string = request.params.action;
    let number: number = request.body.until;

    if (action === "sum") {
      let sum = 0;
      for (let i: number = 1; i <= number; i++) {
        sum += i;
      }
      container = { result: sum };
    } else if (action === "factor") {
      let sum: number = 1;
      for (let i: number = 1; i <= number; i++) {
        sum *= i;
      }
      container = { result: sum };
    }

    this.posts.push(container);
    response.send(container);
  };
}

