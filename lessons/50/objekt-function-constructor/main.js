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
