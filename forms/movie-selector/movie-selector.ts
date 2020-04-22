import { fromEvent, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

const movies = [
  { movie: 'Moon', genre: 'sci-fi' },
  { movie: '2001: A Space Odyssey', genre: 'sci-fi' },
  { movie: 'Contact', genre: 'drama' },
  { movie: 'Darkest Hour', genre: 'drama' },
  { movie: 'There Will Be Blood', genre: 'drama' },
  { movie: 'American Beauty', genre: 'comedy' },
  { movie: 'Airplane!', genre: 'comedy' },
  { movie: 'Deadpool', genre: 'comedy' },
  { movie: "Wayne's World", genre: 'comedy' },
];

const selectGenre: HTMLInputElement = document.getElementById('select-genre');
const selectMovie: HTMLInputElement = document.getElementById('select-movie');
const result: HTMLParagraphElement = document.querySelector('p');

const helperFunction = () => {
  while (selectMovie.childNodes.length > 1) {
    selectMovie.removeChild(selectMovie.lastChild);
  }
};

const picker = () => {
  movies.forEach((element) => {
    if (element.genre === selectGenre.value) {
      const option: HTMLOptionElement = document.createElement('option');
      selectMovie.appendChild(option);
      option.innerText = element.movie;
      option.setAttribute('class', element.movie);
      option.setAttribute('value', element.movie);
    }
  });
};

const click$: Observable<string> = fromEvent(selectGenre, 'input').pipe(
  map(() => {
    helperFunction();
    picker();
  }),
  mergeMap(() => fromEvent(selectMovie, 'input')),
  map(() => (result.innerText = selectMovie.value))
);

click$.subscribe();
