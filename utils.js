export function getLocalStorage() {
  return localStorage.getItem('lang') || 'russian';
}

export function setLocalStorage() {
  localStorage.setItem('lang', getLocalStorage());
}

export const setKeyboardBtn = (value) => {
  const textarea = document.querySelector('.textarea');
  const cursorIndex = textarea.selectionStart;
  const firstPart = textarea.value.slice(0, cursorIndex);
  const secondPart = textarea.value.slice(cursorIndex);

  textarea.value = `${firstPart}${value}${secondPart}`;
  textarea.selectionStart = cursorIndex + 1;
  textarea.selectionEnd = cursorIndex + 1;
};

export const deleteKeyboardBtn = (operator) => {
  const textarea = document.querySelector('.textarea');
  const cursorIndex = textarea.selectionStart;
  const firstIndex = operator === 'back' ? cursorIndex - 1 : cursorIndex;
  const secondIndex = operator === 'del' ? cursorIndex + 1 : cursorIndex;
  const firstPart = textarea.value.slice(0, firstIndex);
  const secondPart = textarea.value.slice(secondIndex);

  textarea.value = `${firstPart}${secondPart}`;
  const selection = operator === 'del' ? cursorIndex : cursorIndex - 1;
  textarea.selectionStart = selection;
  textarea.selectionEnd = selection;
};

export function changeLanguage() {
  const rus = document.querySelectorAll('.russian');
  const eng = document.querySelectorAll('.english');
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
