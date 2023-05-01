import { getLocalStorage, setLocalStorage } from './utils.js';
import init from './init.js';

init();

const capsOn = document.querySelectorAll('.capsOn');
const lower = document.querySelectorAll('.lower');
const upper = document.querySelectorAll('.upper');
const rus = document.querySelectorAll('.russian');
const eng = document.querySelectorAll('.english');

document.addEventListener('keydown', (event) => {
  const actBtn = document.querySelector(`.${event.code}`);
  actBtn.classList.toggle('active');
});
document.addEventListener('keyup', (event) => {
  const actBtn = document.querySelector(`.${event.code}`);
  if (event.code !== 'CapsLock') actBtn.classList.toggle('active');
});

window.addEventListener('load', getLocalStorage);

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

function changeLanguage() {
  if (getLocalStorage() === 'russian') {
    eng.forEach((el) => {
      el.classList.add('hidden');
    });
    rus.forEach((el) => {
      el.classList.remove('hidden');
    });
  }
  if (getLocalStorage() === 'english') {
    eng.forEach((el) => {
      el.classList.remove('hidden');
    });
    rus.forEach((el) => {
      el.classList.add('hidden');
    });
  }
}

document.addEventListener('keydown', (event) => {
  if (event.altKey && event.ctrlKey) {
    const lang = getLocalStorage() === 'russian' ? 'english' : 'russian';
    localStorage.setItem('lang', lang);
    changeLanguage();
  }
});
