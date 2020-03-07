const asteroidList = document.querySelector("ul.asteroids");

const item = document.createElement("li");
item.id = "gf";
item.textContent = "The Green Fox";
asteroidList.appendChild(item);

const lampLighter = document.createElement("li");
lampLighter.id = "lamplighter";
lampLighter.textContent = "The Lamplighter";
asteroidList.appendChild(lampLighter);

const heading = document.createElement("h1");
heading.textContent = "I can add elements to the DOM!";
document.querySelector(".container").appendChild(heading);

const image = document.createElement("img");
image.setAttribute(
  "src",
  "https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg"
);
document.querySelector(".container").appendChild(image);
