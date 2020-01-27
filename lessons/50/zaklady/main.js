const clovek = {
  name: 'Janko',
  age: 15,
  married: false,
  children: ['Anka', 'Ferko'],
  hello: () => {
    console.log('ahoj, volam sa Janko');
  },
  ['last-name']: 'Balog'
};

console.log(clovek);

console.log(clovek.name);

console.log(clovek['age']);

const prveDieta = clovek.children[0];
console.log(prveDieta);

clovek.hello();

console.log(clovek['last-name']);
clovek.married = true;

// pridanie novej property
clovek.city = 'Michalovce';
// zmazanie starej property
delete clovek.married;

console.log(clovek);
