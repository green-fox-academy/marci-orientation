import { fromEvent, from } from 'rxjs';
import { map, switchMap, takeUntil, takeWhile } from 'rxjs/operators';

const playButton = document.getElementById('play');
const song: HTMLAudioElement = document.getElementById(
  'song'
) as HTMLAudioElement;

fromEvent(playButton, 'click').subscribe(() => play());

function play() {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}
