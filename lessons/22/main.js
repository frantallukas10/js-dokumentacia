// Literal bol zadefinovany ES6+
// `${value}`

const name = 'Janko';
const age = 25;
const sentence = 'ahoj to som ja ' + name + ' a ja mam ' + age + ' rokov';
console.log(sentence);

const sentenceLit = `ahoj to som ja ${name} a ja mam ${age} rokov`;
console.log(sentenceLit);

const vykonaj = () => {
  return 10;
};
const text = `cislo je ${vykonaj()}`;
console.log(text);
