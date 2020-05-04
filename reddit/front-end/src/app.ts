import { fromEvent, of, Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { AjaxResponse, ajax, AjaxRequest } from 'rxjs/ajax';

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];

const submitInfo: HTMLParagraphElement = document.getElementsByClassName(
  'submit-info'
)[0] as HTMLParagraphElement;
const postTitle: HTMLParagraphElement = document.getElementsByClassName(
  'post-title'
)[0] as HTMLParagraphElement;
const voteCount: HTMLParagraphElement = document.getElementById(
  'vote-count'
) as HTMLParagraphElement;

const article: HTMLElement = document.getElementById('post-1');

const button: HTMLButtonElement = document.getElementById(
  'submit-button'
) as HTMLButtonElement;
const deletePostBtn: HTMLButtonElement = document.getElementById(
  'delete-button'
) as HTMLButtonElement;

const titleInputField: HTMLInputElement = document.getElementById(
  'title-input'
) as HTMLInputElement;

const urlInputField: HTMLInputElement = document.getElementById(
  'url-input'
) as HTMLInputElement;

//creating new post
const createNewPost$: Observable<AjaxRequest> = ajax({
  url: 'http://localhost:3000/posts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    title: titleInputField.value,
    url: urlInputField.value,
    owner: 'Donald Trump',
    timestamp: 2,
    score: 0,
    vote: 0,
  },
}).pipe(
  map((response) => console.log('response: ', response)),
  catchError((error) => {
    console.log('error: ', error);
    return of(error);
  })
);

//click on submit button to create a new post
fromEvent(button, 'click')
  .pipe(switchMap(() => createNewPost$))
  .subscribe(console.log);

//delete post by article id
const deletePost$: Observable<AjaxRequest> = ajax({
  url: 'http://localhost:3000/posts/:id/delete',
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    id: article.id,
  },
}).pipe(
  map((response: AjaxResponse) => console.log('response: ', response)),
  catchError((error: any) => {
    console.log('error: ', error);
    return of(error);
  })
);

deletePost$.subscribe(console.log);

function displayInfo(x: any): void {
  for (let i = 0; i < x.length; i++) {
    const element: HTMLElement = article;
    const clonedElement: Node = element.cloneNode(true);
    body.appendChild(clonedElement);
    postTitle.innerHTML = x[i].title;
    voteCount.innerHTML = x[i].vote;
    submitInfo.innerText = `Submitted ${x[i].timestamp} years ago by ${x[i].owner}`;
    article.id = x[i].id;
    deletePostBtn.className = `delete-button-${x[i].id}`;

    console.log('clone', clonedElement);
  }
}

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
//use helper function to output data into the DOM
data$.subscribe((x: any) => {
  displayInfo(x);
});
