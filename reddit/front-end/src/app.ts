import { fromEvent, of } from 'rxjs';
import { mergeMap, map, switchMap, catchError, tap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { AjaxResponse } from 'rxjs/ajax';
import { ajaxPost, ajaxPut } from 'rxjs/internal/observable/dom/AjaxObservable';

const button = document.getElementById('submit-button');
const upvote: HTMLImageElement = document.getElementById('upvote');
const downvote: HTMLImageElement = document.getElementById('downvote');
const voteCount = document.getElementById('vote-count');
let clicks = 0;

const asd = fromEvent(upvote, 'click')
  .pipe(map(() => (upvote.src = 'assets/upvoted.png')))
  .subscribe(() => (downvote.src = 'assets/downvote.png'));

fromEvent(downvote, 'click')
  .pipe(map(() => (downvote.src = 'assets/downvoted.png')))
  .subscribe(() => (upvote.src = 'assets/upvote.png'));

// upvote.addEventListener('click', () => {
//   upvote.src = 'assets/upvoted.png';
//   downvote.src = 'assets/downvote.png';
//   clicks += 1;
//   voteCount.innerHTML = clicks;
// });

// downvote.addEventListener('click', () => {
//   downvote.src = 'assets/downvoted.png';
//   upvote.src = 'assets/upvote.png';
//   clicks -= 1;
//   voteCount.innerHTML = clicks;
// });

let votes: number = 1;

const submitted$ = fromEvent(button, 'click').pipe(
  switchMap(() =>
    ajaxPut(
      'http://localhost:3000/posts/2/upvote',
      {
        vote: votes++,
        score: 2,
      },
      { 'Content-Type': 'application/json' }
    )
  ),

  map((response: AjaxResponse) => console.log(response)),
  catchError((error: any) => {
    console.log('error: ', error);
    return of(error);
  })
);

submitted$.subscribe();
