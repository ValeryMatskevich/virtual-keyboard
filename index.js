import { getLocalStorage, setLocalStorage } from './utils.js';
import init from './init.js';
import { addKeyboardListeners, addClickListener } from './listeners.js';

init();
addKeyboardListeners();
addClickListener();

window.addEventListener('load', getLocalStorage);

window.addEventListener('beforeunload', setLocalStorage);
