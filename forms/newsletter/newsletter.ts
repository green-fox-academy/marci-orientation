import { Observable, of, fromEvent } from 'rxjs';
import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';
import { map, catchError, switchMap } from 'rxjs/operators';

const form: HTMLFormElement = document.querySelector('form');

const users: Observable<AjaxRequest> = ajax({
  url: 'http://localhost:3000/signup',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    Scientist: `Aren't you bit worried about that exponential cascade scenario?`,
  },
}).pipe(
  map((response: AjaxResponse) => console.log('response: ', response)),
  catchError((error: any) => {
    console.log('error: ', error);
    return of(error);
  })
);

const submitForm: Observable<AjaxRequest> = fromEvent(form, 'submit').pipe(
  map((event: Event) => event.preventDefault()),
  switchMap(() => users)
);

submitForm.subscribe((e) => console.log(e));
