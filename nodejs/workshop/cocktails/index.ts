import express from "express";
import {cocktails} from "./assets/cocktails";
import {alcoholList} from "./assets/alcohol-list";

const app = express();
const PORT = 3000;
const viewEngine = app.set("view engine", "ejs");
const expressStatic = app.use("/static", express.static("static"));

app.get("/", (req: any, res: any) => {
    if (req.query.alcohol) {
        const filteredCocktails = cocktails.filter(cocktail =>
            cocktail.contains.includes(req.query.alcohol)
        );
        res.render("main", {
            cocktails: filteredCocktails,
            alcoholList: alcoholList
        });
    } else {
        res.render("main", {cocktails: cocktails, alcoholList: alcoholList});
    }
});

app.listen(PORT, () => {


    console.log(`Listening on port ${PORT}`);
});

// const inner: boolean[] = cocktails.map(e => {
//   return e.isAlcoholic;
// });
// const alcoholName: string[] = cocktails.map(e => {
//   return e.name;
// });
// const price: number[] = cocktails.map(e => {
//   return e.price;
// });
