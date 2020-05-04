import { fromEvent, of, Observable } from 'rxjs';
import { mergeMap, map, switchMap, catchError, tap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { AjaxResponse } from 'rxjs/ajax';
import { ajaxPost, ajaxPut } from 'rxjs/internal/observable/dom/AjaxObservable';

const postTitle: HTMLParagraphElement = document.getElementsByClassName(
  'post-title'
)[0] as HTMLParagraphElement;
const voteCount: HTMLParagraphElement = document.getElementById(
  'vote-count'
) as HTMLParagraphElement;

const data$ = fromFetch('http://localhost:3000/posts').pipe(
  switchMap((response: Response) => {
    if (response.ok) {
      return response.json();
    } else {
      return of({ error: true, message: `Error ${response.status}` });
    }
  }),
  catchError((error: Error) => {
    console.error(error);
    return of({ error: true, message: error.message });
  })
);

data$.subscribe((x) => {
  (postTitle.innerHTML = x[0].title), (voteCount.innerText = x[0].id);
});
