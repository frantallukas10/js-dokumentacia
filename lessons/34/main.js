// iteratory pre polia: forEach, map, filter, find, reduce
// iterovat cez pole - nie je potrebne pouzivat cyklus for

//foreach
// nemeni velkost povodneho pola
// const cislo = [0, 1, 2, 3, 4];
// for (let i = 0; i < cislo.length; i++) {
//   console.log(cislo[i]);
// }

const ludia = [
  { meno: 'feri', vek: 30, pozicia: 'programator' },
  { meno: 'janko', vek: 22, pozicia: 'programator' },
  { meno: 'iveta', vek: 25, pozicia: 'programator' },
  { meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { meno: 'traktorista', vek: 64, pozicia: 'boss' }
];

// const zobrazCloveka = clovek => {
//   // callback
//   console.log(clovek);
// };
// ludia.forEach(zobrazCloveka);

// to iste ako arrow function
ludia.forEach((clovek, index) => {
  console.log('clovek', clovek, index);
});

// pri vytvarani noveho pola pouzijeme hodnoty z povodneho pola a nato nam sluzi map
// nemeni velkost povodneho pola
const vekLudi = ludia.map((clovek, index) => {
  console.log(index);
  return clovek.vek + 10;
});
console.log('vekLudi', vekLudi);

const menaLudi = ludia.map(clovek => {
  return clovek.meno;
});
console.log('menaLudi', menaLudi);

const noviLudia = ludia.map(clovek => {
  return {
    prveMeno: clovek.meno.toUpperCase(),
    novyVek: clovek.vek + 20
  };
});
console.log('noviLudia', noviLudia);

// filter
// meni velkost pola
// filter vyhodnoti logiku vramci funkcie a nasledne vrati najdenu hodnotu ktoru hladame
// ak sa v poli filtrovana hodnota nenachadza vrati nam prazdne pole
const mladyludia = ludia.filter(clovek => {
  return clovek.vek <= 30;
});
console.log('mladyludia', mladyludia);

const programatori = ludia.filter(clovek => {
  return clovek.pozicia === 'programator';
});
console.log('programatori', programatori);

const mladiProgramatori = ludia.filter(clovek => {
  return clovek.vek < 25 && clovek.pozicia === 'programator';
});
console.log('mladiProgramatori', mladiProgramatori);

const ludia2 = [
  { id: 1, meno: 'feri', vek: 30, pozicia: 'programator' },
  { id: 2, meno: 'janko', vek: 22, pozicia: 'programator' },
  { id: 3, meno: 'iveta', vek: 25, pozicia: 'programator' },
  { id: 4, meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { id: 5, meno: 'traktorista', vek: 64, pozicia: 'boss' }
];

// find
// ak nenajde hladany prvok vrati undefined
// skvele pre ziskanie jedinecnej hodnoty z pola
const clovekId = ludia2.find(clovek => {
  return clovek.id === 0;
});
console.log('clovekId', clovekId);

// reduce
// sluzi na manipulaciu aktualne iterovanej hodnoty s predoslou iterovanou hodnotou
// 1 vstupny parameter accumulator - acc - total z celkovej kalkulacie
// 2 vstupny parameter currentValue - curr - aktualna iterovana hodnota

const ludia3 = [
  { id: 1, meno: 'feri', vek: 30, pozicia: 'programator', plat: 2000 },
  { id: 2, meno: 'janko', vek: 22, pozicia: 'programator', plat: 900 },
  { id: 3, meno: 'iveta', vek: 25, pozicia: 'programator', plat: 1900 },
  { id: 4, meno: 'dusi', vek: 20, pozicia: 'dizajner', plat: 1200 },
  { id: 5, meno: 'traktorista', vek: 64, pozicia: 'boss', plat: 9000 }
];

// const scitaniePlatov = ludia3.reduce((previousValue, currentValue) => {
//   console.log('total', previousValue);
//   console.log('aktualny plat', currentValue.plat);
//   previousValue += currentValue.plat;
//   return previousValue;
// }, 0);
// console.log('scitaniePlatov', scitaniePlatov);

// accumulator - acc
// currentValue - curr

const scitaniePlatov = ludia3.reduce((acc, curr) => {
  console.log('total', acc);
  console.log('aktualny plat', curr.plat);
  acc += curr.plat;
  return acc;
}, 0);
console.log('scitaniePlatov', scitaniePlatov);
