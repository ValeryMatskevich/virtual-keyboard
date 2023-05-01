import buttons from './keybord.js';
import { getLocalStorage } from './utils.js';

const body = document.querySelector('body');
const wrapper = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboardBox = document.createElement('div');
const description = document.createElement('p');
const language = document.createElement('p');

body.className = 'body';
wrapper.className = 'wrapper';
title.className = 'title';
textarea.className = 'textarea';
textarea.setAttribute('id', 'textarea');
keyboardBox.className = 'keyboard';
description.className = 'description';
language.className = 'language';
title.innerText = 'Virtual keyboard';
description.innerText = 'The keyboard was created in the Windows';
language.innerText = 'To switch the language: left ctrl + left alt';

body.append(title);
body.append(textarea);
body.append(keyboardBox);
body.append(description);
body.append(language);

export default function init() {
  buttons.forEach((el) => {
    const row = document.createElement('div');
    row.className = 'row';
    keyboardBox.append(row);
    el.forEach((item) => {
      const btn = document.createElement('div');
      btn.className = `key ${item.className}`;
      row.append(btn);
      for (let i = 1; i < Object.keys(el[0]).length; i += 1) {
        const keys = Object.keys(el[0]);
        const span = document.createElement('span');

        if (getLocalStorage() === keys[i]) span.className = keys[i];
        else span.className = `${keys[i]} hidden`;

        btn.append(span);
        const a = Object.entries(item[keys[i]]);
        for (let j = 0; j < a.length; j += 1) {
          const btnSpan = document.createElement('span');
          if (a[j][0] === 'lower') btnSpan.className = `${a[j][0]}`;
          else btnSpan.className = `${a[j][0]} hidden`;
          btnSpan.innerText = `${a[j][1]}`;
          span.append(btnSpan);
        }
      }
    });
  });
  textarea.focus();
}
