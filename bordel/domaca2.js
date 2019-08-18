// vytvore si dve polia a skus ich spojit a vypisat novovzniknute pole

const dogs = ['Bobo', 'Dingo', 'Felix', 'Poppy'];
const cats = ['Mica', 'Murko', 'Roza'];
const animals = dogs.concat(cats);
console.log(animals);

// vytvore pole ktore nasledne zmenis poradia a vypises v konzole

const abeceda = ['a', 'b', 'c', 'd', 'e', 'f'];

const abecedaNaopak = abeceda.reverse();

console.log(abecedaNaopak);

// vytvor pole z ktoreho odstranis posledny prvok z pola a vypises obsah
// pomocou metody pop() a

const farby1 = [
  'biela',
  'ruzova',
  'modra',
  'zelena',
  'zlta',
  'cierna',
  'bordova'
];

farby1.pop();

console.log(farby1);

// dalsi priklad pomocou metody splice()
farby1.splice(7, 7);

console.log('splice', farby1);

// vytvor pole ktore bude obsahovat 5 prvkov a skus vypisat len 2 prvko z pola skus s metodou splice()

let cisla = [1, 3, 4, 7, 8];

let novapremenna = cisla.splice(1, 1);

console.log('cisla', novapremenna);

// skus vytvorit pole a vloz na konci pola jeden prvko pomocou metody
// push()

const names = ['Pheobe', 'Rachel', 'Ros'];

names.push('Joey');
console.log(names);

// a pomocou metody splice()
names.splice(5, 0, 'Chandler');
console.log(names);
