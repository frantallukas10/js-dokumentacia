// cyklus do while

let value = 99; // tato hodnota je definovana mimo scopu cyklu for preto vonku value ma vzdy 99

for (let value = 0; value < 10; value++) {
  // toto je vnutorny scope cyklu for ktori nevidi ze value je 99
  console.log(`cislo je ${value}`);
}

console.log(value); // 99

for (let value = 10; value > 0; value--) {
  console.log(`cislo je ${value}`);
}

console.log(value); // 99
