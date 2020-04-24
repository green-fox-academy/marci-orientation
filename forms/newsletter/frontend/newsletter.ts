import { Observable, of, fromEvent } from 'rxjs';
import { AjaxResponse } from 'rxjs/ajax';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ajaxPost } from 'rxjs/internal/observable/dom/AjaxObservable';

const form: HTMLFormElement = document.querySelector('form');
const eMail: HTMLInputElement = document.getElementById('email');
const userName: HTMLInputElement = document.getElementById('username');

const submitted: Observable<Event> = fromEvent(form, 'submit').pipe(
  map((event) => event.preventDefault()),
  switchMap(() =>
    ajaxPost(
      'http://localhost:3000/signup',
      { username: userName.value, email: eMail.value },
      { 'Content-Type': 'application/json' }
    )
  ),
  map((response: AjaxResponse) => console.log('response ', response)),
  catchError((error: any) => {
    console.log('error: ', error);
    return of(error);
  })
);

submitted.subscribe();
