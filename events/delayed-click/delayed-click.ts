import { fromEvent } from "rxjs";
import { delay, map } from "rxjs/operators";

const button: HTMLButtonElement = document.querySelector("button");
const body: HTMLBodyElement = document.querySelector("body");
const message: HTMLParagraphElement = document.createElement("p");

fromEvent(button, "click")
  .pipe(
    delay(2000),
    map(
      () => (message.innerHTML = "Your click has been delayed by 2 seconds."),
      body.appendChild(message)
    )
  )
  .subscribe();
