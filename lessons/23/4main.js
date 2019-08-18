let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names); // [ 'john', 'bob', 'barry', 'olga', 'ben' ]
names.shift();
console.log(names); // [ 'bob', 'barry', 'olga', 'ben' ]
names.shift();
console.log(names); // [ 'barry', 'olga', 'ben' ]
names.shift();
console.log(names); // [ 'olga', 'ben' ]
names.shift();
console.log(names); // [ 'ben' ]
names.shift();
console.log(names); // [ ]
