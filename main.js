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

hebrewLetters = [];

for (let [key, value] of Object.entries(keys)) {
  hebrewLetters.push(value);
}

let makeLetters = (arr) => {
  letters.innerText = '';
  let letter = document.createElement('div');
  letters.appendChild(letter).innerHTML = `${arr
    .toString()
    .replace(/,/g, ' ')}`;
};

let randomize = (arr, num) => {
  let lettersToReturn = [];
  for (i = 0; i < num; i++) {
    let randomNum = arr[Math.floor(Math.random() * arr.length)];
    lettersToReturn.push(randomNum);
  }
  return lettersToReturn;
};

let currentLetters1 = randomize(hebrewLetters, 10);

makeLetters(currentLetters1);

const matchClicked = (e) => {
  for (x in currentLetters1) {
    if (keys[e] === currentLetters1[x]) {
      console.log('match');
      let index = currentLetters1.indexOf(keys[e]);
      currentLetters1.splice(index, 1);
      makeLetters(currentLetters1);
    }
  }
  console.log(e.key);
};

for (let [key, value] of Object.entries(keys)) {
  let keyCombo = document.createElement('button');
  keyboard.appendChild(keyCombo).className = `grid-item`;
  keyboard.appendChild(keyCombo).id = `${key}`;
  keyboard.appendChild(keyCombo).innerHTML = `${key} <br /> ${value}`;
}

// this function needs to be called continuously as well as with random letters

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    matchClicked(key);
    console.log(key);
  });
});
