function createPerson(name, lastName) {
  return {
    name: name,
    lastName: lastName,
    fullname: function() {
      console.log(`Volám sa ${this.name} ${this.lastName}`);
    }
  };
}

console.log(createPerson('David', 'Danko'));

function CreatePerson(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.fullname = function() {
    console.log(`Volám sa ${this.name} ${this.lastName}`);
  };
}

console.log(new CreatePerson());

const danko = new CreatePerson('David', 'Danko');
const jozef = new CreatePerson('Jozef', 'Danko');
const ferko = new CreatePerson('Ferko', 'Danko');

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

const denis = new danko.constructor('denis', 'postrah');

console.log(denis);
denis.fullname();
