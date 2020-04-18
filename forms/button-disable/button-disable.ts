import { fromEvent, Subscription } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

const pets: NodeListOf<Element> = document.querySelectorAll(
  'input[name="pets"]'
);
const facts: NodeListOf<Element> = document.querySelectorAll(
  'input[name="facts"]'
);

const signUp: HTMLElement = document.getElementById('sign-up');
const catButton: HTMLElement = document.getElementById('love');
const allButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
  'button'
);

const animals: string[] = ['dog', 'cat'];

const final: Subscription = fromEvent(allButtons, 'click').subscribe(() => {
  alert('Signed up for cat facts!');
});

pets.forEach((pet) => {
  fromEvent(pet, 'change').subscribe(() => {
    animals.indexOf(pet.value) !== -1
      ? (signUp.disabled = false)
      : (signUp.disabled = true);
  });
});

facts.forEach((fact) => {
  fromEvent(fact, 'change')
    .pipe(
      map(() => {
        fact.id === 'factsYes'
          ? (catButton.disabled = false)
          : (catButton.disabled = true);
      }),
      finalize(() => final)
    )
    .subscribe();
});
