let names = ['anna', 'vierka', 'bob'];
let newPole = [];

for (let i = 0; i < names.length; i++) {
  console.log(`pozicia prvku v poli je: ${i}, prvok z pola: ${names[i]}`);
  newPole.push(names[i]);
}

console.log(names);
console.log(newPole);

// -----------------------

const dogs = ['Bobo', 'Dingo', 'Felix', 'Poppy'];
const cats = ['Mica', 'Murko', 'Roza'];
// const animals = dogs.concat(cats); namiesto toho viem pouizit aj for cyklus
// console.log(animals);

for (let i = 0; i < cats.length; i++) {
  dogs.push(cats[i]);
}
console.log(dogs);

// -----------------------

for (let i = 0; i < dogs.length; i++) {
  names.push(dogs[i]);
}
console.log(names);
