import { fromEvent, of, from } from 'rxjs';
import {
  map,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  pluck,
  mergeMap,
} from 'rxjs/operators';

const playButton = document.getElementById('play');
const song: HTMLAudioElement = document.getElementById(
  'song'
) as HTMLAudioElement;
const volumeControl = of(document.getElementById('volume-control')).pipe(
  pluck('value')
);
const temp = document.getElementById('shuffle');

song.volume = 0.1;

fromEvent(playButton, 'click')
  .pipe(
    mergeMap(() => volumeControl),
    map(console.log)
  )
  .subscribe(() => play());

function play(): void {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}

// console.log(volumeControl);

// volumeControl
