import * as bodyParser from "body-parser";
import express = require("express");

const app: express.Application = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ message: "Try searching for posts" });
});

require("./app/routes/post.routes.ts")(app);

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});
