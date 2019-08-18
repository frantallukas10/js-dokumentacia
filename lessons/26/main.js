const number = 1;
const number2 = number;
number2 = 7;

console.log(`prva hodnota je ${number}`); // 1
console.log(`druha hodnota je ${number2}`); // 7

const person = { name: 'bob' };
const person2 = person; // pri definovani objektu '{ name: 'bob' }' ktory bol zrecyklovany a nasledne recyklovana hodnota v objekte bola prepisana na novu hodnotu t.j. 'susy', existuje referencia, ktora sa prejavi aj v definovanom objekte z ktori sme recyklovali.
person2.name = 'susy';

console.log(`meno s prveho person objektu je ${person.name}`); // 'susy'
console.log(`meno s prveho person objektu je ${person2.name}`); // 'susy'
