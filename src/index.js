import { setUp } from './page_load.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import './style.css';

setUp();

export function listener() {
  let buttons = document.getElementsByClassName('links')

  buttons[0].addEventListener('click',() => {
    document.getElementById('content').innerHTML = '';
    setUp();
  });

  buttons[1].addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    menu();
  })

  buttons[2].addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    contact();
  })
};