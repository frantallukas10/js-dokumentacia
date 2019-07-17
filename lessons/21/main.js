const value1 = 'text';
const value2 = 10;
console.log(value1 + value2);

// pomocou length vieme zistit kolko pismenok sa nachadza v hodnote value1
console.log(value1.length);

const veta = 'janko peto hrasko iveta jarka neviem us peto';
console.log(veta.indexOf('peto')); // indexOf najde v hodnote prvý hladany string a urci jeho poziciu a pocita aj medzeri
console.log(veta.indexOf('peto', 10)); // indexOf ako druhy parameter definujem zaciatok hladania pozadovaneho stringu
console.log(veta.indexOf('10')); // indexOf ak nenajde hodnotu vrati -1
console.log(veta.lastIndexOf('peto')); // lastIndexOf najde v hodnote prvy hladany string y prava do lava a urci jeho poziciu a pocita aj medzeri
console.log(veta.lastIndexOf('peto', 15)); // lastIndexOf ako druhy parameter definujem zaciatok hladania pozadovaneho stringu z prava do lava
console.log(veta.lastIndexOf('10')); // lastIndexOf ak nenajde hodnotu vrati -1

const male = 'janko';
console.log(male.toUpperCase()); // zmeni obsah hodnoty na velke pismena
const velke = 'FERKO';
console.log(velke.toLowerCase()); // zmeni obsah hodnoty na male pismena

const pismenko = 'Janko';
console.log(pismenko.charAt(0));
console.log(pismenko.charAt(pismenko.length - 1)); // ak chcem ziskat vzdy posledne pismenko zo stringu a meni sa mi dlzka stringu

const inputFormText = ' janko@gmail.com   ';
console.log(inputFormText.trim());

const obsah = 'Jordan peter Jordan';
console.log(obsah.startsWith('peter')); // startsWith() sluzi na hladanie stringu na zaciatku vety berie do uvahy aj velkost pismen
console.log(obsah.includes('peter')); //  includes() sluzi na hladanie stringu vramci celej vety berie do uvahy aj velkost pismen
const pole = ['peter', 'janko', 'dusi'];
console.log(pole.includes('dusi'));
console.log(obsah.endWith('Jordan')); // true

const premenna = 'text aaa text bbb text aaa';
console.log(premenna.replace('aaa', 'bbb'));
console.log(premenna.replace(/aaa/g, 'bbb'));

const slajsujemeText = 'peter janko isiel domov';
console.log(slajsujemeText.slice(6));
console.log(slajsujemeText.slice(6, 11));
