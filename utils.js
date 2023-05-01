export function getLocalStorage() {
  return localStorage.getItem('lang') || 'russian';
}

export function setLocalStorage() {
  localStorage.setItem('lang', getLocalStorage());
}
