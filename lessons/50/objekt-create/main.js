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
