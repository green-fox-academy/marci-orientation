import { fromEvent, of, Observable } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  distinctUntilKeyChanged,
} from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { AjaxResponse, ajax, AjaxRequest } from 'rxjs/ajax';
import { ajaxPost } from 'rxjs/internal/observable/dom/AjaxObservable';

const post: HTMLElement = document.getElementById('post');
const postSection: HTMLElement = document.getElementsByTagName('section')[0];

const submitInfo: HTMLParagraphElement = document.getElementById(
  'submit-info'
) as HTMLParagraphElement;
const postTitle: HTMLHeadElement = document.getElementById('content-header');
const voteCount: HTMLDivElement = document.getElementById(
  'vote-counter'
) as HTMLDivElement;
const upvote: HTMLDivElement = document.getElementById(
  'upvote'
) as HTMLDivElement;
const downvote: HTMLDivElement = document.getElementById(
  'downvote'
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
    switchMap(() => deletePost)
  )
  .subscribe(console.log);

//creating new post
const createNewPost$ = fromEvent(submitNewPostForm, 'submit').pipe(
  map((event) => event.preventDefault()),

  switchMap(() =>
    ajaxPost('http://localhost:3000/posts', {
      title: submitPostTitle.value,
      url: submitPostUrl.value,
      owner: 'submitInfo',
      timestamp: 2,
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

function displayInfo(x: any): void {
  for (let i = 0; i < x.length; i++) {
    const article: HTMLElement = post;
    const clonedPost: Node = post.cloneNode(true);
    postSection.insertBefore(clonedPost, postSection.childNodes[2]);
    postTitle.innerHTML = x[i].title + ` ${x[i].id}`;
    voteCount.innerHTML = x[i].vote;
    submitInfo.innerText = `Submitted ${x[i].timestamp} years ago by ${x[i].owner}`;
    article.id = x[i].id;
    // deletePost.id = `delete-post-${x[i].id}`;
  }
}

fromEvent(upvote, 'click').subscribe(console.log);
fromEvent(downvote, 'click').subscribe(console.log);

const identifier = deletePostBtn[0];
console.log('parent nodes', identifier.parentElement.id);

//delete post by article id
const deletePost$: Observable<AjaxRequest> = ajax({
  url: `http://localhost:3000/posts/:id/delete`,
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    id: {},
  },
}).pipe(
  map((response: AjaxResponse) => console.log('response: ', response)),
  catchError((error: any) => {
    console.log('error: ', error);
    return of(error);
  })
);

const deletePost = fromEvent(deletePostBtn, 'click').pipe(
  switchMap(() => deletePost$)
);
