"use strict";

const bomb = document.getElementsByClassName("display")[0];
const button = document.getElementById("defused");
const warning = document.getElementById("run");
const detonationTime = -1;
const warningTime = 2;
let counter = 10;

const temp = setInterval(() => {
  if (counter <= warningTime) {
    warning.style.display = "block";
  }

  if (counter === detonationTime) {
    warning.style.display = "none";
    bomb.textContent = `Terrorists win.`;
  } else {
    bomb.textContent = counter--;
  }
}, 1000);


button.onclick = () => {
  if (counter > detonationTime) {
    clearInterval(temp);

    button.textContent = `Bomb has been defused. Counter-Terrorists win.`;
  }

  if (counter === detonationTime) {
    button.textContent = `The bomb has exploded, better luck next time`;
  }

  if (counter <= warningTime) {
    warning.style.display = "none";
  }
};
