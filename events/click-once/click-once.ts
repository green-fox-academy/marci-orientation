import { fromEvent, Observable } from "rxjs";

const button: HTMLButtonElement = document.querySelector("button");
const click: Observable<Event> = fromEvent(button, "click", { once: true });

click.subscribe((event: Event) => console.log(event.timeStamp));
