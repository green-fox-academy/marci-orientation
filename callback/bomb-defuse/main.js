"use strict";

const bomb = document.getElementsByClassName("display")[0];
const button = document.getElementById("defused");
let counter = 10;
const detonationTime = 0;

const temp = setInterval(() => {
  if (counter === detonationTime) {
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
    button.innerHTML = `It's too late, run!`;
  }
});
