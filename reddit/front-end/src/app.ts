import { fromEvent, of, Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
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

//fetch all posts
const data$: Observable<AjaxRequest> = fromFetch(
  'http://localhost:3000/posts'
).pipe(
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

data$
  .pipe(
    map((x: AjaxRequest) => displayInfo(x)),
    switchMap(() => deletePost$),
    switchMap(() => upvote$)
  )
  .subscribe(console.log);

//creating new post
const createNewPost$ = fromEvent(submitNewPostForm, 'submit').pipe(
  map((event: Event) => event.preventDefault()),
  switchMap(() =>
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

createNewPost$.subscribe((e) => console.log(e));

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

const upvote$ = fromEvent(upvotePost, 'click').pipe(
  switchMap((event) =>
    ajaxPut(`http://localhost:3000/posts/:id/upvote`, {
      id: event.target,
      vote: 765,
    })
  ),
  catchError((error: any) => {
    console.log('error: ', error);
    return of(error);
  })
);

const deletePost$: Observable<Event> = fromEvent(deletePostBtn, 'click').pipe(
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
