import { Observable, of, fromEvent } from 'rxjs';
import {
  switchMap,
  catchError,
  mergeMap,
  take,
  finalize,
} from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

const joke: HTMLElement = document.getElementById('joke');
const button: HTMLButtonElement = document.querySelector('button');

const jokeButton$: Observable<Event> = fromEvent(button, 'click').pipe(
  mergeMap(() => fromFetch('http://api.icndb.com/jokes/random')),
  switchMap((response: Response) => {
    if (response.ok) {
      return response.json();
    } else {
      return of({ error: true, message: `Error ${response.status}` });
    }
  }),
  catchError((err: Error) => {
    console.error(err);
    return of({
      error: true,
      message:
        'There is no joke here, if you want to cringe just go on Instagram.',
    });
  }),
  take(10),
  finalize(() => (joke.innerText = 'Enough cringe for today.'))
);

jokeButton$.subscribe((result: any) => (joke.innerText = result.value.joke));
