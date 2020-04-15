import { fromEvent, Observable } from "rxjs";
import { delay } from "rxjs/operators";

const button: HTMLButtonElement = document.querySelector("button");
const message: HTMLParagraphElement = document.createElement("p");

const click: Observable<Event> = fromEvent(button, "click");
const delayedClick: Observable<Event> = click.pipe(delay(2000));

delayedClick.subscribe(() => {
  message.innerHTML = "Your click has been delayed by 2 seconds.";
  document.querySelector("body").appendChild(message);
});
