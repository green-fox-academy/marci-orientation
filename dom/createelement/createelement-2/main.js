const list = document.querySelector("ul.asteroids");
list.removeChild(document.getElementsByTagName("li")[0]);

const planetData = [
  { category: "inhabited", content: "Foxes", asteroid: true },
  { category: "inhabited", content: "Whales and Rabbits", asteroid: true },
  {
    category: "uninhabited",
    content: "Baobabs and Roses",
    asteroid: true
  },
  {
    category: "inhabited",
    content: "Giant monsters",
    asteroid: false
  },
  {
    category: "inhabited",
    content: "Sheep",
    asteroid: true
  }
];

const asteroids = [];
planetData.forEach(e => {
  if (e.asteroid) {
    asteroids.push(e);
  }
});

asteroids.forEach(asteroid => {
  const ast = document.createElement("li");
  ast.textContent = asteroid.content;
  ast.classList.add(asteroid.category);
  document.querySelector(".asteroids").appendChild(ast);
});
