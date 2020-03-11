import express from "express";

const app = express();
const PORT = 3000;

const todos: string[] = ["get up", "survive", "go back to bed"];

app.set("view engine", "ejs");

app.get("/", (req: any, res: any) => {
  res.render("main", { todos });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
