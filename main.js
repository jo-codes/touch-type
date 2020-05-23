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

// global variable of hebrew letters

hebrewLetters = [];

for (let [key, value] of Object.entries(keys)) {
  hebrewLetters.push(value);
}

// function that prints letters to div

let makeLetters = (arr) => {
  letters.innerText = '';
  let letter = document.createElement('div');
  letters.appendChild(letter).innerHTML = `${arr
    .toString()
    .replace(/,/g, ' ')}`;
};

// generates random letters from global var

let randomize = (arr, num) => {
  let lettersToReturn = [];
  for (i = 0; i < num; i++) {
    let randomNum = arr[Math.floor(Math.random() * arr.length)];
    lettersToReturn.push(randomNum);
  }
  return lettersToReturn;
};

// calling random letters function

let currentLetters1 = randomize(hebrewLetters, 10);

makeLetters(currentLetters1);

// function to check for match between keyboard and array of random letters

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

// creating actual keyboard

for (let [key, value] of Object.entries(keys)) {
  let keyCombo = document.createElement('button');
  keyboard.appendChild(keyCombo).className = `grid-item`;
  keyboard.appendChild(keyCombo).id = `${key}`;
  keyboard.appendChild(keyCombo).innerHTML = `${key} <br /> ${value}`;
}

// event listener for keyboard

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    matchClicked(key);
    console.log(key);
  });
});
