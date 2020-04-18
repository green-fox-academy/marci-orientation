import {
  fromEvent,
  Observable,
  Observer,
  Subscriber,
  Subscription,
} from 'rxjs';
import { take } from 'rxjs/operators';

const button: HTMLButtonElement = document.querySelector('button');
const message: Element = document.querySelector('.result');
const click$: Observable<Event> = fromEvent(button, 'click').pipe(take(3));

const observer: Observer<Event> = {
  next: (value) => console.log(value),
  error: (error) => console.log('error', error),
  complete: () => (message.innerHTML = '5 seconds passed and clicked 3 times'),
};

const observable: Observable<unknown> = new Observable(
  (subscriber: Subscriber<string>) => {
    subscriber.next('logging your clicks, brah');
  }
);

const subscription: Subscription = observable.subscribe(observer);

setTimeout(() => {
  subscription.unsubscribe();
  click$.subscribe(observer);
}, 5000);
