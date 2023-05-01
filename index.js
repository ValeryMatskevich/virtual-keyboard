import buttons from './keybord.js';

const body = document.querySelector('body');
const wrapper = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboardBox = document.createElement('div');
const description = document.createElement('p');
const language = document.createElement('p');

wrapper.className = 'wrapper';
title.className = 'title';
textarea.className = 'textarea';
keyboardBox.className = 'keyboard';
description.className = 'description';
language.className = 'language';

title.innerText = 'Virtual keyboard';
description.innerText = 'The keyboard was created in the Windows';
language.innerText = 'To switch the language: left shift + left alt';

body.append(title);
body.append(textarea);
body.append(keyboardBox);
body.append(description);
body.append(language);

function init() {
  buttons.forEach((el) => {
    const row = document.createElement('div');
    row.className = 'row';
    keyboardBox.append(row);
    el.forEach((item) => {
      const btn = document.createElement('div');
      btn.className = `key ${item.className}`;
      btn.innerText = item.russian.lower;
      row.append(btn);
      console.log(item.className);
    });
  });
}

init();
