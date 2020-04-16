import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const result: HTMLHeadingElement = document.querySelector("h1");

fromEvent(window, "keyup")
  .pipe(
    map((event: KeyboardEvent) => {
      result.innerHTML = `Last pressed key is ${event.key}`;
    })
  )
  .subscribe();
