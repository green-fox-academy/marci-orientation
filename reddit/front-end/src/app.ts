import { fromEvent, of, Observable, Subscription } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { AjaxResponse, ajax, AjaxRequest } from 'rxjs/ajax';
import { ajaxPost, ajaxPut } from 'rxjs/internal/observable/dom/AjaxObservable';

const post: HTMLElement = document.getElementById('post');
const postSection: HTMLElement = document.getElementsByTagName('section')[0];

const submitInfo: HTMLParagraphElement = document.getElementById(
  'submit-info'
) as HTMLParagraphElement;
const postTitle: HTMLHeadElement = document.getElementById('content-header');
const voteCount: HTMLDivElement = document.getElementById(
  'vote-counter'
) as HTMLDivElement;

const submitNewPostForm: HTMLFormElement = document.querySelector('form');
const submitPostTitle: HTMLInputElement = document.getElementById(
  'submit-post-title'
) as HTMLInputElement;
const submitPostUrl: HTMLInputElement = document.getElementById(
  'submit-post-url'
) as HTMLInputElement;

const deletePostBtn: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName(
  'button'
);

const upvotePost: HTMLCollectionOf<Element> = document.getElementsByClassName(
  'upvote'
);

function displayInfo(x: any): void {
  for (let i = 0; i < x.length; i++) {
    const article: HTMLElement = post;
    const clonedPost: Node = post.cloneNode(true);
    postSection.insertBefore(clonedPost, postSection.childNodes[2]);
    postTitle.innerHTML = x[i].title + ` ${x[i].id}`;
    voteCount.innerHTML = x[i].vote;
    submitInfo.innerText = `Submitted ${x[i].timestamp} years ago by ${x[i].owner}`;
    article.id = x[i].id;
    deletePostBtn[0].id = x[i].id;
  }
}

const data$: Subscription = ajax
  .getJSON('http://localhost:3000/posts')
  .pipe(
    catchError((error: any) => {
      console.log('error', error);
      return of(error);
    }),
    map((request: AjaxRequest) => displayInfo(request)),
    switchMap(() => deletePost$),
    switchMap(() => upvote$)
  )
  .subscribe(console.log);

// creating new post
const createNewPost$: Observable<Event> = fromEvent(
  submitNewPostForm,
  'submit'
).pipe(
  map((event: Event) => event.preventDefault()),
  switchMap((event) =>
    ajaxPost('http://localhost:3000/posts', {
      title: submitPostTitle.value,
      url: submitPostUrl.value,
      owner: 'Anonymous',
      timestamp: 0,
      score: 0,
      vote: 0,
    })
  ),
  // distinctUntilKeyChanged('request'),
  catchError((error: any) => {
    console.log('error: ', error);
    alert('Post and URL fields cannot be empty');
    return of(error);
  })
);

createNewPost$.subscribe(console.log);

const upvote$ = fromEvent(upvotePost, 'click').pipe(
  switchMap((event: MouseEvent) =>
    ajaxPut(`http://localhost:3000/posts/:id/upvote`, {
      id: event.target.id,
      vote: 6700,
    })
  ),
  catchError((error: any) => {
    console.log('error: ', error);
    return of(error);
  })
);

const deletePost$: Observable<MouseEvent> = fromEvent(
  deletePostBtn,
  'click'
).pipe(
  switchMap((event: MouseEvent) =>
    ajax({
      url: `http://localhost:3000/posts/:id/delete`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        id: event.target.id,
      },
    }).pipe(
      map((response: AjaxResponse) => console.log('response: ', response)),
      catchError((error: any) => {
        console.log('error: ', error);
        return of(error);
      })
    )
  )
);
