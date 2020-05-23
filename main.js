const keys = {
  q: '',
  w: '',
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
  ';': 'ף',
  z: 'ז',
  x: 'ס',
  c: 'ב',
  v: 'ה',
  b: 'נ',
  n: 'מ',
  m: 'צ',
  ',': 'ת',
  '.': 'ץ',
};

const letters = document.getElementById('letters');
const scoreboard = document.getElementById('scoreboard');
const keyboard = document.getElementById('keyboard');
const timer = document.getElementById('timer');

// global variable of hebrew letters

let hebrewLetters = [];
let currentLetters = [];
let points = 0;
let seconds = 0;

let pointDiv = document.createElement('div');
scoreboard.appendChild(pointDiv).innerHTML = `${points.toString()}`;

let timeDiv = document.createElement('timeDiv');
timer.appendChild(timeDiv).innerHTML = `${seconds.toString()}`;

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
  letters.appendChild(letter).className = `animate`;
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

// creating actual keyboard

for (let [key, value] of Object.entries(keys)) {
  if (key === ';') {
    let keyCombo = document.createElement('button');
    keyboard.appendChild(keyCombo).className = `grid-item`;
    keyboard.appendChild(keyCombo).id = `e1`;
    keyboard.appendChild(keyCombo).innerHTML = `${key} <br /> ${value}`;
  } else if (key === ',') {
    let keyCombo = document.createElement('button');
    keyboard.appendChild(keyCombo).className = `grid-item`;
    keyboard.appendChild(keyCombo).id = `e2`;
    keyboard.appendChild(keyCombo).innerHTML = `${key} <br /> ${value}`;
  } else if (key === '.') {
    let keyCombo = document.createElement('button');
    keyboard.appendChild(keyCombo).className = `grid-item`;
    keyboard.appendChild(keyCombo).id = `e3`;
    keyboard.appendChild(keyCombo).innerHTML = `${key} <br /> ${value}`;
  } else {
    let keyCombo = document.createElement('button');
    keyboard.appendChild(keyCombo).className = `grid-item`;
    keyboard.appendChild(keyCombo).id = `${key}`;
    keyboard.appendChild(keyCombo).innerHTML = `${key} <br /> ${value}`;
  }
}

// decrement points function for scoreboard
const updatePoints = (points) => {
  pointDiv.innerHTML = `${points.toString()}`;
};

// decrement points function for scoreboard
const updateSeconds = (seconds) => {
  timeDiv.innerHTML = `${seconds.toString()}`;
};

// function to check for match between keyboard and array of random letters

const matchClicked = (e) => {
  for (x in currentLetters) {
    if (keys[e] === currentLetters[x]) {
      let index = currentLetters.indexOf(keys[e]);
      currentLetters.splice(index, 1);
      makeLetters(currentLetters);
      points--;
      updatePoints(points);
    }
    console.log(e);
  }
};

// event listener for keyboard
// seriously though this is like a function wrapped in a function wrapped in another function, cool
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    matchClicked(key);
  });
});

// function that moves text down the screen at a set pace

const fallingText = document.getElementsByClassName('animate');

const animateText = () => {
  for (const f of fallingText) {
    f.className = 'text';
  }
};

const removeAnimation = () => {
  for (const f of fallingText) {
    f.classList.remove('text');
  }
};

let newLetters = (num) => {
  currentLetters = randomize(hebrewLetters, num);
  makeLetters(currentLetters);
};

// function that takes an amount of letters and starts game

const runGame = (num) => {
  score = 100;
  updatePoints(score);
  time = 15;
  updateSeconds(time);
  newLetters(num);
  var timeinterval = setInterval(function () {
    if (time === 0) {
      newLetters(num);
      removeAnimation();
      animateText();
      time = 16;
      setTimeout(1000);
      score -= 50;
      updatePoints(score);
    }
    if (score <= 0) {
      clearInterval(timeinterval);
    }
    time -= 1;
    updateSeconds(time);
  }, 500);
};

runGame(10);
