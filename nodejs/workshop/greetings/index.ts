import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req: any, res: any) => {
  if (req.query.name) {
    res.render("home", { name: req.query.name });
  } else {
    res.render("home", { name: "Guest" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
