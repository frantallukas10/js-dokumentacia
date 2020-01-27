const john = {
  name: 'Janko',
  ['lastName']: 'Balog',
  fullname: function() {
    console.log(`Volám sa ${this.name} ${this.lastName}`);
  }
  // pre es6 arrow function zapis `this` nema dosah do scopu nasho objektu clovek
  // fullname: () => {
  //   console.log(`Volám sa ${this.name} ${this.lastName}`);
  // }
};

john.fullname();

const bob = {
  name: 'Bob',
  ['lastName']: 'Dusi',
  fullname: function() {
    console.log(`Volám sa ${this.name} ${this.lastName}`);
  }
  // pre es6 arrow function zapis `this` nema dosah do scopu nasho objektu clovek
  // fullname: () => {
  //   console.log(`Volám sa ${this.name} ${this.lastName}`);
  // }
};

bob.fullname();

window.name = 'Ferko';
window.lastName = 'Mrkvička';
console.log(this);

const fullname = function() {
  console.log(`Volám sa ${this.name} ${this.lastName}`);
};

fullname();

function createPerson(name, lastName) {
  return {
    name: name,
    lastName: lastName,
    fullname: function() {
      console.log(`Volám sa ${this.name} ${this.lastName}`);
    }
  };
}

createPerson('David', 'Danko').fullname();

const danko = createPerson('David', 'Danko');
const jozef = createPerson('Jozef', 'Danko');
const ferko = createPerson('Ferko', 'Danko');

danko.fullname();
jozef.fullname();
ferko.fullname();
