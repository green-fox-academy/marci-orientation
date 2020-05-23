import { ajax, AjaxResponse } from 'rxjs/ajax';
import { of, fromEvent, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { playList } from './index';

export const getPlaylists$: Observable<void> = ajax
  .getJSON('http://localhost:3000/playlists/')
  .pipe(
    catchError((error: any) => {
      console.log('error', error);
      return of(error);
    }),
    map((response: AjaxResponse) => {
      for (let i = 0; i < playList.children.length; i++) {
        const clone: Node = playList.children[i].cloneNode(true);
        playList.appendChild(clone);
        playList.children[i].innerHTML = response[i].title;
        playList.children[i].id = response[i].path;
      }
    })
  );

export const getOneTrack$ = ajax
  .getJSON('http://localhost:3000/playlists/playlist-tracks/1')
  .pipe(
    catchError((error: any) => {
      console.log('error', error);
      return of(error);
    }),
    map((response: AjaxResponse) => console.log)
  );
