import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import { response } from "express";

export default class App {
  public app: express.Application;
  public port: number;
  private parser: express.Application;
  public container;

  constructor() {
    this.app = express();
    this.port = 8080;
    this.parser = this.app.use(bodyParser.json());
    this.container = {};
  }

  public assets(): void {
    this.app.use(express.static("assets"));
  }

  public greet(): void {
    this.app.get(
      "/greeter",
      (request: express.Request, response: express.Response) => {
        let name = request.query.name;
        let title = request.query.title;

        if (name && title) {
          this.container = {
            welcome_message: `Oh, hi there ${name}, my dear ${title}!`,
          };
        } else if (!name && !title) {
          this.container = { error: "Please provide a name and a title!" };
          response.status(400);
        } else if (!name) {
          this.container = { error: "Please provide a name!" };
          response.status(400);
        } else if (!title) {
          this.container = { error: "Please provide a title!" };
          response.status(400);
        }
        response.send(this.container);
      }
    );
  }

  public get(): void {
    this.app.get(
      "/",
      (request: express.Request, response: express.Response) => {
        response.sendFile(path.join(__dirname, "index.html"));
      }
    );
  }

  public double(): void {
    this.app.get(
      "/doubling",
      (request: express.Request, response: express.Response) => {
        let myNum = request.query.input;

        if (myNum) {
          response.json({ received: Number(myNum), result: myNum * 2 });
        } else {
          response.json({ error: "Please provide an input!" });
        }
      }
    );
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App is listening on the http://localhost:${this.port}`);
    });
  }
}

const temp = new App();
temp.get();
temp.assets();
temp.listen();
temp.double();
temp.greet();
