import buttons from './keybord.js';

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

let lang = 'russian';

function changeLanguage() {
  lang = localStorage.getItem('lang') || 'russian';
  document.addEventListener('keydown', (event) => {
    if (event.code === 'AltLeft' && event.code === 'ControlLeft') {
      lang = lang === 'russian' ? 'english' : 'russian';
      localStorage.setItem('lang', lang);
    }
  });
}

function init() {
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

        if (lang === keys[i]) span.className = keys[i];
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
}

init();

const capsOn = document.querySelectorAll('.capsOn');
const lower = document.querySelectorAll('.lower');
const upper = document.querySelectorAll('.upper');
const shiftCaps = document.querySelectorAll('.shiftCaps');

document.addEventListener('keydown', (event) => {
  const actBtn = document.querySelector(`.${event.code}`);
  actBtn.classList.toggle('active');
});
document.addEventListener('keyup', (event) => {
  const actBtn = document.querySelector(`.${event.code}`);
  if (event.code !== 'CapsLock') actBtn.classList.toggle('active');
});

function getLocalStorage() {
  lang = localStorage.getItem('lang') || 'russian';
}
window.addEventListener('load', getLocalStorage);
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

const capsLock = document.querySelector('.CapsLock');

document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') {
    capsOn.forEach((el) => {
      el.classList.toggle('hidden');
    });
    lower.forEach((el) => {
      el.classList.toggle('hidden');
    });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' && capsLock.classList.contains('active')) {
    capsOn.forEach((el) => {
      if (!el.classList.contains('hidden')) el.classList.add('hidden');
    });
    lower.forEach((el) => {
      if (el.classList.contains('hidden')) el.classList.remove('hidden');
    });
  }
  if (event.code === 'ShiftLeft') {
    lower.forEach((el) => {
      if (!el.classList.contains('hidden')) el.classList.add('hidden');
    });
    upper.forEach((el) => {
      if (el.classList.contains('hidden')) el.classList.remove('hidden');
    });
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' && capsLock.classList.contains('active')) {
    capsOn.forEach((el) => {
      if (!el.classList.contains('hidden')) el.classList.remove('hidden');
    });
    lower.forEach((el) => {
      if (el.classList.contains('hidden')) el.classList.add('hidden');
    });
  }
  if (event.code === 'ShiftLeft') {
    lower.forEach((el) => {
      if (el.classList.contains('hidden')) el.classList.remove('hidden');
    });
    upper.forEach((el) => {
      if (!el.classList.contains('hidden')) el.classList.add('hidden');
    });
  }
});
