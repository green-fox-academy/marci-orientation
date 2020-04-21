import { fromEvent, Observable } from 'rxjs';
import { mergeMapTo } from 'rxjs/operators';

const nav: HTMLElement = document.querySelector('nav');
const imgInspector: Element = document.querySelector('.img-inspector');
const click$: Observable<Event> = fromEvent(nav, 'click');

const initialState = {
  size: 200,
  verticalPos: 0,
  horizontalPos: 0,
};

const setAttribute = (a: number, b: number, c: number) => {
  return imgInspector.setAttribute(
    'style',
    `background-size: ${(initialState.size += a)}%; background-position: ${(initialState.horizontalPos += c)}px ${(initialState.verticalPos += b)}px`
  );
};

//prettier-ignore

click$
  .pipe(
    mergeMapTo(() => {
      return {
        up: event.target.innerText === 'Up' ? setAttribute(0, -10, 0) : null,
        down: event.target.innerText === 'Down' ? setAttribute(0, 10, 0) : null,
        left: event.target.innerText === 'Left' ? setAttribute(0, 0, -10) : null,
        right: event.target.innerText === 'Right' ? setAttribute(0, 0, 10) : null,
        zoomIn: event.target.innerText === 'Zoom in' ? setAttribute(20, 0, 0) : null,
        zoomOut: event.target.innerText === 'Zoom out' ? setAttribute(-20, 0, 0) : null,
    };
}))
    .subscribe();
