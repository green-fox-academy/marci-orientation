import { fromEvent, Observable } from "rxjs";

const button: HTMLButtonElement = document.querySelector("button");
const message = document.querySelector(".result");

const click: Observable<Event> = fromEvent(button, "click");

click.subscribe((event: Event) => {
  let counter: number = 0;
  counter++;
  if (event.timeStamp > 5000 && counter === 3) {
    message.innerHTML = "5 seconds elapsed and clicked 3 times";
  }
});
