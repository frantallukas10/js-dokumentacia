// vytvor pole ktore nasledne pomocou cyklu `for` vypises po jednom prvku z pola
let days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]; ///na zaciatok som pridala prazdny priestor, aby mi pocitalo Monday za prvy den v tyzdni a nie za nulty

for (let i = 0; i < days.length; i++) {
  // console.log(`${days[i]} is ${i + 1} day of week`);
} ///Monday is 1 day of week
///Tuesday is 2 day of week
///Wednesday is 3 day of week
///Thursday is 4 day of week
///Friday is 5 day of week
///Saturday is 6 day of week
///Sunday is 7 day of week

// vytvor pole cisel od -10 po 10, kde toto pole pouzijes vo funkcii ktora bude mapovat toto pole a vypise dve console logy
// prvy console.log bude obsahovat cisla mensie a rovne ako 0
// druhy console.log bude obsahovat cisla vacsie ako 0

let arrayOfNumbers = [
  -10,
  -9,
  -8,
  -7,
  -6,
  -5,
  -4,
  -3,
  -2,
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
];
let cislaMensieRovneNule = [];
let cislaVacsieRovneNule = [];

arrayOfNumbers.map(vajco => {
  // console.log(vajco, vajco <= 0);
  if (vajco <= 0) {
    cislaMensieRovneNule.push(vajco);
  } else if (vajco > 0) {
    cislaVacsieRovneNule.push(vajco);
  }
});

// console.log(arrayOfNumbers.slice(0, 11)); ///[ -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0 ]
console.log(`cisla mensie a ronve ako nula: ${cislaMensieRovneNule}`);
// console.log(arrayOfNumbers.slice(11, 21)); ///[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(`cisla vacsie a ronve ako nula: ${cislaVacsieRovneNule}`);

// vytvor objekt ktori bude ulozeny v premennej s nazvom objekt1
// tento objekt bude obsahovat premennu s nazvom name: 'janko'
// tiez bude obsahovat age: 30
//nasledne tento objekt vlozis do noveho parametra s nazvom objekt2
// nasledne z objekt2 vytiahnes age a prepises na 25
// vykonzoluj obsah objekt1
// vykonyoluj obsah objekt2

let objekt1 = { name: 'janko', age: 30 };
console.log(objekt1); ///{ name: 'janko', age: 30 }
let objekt2 = objekt1;
objekt2.age = 25;

console.log(objekt1); ///{ name: 'janko', age: 25 }
console.log(objekt2); ///{ name: 'janko', age: 25 }

// vytvor funkciu ktora bude obsahovat ternarny zapis logiky
// kde ak je condition pravdiva vypise konzolovu hlasku pravda a k nej aj vstupnu hodnotu
// ak nepravdiva vypise konzolovu hlasku nepravda a k nej aj vstupnu hodnotu
// pri volani tejto funkcie pouzi vstupne hodnoty nasledne:
// 'ahoj'
// "ahoj"
// 1
// true
// null
// undefined
// !true
// NaN

const rozhodovac = vstupnyParam => {
  // if (vstupnyParam) {
  //   console.log(`[${vstupnyParam}] tento parameter je pravidvy`);
  // }
  // to iste takto
  vstupnyParam && console.log(`[${vstupnyParam}] tento parameter je pravidvy`);
};

rozhodovac('ahoj');
rozhodovac('ahoj');
rozhodovac(1);
rozhodovac(true);
rozhodovac(null);
rozhodovac(undefined);
rozhodovac(!true);
rozhodovac(NaN);

// let condition1 = 'ahoj';
// let condition2 = 1 == true;
// let condition3 = null == undefined;
// let condition4 = !true == NaN;

// if (condition1) {
//   console.log(`vstupna hodnota je ${condition1}, tento vyrok je pravda`);
// } else {
//   console.log(`vstupna hodnota je ${condition1}, tento vyrok nie je pravda`);
// } ///vstupna hodnota je true, tento vyrok je pravda

// condition2
//   ? console.log(`vstupna hodnota je ${condition2}, tento vyrok je pravda`)
//   : console.log(`vstupna hodnota je ${condition2}, tento vyrok nie je pravda`); ///vstupna hodnota je true, tento vyrok je pravda

// if (condition3) {
//   console.log(`vstupna hodnota je ${condition3}, tento vyrok je pravda`);
// } else {
//   console.log(`vstupna hodnota je ${condition3}, tento vyrok nie je pravda`);
// } ///vstupna hodnota je true, tento vyrok je pravda

// condition4
//   ? console.log(`vstupna hodnota je ${condition4}, tento vyrok je pravda`)
//   : console.log(`vstupna hodnota je ${condition4}, tento vyrok nie je pravda`); ///vstupna hodnota je false, tento vyrok nie je pravda
