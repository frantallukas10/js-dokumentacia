// >, <, >=, <=, ==, ===, !=, !==

let num1 = 4;
let num2 = 6;

if (num1 > num2) {
  console.log('prve cislo je vacsie ako druhe');
}

if (num1 < num2) {
  console.log('prve cislo je mensie ako druhe');
}

if (num1 > num2) {
  console.log('prve cislo je vacsie ako druhe');
} else {
  console.log('prve cislo je mensie ako druhe');
}

const value1 = true;
const value2 = false;

if (value1) {
  console.log('prve cislo je vacsie ako druhe');
} else {
  console.log('prve cislo je mensie ako druhe');
}

num1 = 0;
num2 = 0;

if (num1 > num2) {
  console.log('prve cislo je vacsie ako druhe');
} else if (num1 < num2) {
  console.log('prve cislo je mensie ako druhe');
} else if (num1 === num2) {
  console.log('prve cislo je rovnake ako druhe');
} else {
  console.log('niekde mas chybu');
}

let value = false;
if (!value) {
  console.log('hodnota je true');
}
