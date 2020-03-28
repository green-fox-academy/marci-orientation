import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";

class App {
  public app: express.Application;
  public port: number;
  private parser: express.Application;

  constructor() {
    this.app = express();
    this.port = 8080;
    this.parser = this.app.use(bodyParser.json());
  }

  public double(): void {
    this.app.get(
      "/doubling",
      (request: express.Request, response: express.Response) => {
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
      }
    );
  }

  public appendA(): void {
    this.app.get(
      "/appenda/:input",
      (request: express.Request, response: express.Response) => {
        let input: string = request.params.input;
        let container: { [key: string]: any } = {};

        container = { appended: `${input}a` };
        response.send(container);
      }
    );
  }

  public assets(): void {
    this.app.use(express.static("assets"));
  }

  public greet(): void {
    this.app.get(
      "/greeter",
      (request: express.Request, response: express.Response) => {
        let name: string = request.query.name;
        let title: string = request.query.title;
        let container: { [key: string]: any } = {};

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
temp.appendA();


