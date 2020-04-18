import { fromEvent } from 'rxjs';

const username: Element = document.querySelector('#username');
const loginBtn: HTMLFormElement = document.querySelector('form');
const pwFill: HTMLElement = document.getElementById('passw');
const reqPassword = document.getElementById('user');

fromEvent(username, 'keyup').subscribe((username: Event) => {
  if (username.target.value.length < 5) {
    reqPassword.innerText = 'need more than 5 characters';
  } else {
    reqPassword.innerText = 'we coo';
  }
});

fromEvent(loginBtn, 'submit').subscribe((loginBtn: Event) => {
  loginBtn.preventDefault();
  pwFill.innerText = 'disabled!';
});
