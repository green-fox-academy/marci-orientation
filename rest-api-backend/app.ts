import * as express from "express";
import * as path from "path";
import * as e from "express";
import { Request } from "express";

class App {
  public app: express.Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = 8080;
  }

  public use(): void {
    this.app.use(express.static("assets"));
  }

  public get(): void {
    this.app.get(
      "/",
      (require: express.Request, response: express.Response) => {
        response.sendFile(path.join(__dirname, "index.html"));
      }
    );
  }

  public doubling(): void {
    this.app.get(
      "/doubling",
      (require: express.Request, response: express.Response) => {}
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
temp.use();
temp.listen();
