import express from "express";

const app = express();
const PORT = 3000;
const viewEngine = app.set("view engine", "ejs");
const expressStatic = app.use("/static", express.static("static"));

const cocktails = [
  {
    name: "GIN FIZZ",
    price: 1520,
    contains: ["gin", "sugar", "lemon juice", "soda"],
    isAlcoholic: true
  },
  {
    name: "BLOODY MARY",
    price: 1650,
    contains: ["vodka", "tomato juice", "spices"],
    isAlcoholic: true
  },
  {
    name: "SEX ON THE BEACH",
    price: 1850,
    contains: ["vodka", "peach schnapps", "orange juice", "cranberry juice"],
    isAlcoholic: true
  },
  {
    name: "CUBA LIBRE",
    price: 1850,
    contains: ["rum", "cola", "lime juice"],
    isAlcoholic: true
  },
  {
    name: "MOJITO",
    price: 1850,
    contains: ["rum", "sugar", "lime juice", "soda water"],
    isAlcoholic: true
  },
  {
    name: "LONG ISLAND ICE TEA",
    price: 2450,
    contains: ["vodka", "rum", "gin", "tequila", "triple sec", "cola"],
    isAlcoholic: true
  },
  {
    name: "VIRGIN MOJITO",
    price: 990,
    contains: ["sugar", "lime juice", "soda water"],
    isAlcoholic: false
  },
  {
    name: "SAFE SEX ON THE BEACH",
    price: 990,
    contains: ["peach schnapps", "orange juice", "cranberry juice"],
    isAlcoholic: false
  }
];

const alcoholList = ["gin", "vodka", "rum", "tequila"];
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
