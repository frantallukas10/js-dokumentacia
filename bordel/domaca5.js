const ludia = [
  { id: 1, meno: 'feri', vek: 30, pozicia: 'programator', plat: 2000 },
  { id: 2, meno: 'janko', vek: 22, pozicia: 'programator', plat: 900 },
  { id: 3, meno: 'iveta', vek: 25, pozicia: 'programator', plat: 1900 },
  { id: 4, meno: 'dusi', vek: 20, pozicia: 'dizajner', plat: 1200 },
  { id: 5, meno: 'traktorista', vek: 64, pozicia: 'boss', plat: 9000 }
];

// pokus sa pole ludia pouzit na vypisanie vsetkych hodnot v kazdom objekte
// vyuzi metodu forEach, map
// vramci pouzitia map uloz si kazde novovytvorene pole do konstatny a to konzoluj z vonku

ludia.forEach((clovek, index) => {
  console.log(clovek, index);
});

const noviLudia1 = ludia.map(clovek => {
  return clovek.id;
});
console.log('clovek ID', noviLudia1);

const noviLudia2 = ludia.map(clovek => {
  return clovek.meno;
});
console.log('clovek meno', noviLudia2);

const noviLudia3 = ludia.map(clovek => {
  return clovek.vek;
});
console.log('clovek vek', noviLudia3);

const noviLudia4 = ludia.map(clovek => {
  return clovek.pozicia;
});
console.log('clovek pozicia', noviLudia4);

const noviLudia5 = ludia.map(clovek => {
  return clovek.plat;
});
console.log('clovek plat', noviLudia5);

// pokus sa vyfiltorvat pomocou filter meotdy iba programatorov ktori maju vacsi plat ako 1800eur a ma vek vacsi ako 29

const bohatiProgramatori = ludia.filter(clovek => {
  return (
    clovek.pozicia === 'programator' && clovek.plat > 1800 && clovek.vek > 29
  );
});
console.log(
  'programatori nad 29 rokov s platom vacsim ako 1800 eur',
  bohatiProgramatori
);

const cisla = [11, 21, 32, -10, 50, 90, 20, 1];
// pouzi metodu filer na vypisanie len cisel ktore su vacsie ako 19

const vacsieCisla = cisla.filter(vstup => {
  return vstup > 19;
});
console.log('cisla vacsie ako 19', vacsieCisla);

const hodnoty = [
  true,
  'aaa',
  {},
  [],
  50,
  {},
  'aaa',
  false,
  null,
  undefined,
  'bbb'
];
// pouzi metodu filer na vypisanie len string hodnoty

const stringHodnota = hodnoty.filter(parameter => {
  return typeof parameter === 'string';
});
console.log('stringove hodnoty', stringHodnota);

const num = [1, 2, 5, -10, 50, 90, 20, 1];
// pokus sa pomocou metody reduc scitat cisla v poli num
const scitanie = num.reduce((acc, curr) => {
  console.log('zaciatocny stav', acc);
  console.log('aktualny stav', curr);
  acc += curr;
  return acc;
});
console.log('scitanie', scitanie);

// pokus sa pomocou metody reduc prenasobit cisla v poli num

const nasobenie = num.reduce((acc, curr) => {
  console.log('zaciatocny stav', acc);
  console.log('aktualny stav', curr);
  acc *= curr;
  return acc;
});
console.log('nasobenie', nasobenie);
