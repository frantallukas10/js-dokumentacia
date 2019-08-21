// Date objekt

const mesiace = [
  'januar',
  'februar',
  'marec',
  'april',
  'maj',
  'jun',
  'jul',
  'agust'
];

const dni = [
  'nedela',
  'pondelok',
  'utorok',
  'streda',
  'stvrtok',
  'piatok',
  'sobota'
];

const date = new Date();
// console.log(date);

let rok = date.getFullYear();
console.log(rok);

let mesiac = date.getMonth();
console.log(mesiac);

let den = date.getDay();
console.log(den);

let sekunda = date.getSeconds();
console.log(sekunda);

console.log(`Mesiac je: ${mesiace[mesiac]} a den je ${dni[den]}`);

// const Date = () => {
//   getMonth: () => 'aktualny mesiac'
// }

const datum1 = new Date('December 17, 1995 03:24:00');
console.log(datum1);

const datum2 = new Date('1995-12-17T03:24:00');
console.log(datum2);
