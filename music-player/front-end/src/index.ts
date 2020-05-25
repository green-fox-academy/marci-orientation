import { fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { getOneTrack$, getPlaylists$ } from './fetch-playlist';

const playButton: HTMLImageElement = document.getElementById(
  'play'
) as HTMLImageElement;
export const song: HTMLAudioElement = document.getElementById(
  'song'
) as HTMLAudioElement;
const volumeControl: HTMLInputElement = document.getElementById(
  'volume-control'
) as HTMLInputElement;
const currentVolume: HTMLParagraphElement = document.getElementById(
  'current-volume'
) as HTMLParagraphElement;
let songCurrentTime: HTMLParagraphElement = document.getElementById(
  'song-current-time'
) as HTMLParagraphElement;
const songTotalTime: HTMLParagraphElement = document.getElementById(
  'song-total-time'
) as HTMLParagraphElement;
const rewind: HTMLImageElement = document.getElementById(
  'rewind'
) as HTMLImageElement;
const forward: HTMLImageElement = document.getElementById(
  'forward'
) as HTMLImageElement;

export const playList: Element = document.getElementsByClassName(
  'playlists'
)[0];

song.volume = 0;

fromEvent(playButton, 'click').subscribe(() => play());

function play(): void {
  if (song.paused) {
    playButton.childNodes[2].src = '/assets/images/pause.svg';
    song.play();
    getOneTrack$.subscribe(console.log);
  } else {
    playButton.childNodes[2].src = '/assets/images/play.svg';
    song.pause();
  }
}

fromEvent(volumeControl, 'input')
  .pipe(map((e) => (song.volume = e.target.value / 100)))
  .subscribe((e) => (currentVolume.innerHTML = (e * 100).toFixed(0)));

getPlaylists$.subscribe();

fromEvent(playList.children, 'click')
  .pipe(
    map((x: MouseEvent) => (song.src = x.target.id)),
    map(() => console.log(song.duration))
  )
  .subscribe(() => play());

const duration = of(song.duration);

const elapsedTime$ = fromEvent(song, 'timeupdate').subscribe(
  () => (songCurrentTime.innerHTML = song.currentTime.toFixed())
);

// fromEvent(rewind, 'click').subscribe(() => console.log(song.duration));
