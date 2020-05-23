const keys = {
  e: 'ק',
  r: 'ר',
  t: 'א',
  y: 'ט',
  u: 'ו',
  i: 'ן',
  o: 'ם',
  p: 'פ',
  a: 'ש',
  s: 'ד',
  d: 'ג',
  f: 'כ',
  g: 'ע',
  h: 'י',
  j: 'ח',
  k: 'ל',
  l: 'ך',
  e1: 'ף',
  z: 'ז',
  x: 'ס',
  c: 'ב',
  v: 'ה',
  b: 'נ',
  n: 'מ',
  m: 'צ',
  e2: 'ת',
  e3: 'ץ',
};

const letters = document.getElementById('letters');
const scoreboard = document.getElementById('scoreboard');
const keyboard = document.getElementById('keyboard');

const sayClicked = (key) => {
  console.log(`${key.id} was clicked!`);
};

for (let [key, value] of Object.entries(keys)) {
  let keyCombo = document.createElement('button');
  keyboard.appendChild(keyCombo).className = `grid-item`;
  keyboard.appendChild(keyCombo).id = `${key}`;
  keyboard.appendChild(keyCombo).innerHTML = `${key} <br /> ${value}`;
  keyboard.appendChild(keyCombo).setAttribute(`onclick`, `sayClicked(this)`);
}

// this function needs to be called continuously as well as with random letters

hebrewLetters = [];

for (let [key, value] of Object.entries(keys)) {
  hebrewLetters.push(value);
}

let makeLetters = (arr) => {
  for (c = 0; c < arr.length; c++) {
    let letter = document.createElement('div');
    let currentLetter = arr[c];
    letters.appendChild(letter).innerHTML = `${currentLetter}`;
  }
};

let randomize = (arr, num) => {
  let lettersToReturn = [];
  for (i = 0; i < num; i++) {
    let randomNum = arr[Math.floor(Math.random() * arr.length)];
    lettersToReturn.push(randomNum);
  }
  return lettersToReturn;
};

makeLetters(randomize(hebrewLetters, 20));
