function CreatePerson(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.fullname = function() {
    console.log(`Volám sa ${this.name} ${this.lastName}`);
  };
}

const danko = new CreatePerson('David', 'Danko'); // inštanciu objektu CreatePerson
const jozef = new CreatePerson('Jozef', 'Danko'); // inštanciu objektu CreatePerson
const ferko = new CreatePerson('Ferko', 'Danko'); // inštanciu objektu CreatePerson

danko.fullname();
jozef.fullname();
ferko.fullname();

console.log(danko.constructor);

const bob = {};
console.log(bob.constructor);
const list = [];
console.log(list.constructor);
const sayHi = function() {};
console.log(sayHi.constructor);

const denis = new danko.constructor('denis', 'postrah'); // inštanciu objektu CreatePerson

console.log(denis);
denis.fullname();

console.log('-----------------------------');

// String
const name1 = 'janko';
const name2 = new String('janko');

console.log(name2);
console.log(typeof name2);

if (name1 === name2) {
  console.log('Ano');
} else {
  console.log('Nie');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num2);
console.log(typeof num2);

if (num1 === num2) {
  console.log('Ano');
} else {
  console.log('Nie');
}

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool2);
console.log(typeof bool2);

if (bool1 === bool2) {
  console.log('Ano');
} else {
  console.log('Nie');
}

// Function
const getSum1 = function(x, y) {
  return x + y;
};

console.log(getSum1(1 + 2));

const getSum2 = new Function('x', 'y', `return x + y`);

console.log(getSum2(1, 1));

// Object
const feri1 = { name: 'feri' };
const feri2 = new Object({ name: 'feri' });
console.log(feri2);

// Array
const array1 = [1, 2, 3, 4];
const array2 = new Array(1, 2, 3, 4);

console.log(array2);

// Regular expressions
const re1 = /\n asdf/;
const re2 = new RegExp('\\n asdf');

console.log(re1);
console.log(re2);
