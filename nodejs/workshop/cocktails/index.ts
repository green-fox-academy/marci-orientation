import express from "express";
import { cocktails } from "./assets/cocktails";
import { alcoholList } from "./assets/alcohol-list";

const app = express();
const PORT = 3000;
const viewEngine = app.set("view engine", "ejs");
const expressStatic = app.use("/static", express.static("static"));

const inner: boolean[] = cocktails.map(e => {
  return e.isAlcoholic;
});
const alcoholName: string[] = cocktails.map(e => {
  return e.name;
});
const price: number[] = cocktails.map(e => {
  return e.price;
});

app.get("/", (req: any, res: any) => {
  inner.forEach(e => {
    if (inner) {
      res.render("main", {
        alcoholName: alcoholName,
        price: price,
        cocktails: "",
        alcoholList: ""
      });
    } else {
      res.render("main", { cocktails: cocktails, alcoholList: alcoholList });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
