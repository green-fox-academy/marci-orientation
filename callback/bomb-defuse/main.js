"use strict";

const bomb = document.getElementsByClassName("display")[0];
const button = document.getElementById("defused");
const warning = document.getElementById("run");
let counter = 10;
const detonationTime = 0;
const warningTime = 2;

const temp = setInterval(() => {
  if (counter === warningTime) {
    warning.style.display = "flex";
  }

  if (counter === detonationTime) {
    warning.style.display = "none";
    bomb.innerHTML = `Terrorists win.`;
  } else {
    bomb.innerHTML = counter--;
  }
}, 1000);

const defused = (button.onclick = () => {
  if (counter !== detonationTime) {
    clearInterval(temp);

    button.innerHTML = `Bomb has been defused. Counter-Terrorists win.`;
  }

  if (counter === detonationTime) {
    button.innerHTML = `The bomb has exploded, better luck next time`;
  }

  if (counter <= warningTime) {
    warning.style.display = "none";
  }
});
