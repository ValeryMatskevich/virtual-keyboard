const buttons = [
  [
    {
      className: 'Backquote',
      english: {
        capsOn: '`',
        lower: '`',
        upper: '~',
        shiftCaps: '~',
      },
      russian: {
        capsOn: 'Ё',
        lower: 'ё',
        upper: 'Ё',
        shiftCaps: 'Ё',
      },
    },
    {
      className: 'Digit1',
      english: {
        capsOn: '1',
        lower: '1',
        upper: '!',
        shiftCaps: '!',
      },
      russian: {
        capsOn: '1',
        lower: '1',
        upper: '!',
        shiftCaps: '!',
      },
    },
    {
      className: 'Digit2',
      english: {
        capsOn: '2',
        lower: '2',
        upper: '@',
        shiftCaps: '@',
      },
      russian: {
        capsOn: '2',
        lower: '2',
        upper: '"',
        shiftCaps: '"',
      },
    },
    {
      className: 'Digit3',
      english: {
        capsOn: '3',
        lower: '3',
        upper: '#',
        shiftCaps: '#',
      },
      russian: {
        capsOn: '3',
        lower: '3',
        upper: '№',
        shiftCaps: '№',
      },
    },
    {
      className: 'Digit4',
      english: {
        capsOn: '4',
        lower: '4',
        upper: '$',
        shiftCaps: '$',
      },
      russian: {
        capsOn: '4',
        lower: '4',
        upper: ';',
        shiftCaps: ';',
      },
    },
    {
      className: 'Digit5',
      english: {
        capsOn: '5',
        lower: '5',
        upper: '%',
        shiftCaps: '%',
      },
      russian: {
        capsOn: '5',
        lower: '5',
        upper: '%',
        shiftCaps: '%',
      },
    },
    {
      className: 'Digit6',
      english: {
        capsOn: '6',
        lower: '6',
        upper: '^',
        shiftCaps: '^',
      },
      russian: {
        capsOn: '6',
        lower: '6',
        upper: ':',
        shiftCaps: ':',
      },
    },
    {
      className: 'Digit7',
      english: {
        capsOn: '7',
        lower: '7',
        upper: '&',
        shiftCaps: '&',
      },
      russian: {
        capsOn: '7',
        lower: '7',
        upper: '?',
        shiftCaps: '?',
      },
    },
    {
      className: 'Digit8',
      english: {
        capsOn: '8',
        lower: '8',
        upper: '*',
        shiftCaps: '*',
      },
      russian: {
        capsOn: '8',
        lower: '8',
        upper: '*',
        shiftCaps: '*',
      },
    },
    {
      className: 'Digit9',
      english: {
        capsOn: '9',
        lower: '9',
        upper: '(',
        shiftCaps: '(',
      },
      russian: {
        capsOn: '9',
        lower: '9',
        upper: '(',
        shiftCaps: '(',
      },
    },
    {
      className: 'Digit0',
      english: {
        capsOn: '0',
        lower: '0',
        upper: ')',
        shiftCaps: ')',
      },
      russian: {
        capsOn: '0',
        lower: '0',
        upper: ')',
        shiftCaps: ')',
      },
    },
    {
      className: 'Minus',
      english: {
        capsOn: '-',
        lower: '-',
        upper: '_',
        shiftCaps: '_',
      },
      russian: {
        capsOn: '-',
        lower: '-',
        upper: '_',
        shiftCaps: '_',
      },
    },
    {
      className: 'Equal',
      english: {
        capsOn: '=',
        lower: '=',
        upper: '+',
        shiftCaps: '+',
      },
      russian: {
        capsOn: '=',
        lower: '=',
        upper: '+',
        shiftCaps: '+',
      },
    },
    {
      className: 'Backspace',
      english: {
        capsOn: 'Backspace',
        lower: 'Backspace',
        upper: 'Backspace',
        shiftCaps: 'Backspace',
      },
      russian: {
        capsOn: 'Backspace',
        lower: 'Backspace',
        upper: 'Backspace',
        shiftCaps: 'Backspace',
      },
    },
  ],
  [
    {
      className: 'Tab',
      english: {
        capsOn: 'Tab',
        lower: 'Tab',
        upper: 'Tab',
        shiftCaps: 'Tab',
      },
      russian: {
        capsOn: 'Tab',
        lower: 'Tab',
        upper: 'Tab',
        shiftCaps: 'Tab',
      },
    },
    {
      className: 'KeyQ',
      english: {
        capsOn: 'Q',
        lower: 'q',
        upper: 'Q',
        shiftCaps: 'Q',
      },
      russian: {
        capsOn: 'Й',
        lower: 'й',
        upper: 'Й',
        shiftCaps: 'Й',
      },
    },
    {
      className: 'KeyW',
      english: {
        capsOn: 'W',
        lower: 'w',
        upper: 'W',
        shiftCaps: 'W',
      },
      russian: {
        capsOn: 'Ц',
        lower: 'ц',
        upper: 'Ц',
        shiftCaps: 'Ц',
      },
    },
    {
      className: 'KeyE',
      english: {
        capsOn: 'E',
        lower: 'e',
        upper: 'E',
        shiftCaps: 'E',
      },
      russian: {
        capsOn: 'У',
        lower: 'у',
        upper: 'У',
        shiftCaps: 'У',
      },
    },
    {
      className: 'KeyR',
      english: {
        capsOn: 'R',
        lower: 'r',
        upper: 'R',
        shiftCaps: 'R',
      },
      russian: {
        capsOn: 'К',
        lower: 'к',
        upper: 'К',
        shiftCaps: 'К',
      },
    },
    {
      className: 'KeyT',
      english: {
        capsOn: 'T',
        lower: 't',
        upper: 'T',
        shiftCaps: 'T',
      },
      russian: {
        capsOn: 'Е',
        lower: 'е',
        upper: 'Е',
        shiftCaps: 'Е',
      },
    },
    {
      className: 'KeyY',
      english: {
        capsOn: 'Y',
        lower: 'y',
        upper: 'Y',
        shiftCaps: 'Y',
      },
      russian: {
        capsOn: 'Н',
        lower: 'н',
        upper: 'Н',
        shiftCaps: 'Н',
      },
    },
    {
      className: 'KeyU',
      english: {
        capsOn: 'U',
        lower: 'u',
        upper: 'U',
        shiftCaps: 'U',
      },
      russian: {
        capsOn: 'Г',
        lower: 'г',
        upper: 'Г',
        shiftCaps: 'Г',
      },
    },
    {
      className: 'KeyI',
      english: {
        capsOn: 'I',
        lower: 'i',
        upper: 'I',
        shiftCaps: 'I',
      },
      russian: {
        capsOn: 'Ш',
        lower: 'ш',
        upper: 'Ш',
        shiftCaps: 'Ш',
      },
    },
    {
      className: 'KeyO',
      english: {
        capsOn: 'O',
        lower: 'o',
        upper: 'O',
        shiftCaps: 'O',
      },
      russian: {
        capsOn: 'Щ',
        lower: 'щ',
        upper: 'Щ',
        shiftCaps: 'Щ',
      },
    },
    {
      className: 'KeyP',
      english: {
        capsOn: 'P',
        lower: 'p',
        upper: 'P',
        shiftCaps: 'P',
      },
      russian: {
        capsOn: 'З',
        lower: 'з',
        upper: 'З',
        shiftCaps: 'З',
      },
    },
    {
      className: 'BracketLeft',
      english: {
        capsOn: '[',
        lower: '[',
        upper: '{',
        shiftCaps: '{',
      },
      russian: {
        capsOn: 'Х',
        lower: 'х',
        upper: 'Х',
        shiftCaps: 'Х',
      },
    },
    {
      className: 'BracketRight',
      english: {
        capsOn: ']',
        lower: ']',
        upper: '}',
        shiftCaps: '}',
      },
      russian: {
        capsOn: 'Ъ',
        lower: 'ъ',
        upper: 'Ъ',
        shiftCaps: 'Ъ',
      },
    },
    {
      className: 'Backslash',
      english: {
        capsOn: '\\',
        lower: '\\',
        upper: '|',
        shiftCaps: '|',
      },
      russian: {
        capsOn: '\\',
        lower: '\\',
        upper: '/',
        shiftCaps: '/',
      },
    },
    {
      className: 'Delete',
      english: {
        capsOn: 'Del',
        lower: 'Del',
        upper: 'Del',
        shiftCaps: 'Del',
      },
      russian: {
        capsOn: 'Del',
        lower: 'Del',
        upper: 'Del',
        shiftCaps: 'Del',
      },
    },
  ],
  [
    {
      className: 'CapsLock',
      english: {
        capsOn: 'Caps lock',
        lower: 'Caps lock',
        upper: 'Caps lock',
        shiftCaps: 'Caps lock',
      },
      russian: {
        capsOn: 'Caps lock',
        lower: 'Caps lock',
        upper: 'Caps lock',
        shiftCaps: 'Caps lock',
      },
    },
    {
      className: 'KeyA',
      english: {
        capsOn: 'A',
        lower: 'a',
        upper: 'A',
        shiftCaps: 'A',
      },
      russian: {
        capsOn: 'Ф',
        lower: 'ф',
        upper: 'Ф',
        shiftCaps: 'Ф',
      },
    },
    {
      className: 'KeyS',
      english: {
        capsOn: 'S',
        lower: 's',
        upper: 'S',
        shiftCaps: 'S',
      },
      russian: {
        capsOn: 'Ы',
        lower: 'ы',
        upper: 'Ы',
        shiftCaps: 'Ы',
      },
    },
    {
      className: 'KeyD',
      english: {
        capsOn: 'D',
        lower: 'd',
        upper: 'D',
        shiftCaps: 'D',
      },
      russian: {
        capsOn: 'В',
        lower: 'в',
        upper: 'В',
        shiftCaps: 'В',
      },
    },
    {
      className: 'KeyF',
      english: {
        capsOn: 'F',
        lower: 'f',
        upper: 'F',
        shiftCaps: 'F',
      },
      russian: {
        capsOn: 'А',
        lower: 'а',
        upper: 'А',
        shiftCaps: 'А',
      },
    },
    {
      className: 'KeyG',
      english: {
        capsOn: 'G',
        lower: 'g',
        upper: 'G',
        shiftCaps: 'G',
      },
      russian: {
        capsOn: 'П',
        lower: 'п',
        upper: 'П',
        shiftCaps: 'П',
      },
    },
    {
      className: 'KeyH',
      english: {
        capsOn: 'H',
        lower: 'h',
        upper: 'H',
        shiftCaps: 'H',
      },
      russian: {
        capsOn: 'Р',
        lower: 'р',
        upper: 'Р',
        shiftCaps: 'Р',
      },
    },
    {
      className: 'KeyJ',
      english: {
        capsOn: 'J',
        lower: 'j',
        upper: 'J',
        shiftCaps: 'J',
      },
      russian: {
        capsOn: 'О',
        lower: 'о',
        upper: 'О',
        shiftCaps: 'О',
      },
    },
    {
      className: 'KeyK',
      english: {
        capsOn: 'K',
        lower: 'k',
        upper: 'K',
        shiftCaps: 'K',
      },
      russian: {
        capsOn: 'Л',
        lower: 'л',
        upper: 'Л',
        shiftCaps: 'Л',
      },
    },
    {
      className: 'KeyL',
      english: {
        capsOn: 'L',
        lower: 'l',
        upper: 'L',
        shiftCaps: 'L',
      },
      russian: {
        capsOn: 'Д',
        lower: 'д',
        upper: 'Д',
        shiftCaps: 'Д',
      },
    },
    {
      className: 'Semicolon',
      english: {
        capsOn: ';',
        lower: ';',
        upper: ':',
        shiftCaps: ':',
      },
      russian: {
        capsOn: 'Ж',
        lower: 'ж',
        upper: 'Ж',
        shiftCaps: 'Ж',
      },
    },
    {
      className: 'Quote',
      english: {
        capsOn: "'",
        lower: "'",
        upper: '"',
        shiftCaps: '"',
      },
      russian: {
        capsOn: 'Э',
        lower: 'э',
        upper: 'Э',
        shiftCaps: 'Э',
      },
    },
    {
      className: 'Enter',
      english: {
        capsOn: 'Enter',
        lower: 'Enter',
        upper: 'Enter',
        shiftCaps: 'Enter',
      },
      russian: {
        capsOn: 'Enter',
        lower: 'Enter',
        upper: 'Enter',
        shiftCaps: 'Enter',
      },
    },
  ],
  [
    {
      className: 'ShiftLeft',
      english: {
        capsOn: 'Shift',
        lower: 'Shift',
        upper: 'Shift',
        shiftCaps: 'Shift',
      },
      russian: {
        capsOn: 'Shift',
        lower: 'Shift',
        upper: 'Shift',
        shiftCaps: 'Shift',
      },
    },
    {
      className: 'KeyZ',
      english: {
        capsOn: 'Z',
        lower: 'z',
        upper: 'Z',
        shiftCaps: 'Z',
      },
      russian: {
        capsOn: 'Я',
        lower: 'я',
        upper: 'Я',
        shiftCaps: 'Я',
      },
    },
    {
      className: 'KeyX',
      english: {
        capsOn: 'X',
        lower: 'x',
        upper: 'X',
        shiftCaps: 'X',
      },
      russian: {
        capsOn: 'Ч',
        lower: 'ч',
        upper: 'Ч',
        shiftCaps: 'Ч',
      },
    },
    {
      className: 'KeyC',
      english: {
        capsOn: 'C',
        lower: 'c',
        upper: 'C',
        shiftCaps: 'C',
      },
      russian: {
        capsOn: 'С',
        lower: 'с',
        upper: 'С',
        shiftCaps: 'С',
      },
    },
    {
      className: 'KeyV',
      english: {
        capsOn: 'V',
        lower: 'v',
        upper: 'V',
        shiftCaps: 'V',
      },
      russian: {
        capsOn: 'М',
        lower: 'м',
        upper: 'М',
        shiftCaps: 'М',
      },
    },
    {
      className: 'KeyB',
      english: {
        capsOn: 'B',
        lower: 'b',
        upper: 'B',
        shiftCaps: 'B',
      },
      russian: {
        capsOn: 'И',
        lower: 'и',
        upper: 'И',
        shiftCaps: 'И',
      },
    },
    {
      className: 'KeyN',
      english: {
        capsOn: 'N',
        lower: 'n',
        upper: 'N',
        shiftCaps: 'N',
      },
      russian: {
        capsOn: 'Т',
        lower: 'т',
        upper: 'Т',
        shiftCaps: 'Т',
      },
    },
    {
      className: 'KeyM',
      english: {
        capsOn: 'M',
        lower: 'm',
        upper: 'M',
        shiftCaps: 'M',
      },
      russian: {
        capsOn: 'Ь',
        lower: 'ь',
        upper: 'Ь',
        shiftCaps: 'Ь',
      },
    },
    {
      className: 'Comma',
      english: {
        capsOn: ',',
        lower: ',',
        upper: '<',
        shiftCaps: '<',
      },
      russian: {
        capsOn: 'Б',
        lower: 'б',
        upper: 'Б',
        shiftCaps: 'Б',
      },
    },
    {
      className: 'Period',
      english: {
        capsOn: '.',
        lower: '.',
        upper: '>',
        shiftCaps: '>',
      },
      russian: {
        capsOn: 'Ю',
        lower: 'ю',
        upper: 'Ю',
        shiftCaps: 'Ю',
      },
    },
    {
      className: 'Slash',
      english: {
        capsOn: '/',
        lower: '/',
        upper: '?',
        shiftCaps: '?',
      },
      russian: {
        capsOn: '.',
        lower: '.',
        upper: ',',
        shiftCaps: ',',
      },
    },
    {
      className: 'ArrowUp',
      english: {
        capsOn: ' ↑ ',
        lower: ' ↑ ',
        upper: ' ↑ ',
        shiftCaps: ' ↑ ',
      },
      russian: {
        capsOn: ' ↑ ',
        lower: ' ↑ ',
        upper: ' ↑ ',
        shiftCaps: ' ↑ ',
      },
    },
    {
      className: 'ShiftRight',
      english: {
        capsOn: 'Shift',
        lower: 'Shift',
        upper: 'Shift',
        shiftCaps: 'Shift',
      },
      russian: {
        capsOn: 'Shift',
        lower: 'Shift',
        upper: 'Shift',
        shiftCaps: 'Shift',
      },
    },
  ],
  [
    {
      className: 'ControlLeft',
      english: {
        capsOn: 'Ctrl',
        lower: 'Ctrl',
        upper: 'Ctrl',
        shiftCaps: 'Ctrl',
      },
      russian: {
        capsOn: 'Ctrl',
        lower: 'Ctrl',
        upper: 'Ctrl',
        shiftCaps: 'Ctrl',
      },
    },
    {
      className: 'MetaLeft',
      english: {
        capsOn: 'Win',
        lower: 'Win',
        upper: 'Win',
        shiftCaps: 'Win',
      },
      russian: {
        capsOn: 'Win',
        lower: 'Win',
        upper: 'Win',
        shiftCaps: 'Win',
      },
    },
    {
      className: 'AltLeft',
      english: {
        capsOn: 'Alt',
        lower: 'Alt',
        upper: 'Alt',
        shiftCaps: 'Alt',
      },
      russian: {
        capsOn: 'Alt',
        lower: 'Alt',
        upper: 'Alt',
        shiftCaps: 'Alt',
      },
    },
    {
      className: 'Space',
      english: {
        capsOn: ' ',
        lower: ' ',
        upper: ' ',
        shiftCaps: ' ',
      },
      russian: {
        capsOn: ' ',
        lower: ' ',
        upper: ' ',
        shiftCaps: ' ',
      },
    },
    {
      className: 'AltRight',
      english: {
        capsOn: 'Alt',
        lower: 'Alt',
        upper: 'Alt',
        shiftCaps: 'Alt',
      },
      russian: {
        capsOn: 'Alt',
        lower: 'Alt',
        upper: 'Alt',
        shiftCaps: 'Alt',
      },
    },
    {
      className: 'ArrowLeft',
      english: {
        capsOn: ' ← ',
        lower: ' ← ',
        upper: ' ← ',
        shiftCaps: ' ← ',
      },
      russian: {
        capsOn: ' ← ',
        lower: ' ← ',
        upper: ' ← ',
        shiftCaps: ' ← ',
      },
    },
    {
      className: 'ArrowDown',
      english: {
        capsOn: ' ↓ ',
        lower: ' ↓ ',
        upper: ' ↓ ',
        shiftCaps: ' ↓ ',
      },
      russian: {
        capsOn: ' ↓ ',
        lower: ' ↓ ',
        upper: ' ↓ ',
        shiftCaps: ' ↓ ',
      },
    },
    {
      className: 'ArrowRight',
      english: {
        capsOn: ' → ',
        lower: ' → ',
        upper: ' → ',
        shiftCaps: ' → ',
      },
      russian: {
        capsOn: ' → ',
        lower: ' → ',
        upper: ' → ',
        shiftCaps: ' → ',
      },
    },
    {
      className: 'ControlRight',
      english: {
        capsOn: 'Ctrl',
        lower: 'Ctrl',
        upper: 'Ctrl',
        shiftCaps: 'Ctrl',
      },
      russian: {
        capsOn: 'Ctrl',
        lower: 'Ctrl',
        upper: 'Ctrl',
        shiftCaps: 'Ctrl',
      },
    },
  ],
];

export default buttons;
