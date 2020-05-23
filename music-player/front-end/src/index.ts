import { fromEvent, of, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const playButton: HTMLImageElement = document.getElementById(
  'play'
) as HTMLImageElement;
const song: HTMLAudioElement = document.getElementById(
  'song'
) as HTMLAudioElement;
const volumeControl: HTMLInputElement = document.getElementById(
  'volume-control'
) as HTMLInputElement;
const currentVolume: HTMLParagraphElement = document.getElementById(
  'current-volume'
) as HTMLParagraphElement;
const songCurrentTime: HTMLParagraphElement = document.getElementById(
  'song-current-time'
) as HTMLParagraphElement;
const songTotalTime: HTMLParagraphElement = document.getElementById(
  'song-total-time'
) as HTMLParagraphElement;

const playList = document.getElementsByClassName('playlists')[0];
console.log(playList.children);

for (let i = 0; i < playList.children.length; i++) {
  playList.children[i].innerHTML = 'asd';
}

song.volume = 0;
// playButton.childNodes[2].src = '/assets/images/pause.svg';
// console.log(playButton.childNodes[2].src);

fromEvent(playButton, 'click').subscribe(() => play());

function play(): void {
  if (song.paused) {
    playButton.childNodes[2].src = '/assets/images/pause.svg';
    song.play();
  } else {
    playButton.childNodes[2].src = '/assets/images/play.svg';
    song.pause();
  }
}

fromEvent(volumeControl, 'input')
  .pipe(map((e) => (song.volume = e.target.value / 100)))
  .subscribe((e) => (currentVolume.innerHTML = (e * 100).toFixed(0)));
