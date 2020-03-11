import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

// app.get("/", (req: any, res: any) => {
//   res.render("home", {
//     name: "Welcome back, Guest!"
//   });
// });

app.get("/", (req: any, res: any) => {
  res.render("home", { name: req.query.name || "Guest" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
