import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const button: HTMLButtonElement = document.querySelector("button");
const list: NodeListOf<HTMLLIElement> = document.querySelectorAll("li");
const result: Element = document.getElementsByClassName("result")[0];

fromEvent(button, "click")
  .pipe(map(() => (result.innerHTML = String(list.length))))
  .subscribe();
