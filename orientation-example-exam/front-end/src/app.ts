import { fromEvent, of } from 'rxjs';
import { AjaxResponse } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ajaxPost } from 'rxjs/internal/observable/dom/AjaxObservable';

const outPutField: HTMLParagraphElement = document.getElementById(
  'output-field'
) as HTMLParagraphElement;

const form: HTMLFormElement = document.querySelector('form');

const url: HTMLInputElement = document.getElementById(
  'url'
) as HTMLInputElement;

const alias: HTMLInputElement = document.getElementById(
  'alias'
) as HTMLInputElement;

fromEvent(form, 'submit')
  .pipe(
    switchMap(() =>
      ajaxPost(
        'http://localhost:3000/links/save-link',
        {
          url: url.value,
          alias: alias.value,
        },
        { 'Content-Type': 'application/json' }
      ).pipe(
        map(
          (response: AjaxResponse) =>
            (outPutField.innerHTML = `Your URL aliased to ${response.xhr.response.alias} and your secret code is ${response.xhr.response.secretCode}`)
        ),
        map(() => form.reset()),
        catchError((error: any) => {
          console.log(`There was an error: ${error.response.message}`);
          outPutField.innerHTML = error.response.message;
          return of(error);
        })
      )
    )
  )
  .subscribe(console.log);
