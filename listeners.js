import {
  changeLanguage, getLocalStorage, setKeyboardBtn, deleteKeyboardBtn,
} from './utils.js';

export function addKeyboardListeners() {
  const capsOn = document.querySelectorAll('.capsOn');
  const lower = document.querySelectorAll('.lower');
  const upper = document.querySelectorAll('.upper');
  const capsLock = document.querySelector('.CapsLock');

  document.addEventListener('keydown', (event) => {
    const actBtn = document.querySelector(`.${event.code}`);
    if (actBtn.classList.contains('active')) actBtn.classList.remove('active');
    else actBtn.classList.add('active');
  });

  document.addEventListener('keyup', (event) => {
    const actBtn = document.querySelector(`.${event.code}`);
    if (event.code !== 'CapsLock') actBtn.classList.remove('active');
  });

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

  document.addEventListener('keydown', (event) => {
    if (event.altKey && event.ctrlKey) {
      const lang = getLocalStorage() === 'russian' ? 'english' : 'russian';
      localStorage.setItem('lang', lang);
      changeLanguage();
    }
    if (event.code === 'Tab') {
      event.preventDefault();
      setKeyboardBtn('\t');
    }
  });
}

export function addClickListener() {
  document.addEventListener('click', (event) => {
    const textarea = document.querySelector('.textarea');
    textarea.focus();
    const item = event.target.closest('.key');
    if (!item) return;
    const itemClass = item.className.split(' ')[1];

    switch (itemClass) {
      case 'Tab': {
        setKeyboardBtn('\t');
        break;
      }
      case 'Enter': {
        setKeyboardBtn('\n');
        break;
      }
      case 'CapsLock': {
        const capsOn = document.querySelectorAll('.capsOn');
        const lower = document.querySelectorAll('.lower');
        item.classList.toggle('active');
        capsOn.forEach((el) => {
          el.classList.toggle('hidden');
        });
        lower.forEach((el) => {
          el.classList.toggle('hidden');
        });
        break;
      }
      case 'Backspace': {
        deleteKeyboardBtn('back');
        break;
      }
      case 'Delete': {
        deleteKeyboardBtn('del');
        break;
      }
      case 'Space': {
        textarea.setRangeText(' ', 0, 0, 'end');
        break;
      }
      default: textarea.value += event.target.innerText;
    }
  });
}
