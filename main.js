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

for (let [key, value] of Object.entries(keys)) {
  let keyCombo = document.createElement('button');
  keyboard.appendChild(keyCombo).className = `grid-item`;
  keyboard.appendChild(keyCombo).id = `${key}`;
  keyboard.appendChild(keyCombo).innerHTML = `${key}: ${value}`;
}
