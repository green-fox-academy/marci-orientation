import { Observable, fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const result: HTMLHeadingElement = document.querySelector('h1');

const keyup$: Observable<Event> = fromEvent(document, 'keyup');
const keycode$: Observable<Event> = keyup$.pipe(pluck('key'));

keycode$.subscribe(
  (key: KeyboardEvent) => (result.innerHTML = `Last pressed key is ${key}`)
);
