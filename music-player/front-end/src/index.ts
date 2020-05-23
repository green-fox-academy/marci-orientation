import { fromEvent, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

const playButton = document.getElementById('play');
const song: HTMLAudioElement = document.getElementById(
  'song'
) as HTMLAudioElement;
const volumeControl = document.getElementById('volume-control');

song.volume = 0.25;

fromEvent(playButton, 'click').subscribe(() => play());

function play(): void {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}

fromEvent(volumeControl, 'input')
  .pipe(map((e) => (song.volume = e.target.value / 100)))
  .subscribe(console.log);

// console.log(volumeControl);

// volumeControl
