let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names); // [ 'john', 'bob', 'barry', 'olga', 'ben' ]
names.unshift('jablko');
console.log(names); // [ 'jablko', john', 'bob', 'barry', 'olga', 'ben' ]
names.unshift('hruska');
console.log(names); // [ 'hruska', 'jablko', 'john', 'bob', 'barry', 'olga', 'ben' ]
