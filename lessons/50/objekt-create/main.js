const clovek = {
  ahoj: function() {
    console.log(`Volám sa ${this.name} ${this.lastName}`);
  }
};

const janko = Object.create(clovek);
janko.name = 'Janko';
janko.lastName = 'Traktorista';
console.log(janko);
janko.ahoj();

const sona = Object.create(clovek, {
  name: { value: 'Sona' },
  lastName: { value: 'Velka' }
});

sona.ahoj();

console.log('------------------');

const personPrototypes = {
  ahoj: function() {
    return `ahoj ${this.firstName} ${this.lastName}`;
  },
  novyAhoj: function(newLastName) {
    this.lastName = newLastName;
  }
};

const janko = Object.create(personPrototypes);
janko.firstName = 'janko';
janko.lastName = 'traktorista';
janko.age = 30;

janko.novyAhoj('dusi');

console.log(janko.ahoj());

const peter = Object.create(personPrototypes, {
  firstName: { value: 'janko' },
  lastName: { value: 'traktorista' },
  age: { value: 30 }
});

console.log(peter);
console.log(peter.ahoj());
