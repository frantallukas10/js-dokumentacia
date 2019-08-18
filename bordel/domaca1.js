// vytvor switch() ktori bude ocakavat string hodnotu ak
// vstupna hodnota bude 'a' vypisem mi v console hodnota je a
// ak vstupna hodnota bude 10 vypise mi v console hodnota je 10
//  ak hodnota je ina ako 10 alebo 'a' vypise mi v console
// vstupna hodnota je ina ako 10 a 'a'
const hodnota = 'b';

switch (hodnota) {
  case 'a':
    console.log('vstupna hodnota je a');
    break;
  case 10:
    console.log('vstupna hodnota je 10');
    break;
  default:
    console.log('vstupna hodnota je ina ako 10 a "a"');
}

// vytvor mi cyklus pomocou while ktori sa vykona 5 krat
// za sebou a vypise mi zaciatocny stav
// 2
// 3
// 4
// 5
// 6
let hodnota1 = 2;

while (hodnota1 <= 6) {
  console.log(`aktualna hodnota je ${hodnota1}`);
  hodnota1++;
}

// vytvor mi cyklus pomocou while ktori sa vykona 5 krat
// za sebou a vypise mi zaciatocny stav
// 7
// 6
// 5
// 4
// 3
let hodnota2 = 7;

while (hodnota2 >= 3) {
  console.log(`aktualna hodnota je ${hodnota2}`);
  hodnota2--;
}

// vytvor mi cyklus pomocou do while ktori sa vykona 4 krat
// za sebou a vypise mi zaciatocny stav
// -1
// 0
// 1
// 2

let hodnota3 = -1;

while (hodnota3 <= 2) {
  console.log(`aktualna hodnota je ${hodnota3}`);
  hodnota3++;
}

// vytvor mi cyklus pomocou do while ktori sa vykona 5 krat
// za sebou a vypise mi zaciatocny stav
// 3
// 2
// 1
// 0
// -1

let hodnota4 = 3;

while (hodnota4 >= -1) {
  console.log(`aktualna hodnota je ${hodnota4}`);
  hodnota4--;
}

// vytvor mi cyklus pomocou for ktori sa vykona 4 krat
// za sebou a vypise mi zaciatocny stav
// -1
// 0
// 1
// 2

for (let hodnota5 = -1; hodnota5 <= 2; hodnota5++) {
  console.log(`aktualna hodnota je ${hodnota5}`);
}

// vytvor mi cyklus pomocou for ktori sa vykona 5 krat
// za sebou a vypise mi zaciatocny stav
// 3
// 2
// 1
// 0
// -1

for (let hodnota6 = 3; hodnota6 >= -1; hodnota6--) {
  console.log(`aktualna hodnota je ${hodnota6}`);
}
