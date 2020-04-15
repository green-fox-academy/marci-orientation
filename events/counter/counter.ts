import { fromEvent, Observable } from "rxjs";

const button: HTMLButtonElement = document.querySelector("button");
const click: Observable<Event> = fromEvent(button, "click");

click.subscribe(() => {
  let list: NodeListOf<HTMLLIElement> = document.querySelectorAll("li");
  let result: Element = document.getElementsByClassName("result")[0];

  result.innerHTML = String(list.length);
});
