// higher order function je funkcia ktora recykluje ine funkcia cez argument t.j. ako vstupny parameter
const spocitaj = (pole, cb) => {
  let vysledok = [];
  for (let i = 0; i < pole.length; i++) {
    let vec = cb(pole[i]); // ak použijem vysledok z jednej funkcie do druhej funkcie nazýva sa to callback
    vysledok.push(vec);
  }
  return vysledok;
};

const plus = cislo => {
  return cislo + 10;
};

const nasob = cislo => {
  return cislo * 10;
};

let hodnota1 = spocitaj([1, 2, 3], plus);
console.log(hodnota1);

let hodnota2 = spocitaj([1, 2, 3], nasob);
console.log(hodnota2);
// -----------------------
const plusIne = pole => {
  let vysledok = [];
  for (let i = 0; i < pole.length; i++) {
    let vec = pole[i] + 10;
    vysledok.push(vec);
  }
  return vysledok;
};

const nasobIne = pole => {
  let vysledok = [];
  for (let i = 0; i < pole.length; i++) {
    let vec = pole[i] * 10;
    vysledok.push(vec);
  }
  return vysledok;
};

console.log(plusIne([1, 2, 3]));
console.log(nasobIne([1, 2, 3]));

// -----------------------
// higher order function
const wow = druhaFunkcia => {
  druhaFunkcia(); // callback
};

const vypis = () => {
  console.log('wow');
};

wow(vypis);
// -----------------------
// higher order function
const ahoj = hodnota => {
  let cislo = hodnota(); // callback
  console.log(cislo);
};
const daco = () => 1;

ahoj(daco);
// -----------------------
const nums = [1, 2, 3, 4, 5];

const multiplyByTwo = num => num * 2; // callback

const numsTimesTwo = nums.map(multiplyByTwo); // higher order function
