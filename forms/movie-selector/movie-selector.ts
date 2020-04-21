import { fromEvent, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');
const keycode$ = keyup$.pipe(
  map((event: KeyboardEvent) => event.code),
  filter((code: string) => code === 'Enter')
);

keycode$.subscribe(console.log);
