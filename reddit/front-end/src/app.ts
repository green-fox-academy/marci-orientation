import { fromEvent, of, Observable } from 'rxjs';
import { mergeMap, map, switchMap, catchError, tap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { AjaxResponse } from 'rxjs/ajax';
import { ajaxPost, ajaxPut } from 'rxjs/internal/observable/dom/AjaxObservable';

const submitInfo: HTMLParagraphElement = document.getElementsByClassName(
  'submit-info'
)[0] as HTMLParagraphElement;
const postTitle: HTMLParagraphElement = document.getElementsByClassName(
  'post-title'
)[0] as HTMLParagraphElement;
const voteCount: HTMLParagraphElement = document.getElementById(
  'vote-count'
) as HTMLParagraphElement;

const article = document.getElementById('post-1');
const newPost = document.createElement('p');

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
  for (let i = 0; i < x.length; i++) {
    const element: HTMLElement = article;
    const clonedElement: Node = element.cloneNode(true);
    document.getElementsByTagName('body')[0].appendChild(clonedElement);
    postTitle.innerHTML = x[i].title;
    voteCount.innerHTML = x[i].vote;
    submitInfo.innerText = `Submitted ${x[i].timestamp} years ago by ${x[i].owner}`;
    console.log('clone', clonedElement);
  }
});

console.log(submitInfo);
console.log('hello');
