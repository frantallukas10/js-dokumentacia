# js dokumentácia

## 1. inline js

`onclick` je atribút pomocou ktorého som nadefinoval inlinový javascript, kde prevolám metódu alert, v ktorej nadefinujem vstupný string, ktorý sa zobrazí v pop-upe.
príklad:

```html
<button onclick="alert('ahoj spustil som inlinovy javascript')">Click</button>
```

## 2. interný js

pridali sme atribút ID s hodnotou "btn" pre element button, vytvorili sme interný javascript pomocou html tagu "script",vo vnútri sme selectli element button pomocou DOMu, kde sme vytiahli pomocou metódy "getElementById" element s ID "btn". Následne sme definovali metódu, ktorá kontroluje eventy nad selectnutym elementom.Definovali sme v tejto metóde kontrolu nad eventom "click", kde po kliknuti má nastať metóda "alert", ktorá vykresli vstupný string.
príklad:

```HTML
<button id="btn">Click</button>
<script>
    document.getElementById("btn").addEventListener("click", function () {
        alert('ahoj spustil som interny javascript')
    })
</script>
```

## 3. externý js

pridali sme atribút ID s hodnotou "btn" pre element button, následne sme vytvorili externý javascript v súbore main.js a nalinkovali pod element, ktorý budeme využívať v javascripte

```html
<button id="btn">Click</button>
<script src="./main.js"></script>
```

## 4. externý js definovaný v `<head>` elemente

príklad:

```html
<head>
  <script src="./main.js"></script>
</head>
<body>
  <button id="btn">Click</button>
</body>
```

musíme vrámci načítania javascriptu použiť metódu, ktorá zabezpečí, že javascript je načítaný až po načítaní HTML.

```js
window.onload = function() {
  document.getElementById('btn').addEventListener('click', function() {
    alert('ahoj spustil som externy nacitany z onload javascript');
  });
};
```

## 5. testovanie javascriptu

týmito spôsobmi môžeme zistiť obsah hodnôt alebo nefunkčnosť zdrojového kódu

```js
document.write('vlozeny text pomocou javascriptu');
alert('vlozeny text pomocou javascriptu');
console.log('vlozeny text pomocou javascriptu v terminali');
console.error('vlozeny text pomocou javascriptu v terminali');
// -----
document.write(10 + 10);
alert(20);
console.log(20);
```

## 6. jednoriadkový a viacriadkový komentár
- jednoriadkový komentár
```js
// console.log(1);
```
- viacriadkový komentár
```js
/*
function superDuper() {
  console.log(2);
}
superDuper();
*/
```

## 7. premenné javascriptu

v javascripte vieme nadefinovať premenné pomocou `var`, do ktorých vieme dočasne uložiť hodnotu. Je to starší zápis javascriptu. Aktuálne sa používa `let` a `const`, kde `let` definuje prepisovateľnu premennu a `const` definuje neprepisovateľnu premennu.

```js
let nazov1 = 'hodnota premennej je tento string';
console.log(nazov1); // vystup je hodnota premennej je tento string
nazov1 = 1;
console.log(nazov1); // vystup je 1

const nazov2 = 'hodnota premennej je tento string';
console.log(nazov2); // vystup je hodnota premennej je tento string
console.log(nazov2); // vystup je hodnota premennej je tento string

let address, zip, state;
address = 'Kosice';
zip = '04001';
state = 'Sk';
console.log(address, zip, state); // vystup je Kosice 04001 Sk
```

## 8. pomenovanie premenných v javascripte

Pri definovaní názvu premennej sa používa zápis `camelCase`. Pri definovaní názvu začiatok nesmie obsahovať číslo (`1name`), premenna nesmie byť pomenovaná nasledovnými slovami:

- `break, continue, debugger, do, while, for, function, if, else, return, switch, try, catch, const, let, var, ...spred`, rozlišuje aj veľkosť písmena.

```js
let fullName = 'Janko Hrasko';
console.log(fullName);
```

## 9. spájanie stringov v javascripte

string v js môžme zapisovať takto:

```js
let fullNameViacejRiadkov = `aaa
                             bbb`;
let fullName1 = `I'm Janko Hrasko`;
let fullName2 = "I'm Janko Hrasko";
let fullName3 = "I'm Janko Hrasko";
let fullName4 = 'I"m Janko Hrasko';
let fullName5 = 'I' + "'" + 'm Janko Hrasko';
const nieco = "'";
let fullName6 = `I${nieco}m Janko Hrasko`;
console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);
console.log(fullName6);
```

## 10. čísla a funkcie v javascripte

v js môžme používať všetky matematické úkony (+,-,/,_,...)<br>
špeciálne číselné operátory: `+=`, `-=`, `/=`, `_=`,`++`,`--`,`%`

```js
const number = 34;
const number2 = 2.456;

let sum = number + number2;
let sub = number - number2;
let mult = number * number2;
let div = number / number2;

console.log(sum);
console.log(sub);
console.log(mult);
console.log(div);

let cislo1 = 0;
++cislo1; // pripocita 1
console.log(cislo1); // 1

let cislo2 = 0;
cislo2++; // pripocita 1
console.log(cislo2); // 1
console.log(11 % 2); // 1

let cislo4 = 0;
cislo4 += 10; // pripocita k 0 cislo 10 a prepise aktualny stav v parametri cislo4
console.log(cislo4); // 10
```

## 11. dátove typy v javascripte

operátor na zistenie dátoveho typu je `typeof`

- String

```js
let text = 'nejaky text';
```

- Number

```js
let value = 50;
```

- Boolean

```js
let value1 = true;
let value2 = false;
```

- Null

```js
let result = null;
```

- Undefined

```js
let name;
```

- Object

```js
let array = ['Janko'];
let log = function(a) {
  console.log(a);
};
let object = { name: 'Janko' };
```

## 12. polia v javascripte

Pole slúži na ukladanie viacerých hodnôť do jednej premennej.

```js
const priatelov = ['janko', 'ferko', 'dusi', 'traktorista', 45, undefined];
```

Z poľa vieme vyťahovať hodnoty, napr. prvú hodnotu z poľa:

```js
console.log(priatelov[0]);
```

Prepisovanie hodnoty v poli:

```js
priatelov[0] = 'peto';
console.log(priatelov);
```

Pole začína vždy od 0. Vrámci poľa sa dá jendoducho zistiť počet hodnôt v poli pomocou `length`

```js
console.log(priatelov.length);
```

## 13. funkcie v javascripte

Funkciu deklarujeme takto:

```js
function ahoj() {
  console.log('ahoj');
}
```

Funkciu ak chceme aby sa vykonala, musíme ju zavolať, napr. takto:

```js
ahoj();
```

Vo vnútri funkcie vieme definovať priradenie hodnôt a následne pomocou `return` vrátiť výsledok:

```js
function add(num1, num2) {
  let result = num1 + num2;
  return result;
}

const first = add(10, 5);
console.log(first);

const second = add(100, 20);
console.log(second);

const third = add(200, 23);
console.log(third);
```

Funkcie vieme definovať aj s anonymnou funkciou takto:

```js
const add = function(num1, num2) {
  let result = num1 + num2;
  return result;
};
```

## 14. objekty v javascripte

Objekt umožňuje definovať viacero hodnôt s názvami parametrov do jedného parametra

```js
const person = {
  name: 'janko',
  lastName: 'Papuca',
  age: 25,
  education: false,
  married: true,
  siblings: ['sister', 'brother'],
  greeting: function() {
    console.log('Hello my name is Janko!!!');
  }
};
```

ak chceme vytiahnúť hodnotu z objektu, môžeme to vykonať dvoma spôsobmi a to cez `.` alebo cez `[nazov_parametra]`.

```js
console.log(person.name);
console.log(person['name']);
console.log(person.lastName);
console.log(person['lastName']);
console.log(person.age);
console.log(person['age']);
console.log(person.education);
console.log(person['education']);
console.log(person.married);
console.log(person['married']);
```

ak je v objekte definované pole, vieme vytiahnúť prvky z poľa takto:

```js
console.log(person.siblings[0]);
console.log(person['siblings'][1]);
```

ak je v objekte definovaná funkcia, vieme ju zavolať napr. takto:

```js
person.greeting();
person['greeting']();
```

ak chceme prepísať hodnotu v objekte, vieme to spraviť takto:

```js
person.name = 'Peto';
person.lastName = 'Topanka';
person.age = 43;
person.education = [];
person.married = false;
person.siblings = undefined;
person.greeting = function() {
  console.log('Hello my name is Peto!!!');
};
```

## 15. Podmienková logika if a else v javascripte

V js máme tieto rozhodovacie operátory:

- `>, <, >=, <=`
- `==, ===, !=, !==`
  ak porovnávam dve hodnoty pomocou `===` porovnávam aj typ aj hodnotu
  ak porovnávam dve hodnoty pomocou `==` porovnávam iba hodnotu
  ak porovnávam dve hodnoty pomocou `!==` porovnávam aj typ aj hodnotu, ale zaujíma ma nerovnosť medzi hodnotami
  ak porovnávam dve hodnoty pomocou `!=` porovnávam iba hodnotu, ale zaujíma ma nerovnosť medzi hodnotami

```js
let num1 = 4;
let num2 = 6;

if (num1 > num2) {
  console.log('prve cislo je vacsie ako druhe');
}

if (num1 < num2) {
  console.log('prve cislo je mensie ako druhe');
}
```

ak mám dve po sebe nadefinované `if` a porovnávajú rovnaké hodnoty, môžem to prepísať takto:

```js
if (num1 > num2) {
  console.log('prve cislo je vacsie ako druhe');
} else {
  console.log('prve cislo je mensie ako druhe');
}

num1 = 0;
num2 = 0;

if (num1 > num2) {
  console.log('prve cislo je vacsie ako druhe');
} else if (num1 < num2) {
  console.log('prve cislo je mensie ako druhe');
} else if (num1 === num2) {
  console.log('prve cislo je rovnake ako druhe');
} else {
  console.log('niekde mas chybu');
}
```

ak chcem vytvoriť opačnú logiku tj. znegovať logiku, možem použiť `!` na znegovanie hodnoty

```js
let value = false;
if (!value) {
  console.log('hodnota je true');
}
```

## 16. Logické operátory `AND` a `OR` v javascripte

v JS máme tieto logické operátory:

- AND `&&`
- OR `||`

```js
// vyhodnocujem vstupne hodnoty a porovnavam s databazovymi hodnotami
const vstupEmail = 'janko@gmail.com';
const vstupHeslo = 'nba12345';

const databaseEmail = 'janko@gmail.com';
const databaseHeslo = 'nba12345';

// ak vstupEmail a databaseEmail ma rovnaky typ a hodnotu nasledne ma zaujima aj
// vstupHeslo a databaseHeslo ma rovnaky typ a hodnotu tj.
// 1 && 1 vyhodnoti sa to ako pravda
// 0 && 1 vyhodnoti sa to ako nepravda
// 1 && 0 vyhodnoti sa to ako nepravda
// 0 && 0 vyhodnoti sa to ako nepravda
if (vstupEmail === databaseEmail && vstupHeslo === databaseHeslo) {
  console.log('ahoj pouzivatel janko');
} else if (vstupEmail !== databaseEmail && vstupHeslo === databaseHeslo) {
  console.log('zadal si zly email');
} else if (vstupEmail === databaseEmail && vstupHeslo !== databaseHeslo) {
  console.log('zadal si zle heslo');
} else {
  console.log('uzivatel neexistuje');
}
```

vrámci js vieme vyhodnocovať a spúšťať kód takýmto zápisom:

```js
const vykonaj = true;
// ak je vykonaj pravidva hodnota tak sa nasledne vykona vsetko za &&
vykonaj && console.log('ahoj1');
//to iste
if (vykonaj) {
  console.log('ahoj1');
}

// ak je vykonaj nepravidva hodnota tak sa nasledne vykona vsetko za ||
vykonaj || console.log('ahoj2');
// to iste
if (!vykonaj) {
  console.log('ahoj2');
}
```

## 17. metóda `Switch()` v javascripte

`switch()` metóda slúži na jednoduche vyhodnocovanie viacerých podmienok.

`switch()` metóda očakáva vstupnú hodnotu, ktorá sa bude porovnávať s každou `case` hodnotou, ak sa hodnota rovná vstupnej hodnote vo `switch()` metóde, vykoná sa skript, ktorý je definovaný za `:` a následne pomocou `break` sa daný skript ukončí. Na konci sa vždy definuje `default:`, ktorý by mal definovať to, čo sa má udiať ak ani jedna hodnota z `case` nie je rovná vstupnej hodnote zo `switch()`

prerobenie 'if a else' na `switch`

```js
const value = 1;

if (value === 1) {
  console.log('hodil si cislo 1');
} else if (value === 2) {
  console.log('hodil si cislo 2');
} else if (value === 3) {
  console.log('hodil si cislo 3');
} else if (value === 4) {
  console.log('hodil si cislo 4');
} else if (value === 5) {
  console.log('hodil si cislo 5');
} else {
  console.log('hodil si cislo 6');
}

switch (value) {
  case 1:
    console.log('hodil si cislo 1');
    break;
  case 2:
    console.log('hodil si cislo 2');
    break;
  case 3:
    console.log('hodil si cislo 3');
    break;
  case 4:
    console.log('hodil si cislo 4');
    break;
  case 5:
    console.log('hodil si cislo 5');
    break;
  default:
    console.log('hodil si cislo 6');
}
```

## 18. `while` cyklus v javascripte

cyklus `while` má vo vnútri definovaný skript, ktorý bude vykonaný iba vtedy, ak vnútorná definovaná logika t.j. `(value <= 10)` je pravdivá, ak prestane byť pravdivá následne cyklus skončí.

```js
let value1 = 1;

while (value1 <= 10) {
  console.log(`cislo je ${value1}`);
  value1++;
}

// opacna logika
let value2 = 10;

while (value2 > 0) {
  console.log(`cislo je ${value2}`);
  value2--;
}
```

## 19. `do while` cyklus v javascripte

cyklus `do while` funguje skoro rovnako ako while, len na začiatku spusteného skriptu prvá vstupná hodnota sa neporovnáva s očakávanym vstupom a bez porovnania sa daný skript vykoná 1-krát.

príklad:

```js
let value1 = 1;

do {
  console.log(`cislo je ${value1}`);
  value1++;
} while (value1 <= 10);

// opacna logika
let value2 = 10;

do {
  console.log(`cislo je ${value2}`);
  value2--;
} while (value2 > 0);
```

## 20. `for` cyklus v javascripte

cyklus `for` - definujeme začiatočný stav `;` následne definujeme logiku koľko krát sa má vykonať definovaný skript vo vnútri cyklu `;` a ako posledné definujeme pripočítavanie alebo odpočítavanie začiatočného stavu.

príklad:

```js
let value = 99; // tato hodnota je definovana mimo scopu cyklu for preto vonku value á vždy 99

for (let value = 0; value < 10; value++) {
  // toto je vnutorny scope cyklu for ktori nevidi ze value je 99
  console.log(`cislo je ${value}`);
}

console.log(value); // 99

// opacna logika
for (let value = 10; value > 0; value--) {
  console.log(`cislo je ${value}`);
}

console.log(value); // 99
```

## 21. `string properties` v javascripte

stringové vlastnosti sú:

- ak ku stringu pripočítam inú hodnotu, výsledne sčítanie je string js.

```js
const value1 = 'text';
const value2 = 10;
console.log(value1 + value2);
```

- pomocou `length` vieme zistiť kolko písmenok obsahuje stringova premenna

```js
const value1 = 'text';
console.log(value1.length);
```

- `indexOf()` nájde v definovanej hodnote `veta` hľadaný string a určí jeho pozíciu a počíta aj medzeri. Začína z ľava do prava, ak sa požadovaný string nenašiel, vráti hodnotu `-1`. Ako druhý parameter vieme definovať štartovaciu pozíciu hľadania stringu.

```js
const veta = 'janko peto hrasko iveta jarka neviem us peto';
console.log(veta.indexOf('peto')); // 6
console.log(veta.indexOf('10')); // -1
console.log(veta.indexOf('peto', 10)); // 40
```

- `lastIndexOf()` nájde v definovanej hodnote posledný hľadaný string a určí jeho pozíciu. Počíta aj medzeri a začína z prava do ľava, ak sa požadovaný string nenašiel, vráti hodnotu `-1`. Ako druhý parameter vieme definovať štartovaciu pozíciu hľadania stringu.

```js
const veta = 'janko peto hrasko iveta jarka neviem us peto';
console.log(veta.lastIndexOf('peto')); // 40
console.log(veta.lastIndexOf('10')); // -1
console.log(veta.lastIndexOf('peto', 15)); // 6
```

- `toLowerCase()` mení string v hodnote na malé písmena vs `toUpperCase()` mení string v hodnote na veľké písmena.

```js
const ále = 'janko';
console.log(ále.toUpperCase()); // JANKO
const velke = 'FERKO';
console.log(velke.toLowerCase()); // ferko
```

- `charAt()` pomocou tejto metódy viem z definovaného stringu vytiahnúť jedno písmenko na základe poradia, vždy začínam od 0.

```js
const pismenko = 'Janko';
console.log(pismenko.charAt(0)); // J
```

- `trim()` metóda maže pred a za stringom prázdny priestor

```js
const inputFormText = ' janko@gáil.com   ';
console.log(inputFormText.trim()); // janko@gmail.com
```

- `startsWith()` slúži na hľadanie stringu od začiatku vety. Berie do úvahy aj veľkosť písmen vs `endsWith()` slúži na hľadanie stringu od konca vety. Berie do úvahy aj veľkosť písmen vs `includes()` slúži na hľadanie stringu vrámci celej vety. Berie do úvahy aj veľkosť písmen. `includes()` sa dá použiť aj pre hľadanie slova v poli.

```js
const obsah = 'Jordan peter Jordan';
console.log(obsah.startsWith('peter')); // false
console.log(obsah.endsWith('Jordan')); // true
console.log(obsah.includes('peter')); // true
const pole = ['peter', 'janko', 'dusi'];
console.log(pole.includes('dusi')); // true
```

- `replace()` pomocou tejto metódy viem prepísať požadovaný string na iný požadovaný string aj globálne aj neglobálne.

```js
const premenna = 'text aaa text bbb text aaa';
// prepis neglobalne
console.log(premenna.replace('aaa', 'bbb')); // text bbb text bbb text aaa
// prepis globalne
console.log(premenna.replace(/aaa/g, 'bbb')); // text bbb text bbb text bbb
```

- `slice()` a `substring()` pomocou týchto metód viem vystrihnúť požadovaný string na základe číselných súradnic pozície písmenok. `substring()` metóda je inteligentnejšia. Ak druhá vstupná hodnota je menšia ako prvá, tak sa berie druhá vstupná hodnota ako prvá

```js
const text = 'peter janko isiel domov';
console.log(text.slice(6)); // janko isiel domov
console.log(text.substring(6)); // janko isiel domov
console.log(text.slice(6, 11)); // janko
console.log(text.substring(6, 11)); // janko
console.log(text.slice(6, 0)); // vrati nič kedže slice nie je inteligentný ako substring
console.log(text.substring(6, 0)); // peter
```

- `substr()` pomocou tejto metódy viem vystrinúť požadovaný string, kde prvý vstupný parameter je číslo, ktoré definuje začiatok vystrihovania a druhá vstupná hodnota je číslo, ktoré definuje dĺžku vyťahovaného stringu od začiatku vystrihovania

```js
const text = 'peter janko isiel domov';
console.log(text.substr(6)); // janko isiel domov
console.log(text.substr(6, 11)); // janko isiel
```

- `split()` pomocou tejto metódy viem rozdeľovať string poľa definovaného znaku v metóde. Ako druhý parameter viem definovať počet, ktorý definuje koľko krát sa má daný string rozdeliť podľa znaku.

```js
const text = 'ako sa mas ja sa mam';
console.log(text.split('')); // vrati celkovy string rozdeleny na samostatne pismenka bere do uvahy aj prazdny priestor
console.log(text.split(' ', 3)); // vrati celkovy string rozdeleny podla existujuceho prazdneho priestoru
```

- `concat` pomocou tejto metódy viem spájať polia do jedného poľa.

```js
const poleA = ['jablko', 'pomaranc'];
const poleB = ['citron', 'banan'];
const poleC = ['jahoda', 'mandarinka'];

const spojenePole = poleA.concat(poleB, poleC);

console.log(spojenePole); // obashuje poleA aj poleB a aj poleC ako jedno pole
```

## 22. Stringovy literál

vrámci ES6+ sa definoval literál, vďaka ktorému vieme zapisovať string `'vysledok:' + 10` aj pomocou literálu takto `vysledok ${10}`

priklad:

```js
const name = 'Janko';
const age = 25;
const sentence = 'ahoj to som ja ' + name + ' a ja mam ' + age + ' rokov';
console.log(sentence);

const sentenceLit = `ahoj to som ja ${name} a ja mam ${age} rokov`;
console.log(sentenceLit);

// vstupna hodnota môže byť aj funkcia
const vykonaj = () => {
  return 10;
};
const text = `cislo je ${vykonaj()}`;
console.log(text);
```

## 23. Vlastnosti a metódy v poliach

Pole ma vždy definovaný počet prvkov v poli, a to viem vytiahnúť pomocou `length`

```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names.length); // 5
console.log(names[4]); // 'ben'
console.log(names[names.length - 1]); // 'ben'
```

Metódy:
`conncat()`, `reverse()`, `shift()`, `pop()`, `unshift()`, `push()`, `splice()`, `slice()`

- `concat()` slúži na spájanie polí do jedneho poľa
```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

const lastNames = ['banan', 'cesnak', 'chilli'];
const allNames = names.concat(lastNames);
console.log(allNames); // [ 'john', 'bob', 'barry', 'olga', 'ben', 'banan', 'cesnak', 'chilli' ]
```

- `reverse()` slúži na prehodenie poradia prvkov v poli
```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names.reverse()); // [ 'ben', 'olga', 'barry', 'bob', 'john' ]
```

- `shift()` služí na odstránenie prvého prvku z poľa 
```js
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
```

- `pop()` slúži na odstránenie posledného prvku z poľa
```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names); // [ 'john', 'bob', 'barry', 'olga', 'ben' ]
names.pop();
console.log(names); // [ 'john', 'bob', 'barry', 'olga' ]
names.pop();
console.log(names); // [ 'john', 'bob', 'barry' ]
names.pop();
console.log(names); // [ 'john', 'bob' ]
names.pop();
console.log(names); // [ 'john' ]
names.pop();
console.log(names); // [ ]
```

- `unshift()` služí na vkladanie prvku do poľa, ktoré bude vložené vždy na začiatok poľa
```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

console.log(names); // [ 'john', 'bob', 'barry', 'olga', 'ben' ]
names.unshift('jablko');
console.log(names); // [ 'jablko', john', 'bob', 'barry', 'olga', 'ben' ]
names.unshift('hruska');
console.log(names); // [ 'hruska', 'jablko', 'john', 'bob', 'barry', 'olga', 'ben' ]`
```

- `push()` služi na vkladanie prvku do poľa, ktoré bude vložene vždy na konci poľa
```js
let names = ['john', 'bob', 'barry', 'olga', 'ben'];

names.push('jablko');
console.log(names); // [ 'john', 'bob', 'barry', 'olga', 'ben', 'jablko' ]
```

- `splice()` služi na doplnenie alebo prepísanie prvkov v poli
```js
let names1 = ['john', 'bob', 'barry', 'olga', 'ben'];
names1.splice(2, 0, 'jablko', 'hruska');
console.log(names1); // [ 'john', 'bob', 'jablko', 'hruska', 'barry', 'olga', 'ben' ]

let names2 = ['banan', 'pomaranc', 'jablko', 'mango'];
names2.splice(2, 2, 'citron', 'kiwi');
console.log(names2); // [ 'banan', 'pomaranc', 'citron', 'kiwi' ]
```

- `slice()` sluzi na odstránenie prvkov z poľa. Pri tejto metóde musím uložiť stav novej zmeny
```js
let names1 = ['john', 'bob', 'barry', 'olga', 'ben'];
names1 = names1.slice(1);
console.log(names1); // [ 'bob', 'barry', 'olga', 'ben' ]

let names2 = ['banan', 'pomaranc', 'jablko', 'mango'];
names2 = names2.slice(1, 2);
console.log(names2); // [ 'pomaranc' ]
```

## 24. Polia a `for` cyklus 

pomocou `for` cyklu viem jednoducho vytiahnúť všetky prvky z poľa:

```js
let names = ['anna', 'vierka', 'bob'];

for (let i = 0; i < names.length; i++) {
  console.log(`pozicia prvku v poli je: ${i}, prvok z pola: ${names[i]}`);
}
```

## 25.  Funkcie `return`, polia a `for` cyklus
  
```js
let firstArray = ['1', '2', '3'];
let secondArray = ['4', '5', '6'];

function mergeArray(firstArray, secondArray) {
  for (let i = 0; i < secondArray.length; i++) {
    firstArray.push(secondArray[i]);
  }
  return firstArray;
}
const result = mergeArray(firstArray, secondArray);

console.log(result);
```

## 26. hodnoty a referencie

pri definovaní objektu `{ name: 'bob' }`, ktorý bol zrecyklovaný, a následne recyklovaná hodnota v objekte bola prepísaná na novú hodnotu t.j. `susy`, existuje referencia, ktorá sa prejaví aj v definovanom objekte, z ktorého sme recyklovali.

```js
const number = 1;
const number2 = number;
number2 = 7; // vyskoci error lebo const definuje neprepisovatelny parameter

console.log(`prva hodnota je ${number}`); // 1
console.log(`druha hodnota je ${number2}`); // 7

const person = { name: 'bob' };
const person2 = person;
person2.name = 'susy';

console.log(`meno s prveho person objektu je ${person.name}`); // 'susy'
console.log(`meno s prveho person objektu je ${person2.name}`); // 'susy'
```

## 27. `null` vs `undefined`

```js
let number = 20 + null;
console.log(number); // 20

let number2 = 20 + undefined;
console.log(number2); // NaN
```

## 28. pravdivé a nepravdivé výroky

pravdivé: `"", '', ``, 1, -1, true`
nepravdivé: `0,-0,NaN, false, null, undefined, !true (negaciou viem spravit nepravdivy vyrok z pravdiveho)`

```js
const bool1 = false;
console.log(typeof bool1); // boolean
const result = 2 < 5;
console.log(typeof result); // boolean

if (result) {
  console.log('vyrok je pravdivy');
} else {
  console.log('vyrok je nepravdive');
}

const text = 'nejaky text';
if (text) {
  console.log('vyrok je pravdivy');
} else {
  console.log('vyrok je nepravdive');
}

const ocakvanaHodnota = 'nejaky text';
ocakvanaHodnota && console.log(ocakvanaHodnota);

```

## 29. ternárne operátory

- unárny operátor typeof
```js
let text = 'some text';
console.log(typeof text);
```

- binárny operátor
```js
let number = 3;
let number2 = 2 + 5;
```

- ternárny operátor `condition ? (run if true) : (run if false)`
```js
let condition = 2 > 5;
if (condition) {
  console.log('pravda');
} else {
  console.log('nepravda');
}
condition ? console.log('pravda') : console.log('nepravda');
```

## 30. globálny scope

premenné z vonkajšieho bloku kódu sa nazývajú global scope
```js
let name = 'bob';
name = 'peter';

function pocitaj() {
  // tu sa nachadza blok kodu
  console.log(name);
  name = 'orange';

  function inePocitanie() {
    // tu sa nachadza blok kodu
    name = 'this some other value';
    console.log(name);
  }
  inePocitanie();
}

pocitaj();

if (true) {
  // tu sa nachadza blok kodu
  console.log(name);
  name = 'pants';
}

console.log(`moje meno je ${name} a je super duper`);
```

## 31. lokálny scope

local scope nie je dostupný pre vonkajši blokový kód

```js
// vonkajsi blokovy kod
function pocitaj() {
  // lokalny blokovy kod
  const name = 'susy'; // premenna v local scope
  console.log(name);
  // lokalny blokovy kod
}
// vonkajsi blokovy kod
console.log(name); // premenna name nie je dostupna pre vonkajsi blokovy kod
```

## 32. premenné lokalny scope vs global scope

```js
const globalneCislo = 5;

const spocitaj = () => {
  const lokalneCislo1 = 3;
  const lokalneCislo2 = 2;
  console.log(lokalneCislo1);
  console.log(lokalneCislo2);

  const spocitajVysledok = lokalneCislo1 + lokalneCislo2 + globalneCislo;
  const nasob = () => {
    const nasobokVysledok = globalneCislo * spocitajVysledok;

    console.log('nasobokVysledok', nasobokVysledok);
  };
  // console.log(nasobokVysledok); // nie je dostypna hodnota lebo je v inom scope

  nasob();
  return spocitajVysledok;
  console.log('toto nebude vypisane lebo mam nad sebou return');
};// console.log(spocitajVysledok); // nie je dostypna hodnota lebo je v inom scope

console.log(globalneCislo);

console.log('spocitajVysledok', spocitaj());
```

## 33. `callback function`, `higher order function`

- `callback function` je funkcia, ktorá vykonáva jednoduchu logiku a je použitá, teda zaslaná, do druhej funkcie ako argument na vykonanie tejto logiky.
- `higher order function` je funkcia, ktorá recykluje iné funkcie cez argument t.j. ako vstupný parameter.

```js
// higher order function
const spocitaj = (pole, cb) => {
  let vysledok = [];
  for (let i = 0; i < pole.length; i++) {
    let vec = cb(pole[i]); // callback
    vysledok.push(vec);
  }
  return vysledok;
};

const plus = cislo => {
  return cislo + 10;
};

const nasob = cislo => {
  return cislo * 10;
};

let hodnota1 = spocitaj([1, 2, 3], plus);
console.log(hodnota1);

let hodnota2 = spocitaj([1, 2, 3], nasob);
console.log(hodnota2);
```

## 34.  Sila iterátorov pre polia
- iteračné metódy pre polia: `forEach`, `map`, `filter`, `find`, `reduce`
  
poznáme starý dobrý `for` cyklus, ale nie je potrebný, ak poznáme iteračné metódy
```js
const cislo = [0, 1, 2, 3, 4];
for (let i = 0; i < cislo.length; i++) {
  console.log(cislo[i]);
}
```
namiesto toho možme využiť
1. `forEeach(callbackfn, index, [])`
- nemení veľkosť poľa
```js
const ludia = [
  { meno: 'feri', vek: 30, pozicia: 'programator' },
  { meno: 'janko', vek: 22, pozicia: 'programator' },
  { meno: 'iveta', vek: 25, pozicia: 'programator' },
  { meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { meno: 'traktorista', vek: 64, pozicia: 'boss' }
];

ludia.forEach((clovek, index) => {
  console.log('clovek', clovek, index);
});
```

2. `map(callbackfn, index, [])`
- pri vytváraní nového poľa použijeme hodnoty z pôvodného poľa, a nato nám slúži `map()`
- nemení veľkosť pôvodného poľa
```js
const ludia = [
  { meno: 'feri', vek: 30, pozicia: 'programator' },
  { meno: 'janko', vek: 22, pozicia: 'programator' },
  { meno: 'iveta', vek: 25, pozicia: 'programator' },
  { meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { meno: 'traktorista', vek: 64, pozicia: 'boss' }
];

const vekLudi = ludia.map((clovek, index) => {
  console.log(index);
  return clovek.vek + 10;
});
console.log('vekLudi', vekLudi);

const menaLudi = ludia.map(clovek => {
  return clovek.meno;
});
console.log('menaLudi', menaLudi);

const noviLudia = ludia.map(clovek => {
  return {
    prveMeno: clovek.meno.toUpperCase(),
    novyVek: clovek.vek + 20
  };
});
console.log('noviLudia', noviLudia);
```

3. `filter(callbackfn, index, [])`
- mení veľkosť poľa
- filter vyhodnotí logiku vrámci funkcie a následne vráti nájdenú hodnotu, ktorú hľadáme
- ak sa v poli filtrovaná hodnota nenachádza, vráti nám prázdne pole
```js
const ludia = [
  { meno: 'feri', vek: 30, pozicia: 'programator' },
  { meno: 'janko', vek: 22, pozicia: 'programator' },
  { meno: 'iveta', vek: 25, pozicia: 'programator' },
  { meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { meno: 'traktorista', vek: 64, pozicia: 'boss' }
];
// ak sa v poli filtrovana hodnota nenachadza vrati nam prazdne pole
const mladyludia = ludia.filter(clovek => {
  return clovek.vek <= 30;
});
console.log('mladyludia', mladyludia);

const programatori = ludia.filter(clovek => {
  return clovek.pozicia === 'programator';
});
console.log('programatori', programatori);

const mladiProgramatori = ludia.filter(clovek => {
  return clovek.vek < 25 && clovek.pozicia === 'programator';
});
console.log('mladiProgramatori', mladiProgramatori);
```

4. `find(predicate, index, [])`
- ak nenájde hľadaný prvok, vráti `undefined`
- skvele pre získanie jedinečnej hodnoty z poľa
- vráti vždy len prvú nájdenu hodnotu vrámci definovanej logiky hľadania
```js
const ludia2 = [
  { id: 1, meno: 'feri', vek: 30, pozicia: 'programator' },
  { id: 2, meno: 'janko', vek: 22, pozicia: 'programator' },
  { id: 3, meno: 'iveta', vek: 25, pozicia: 'programator' },
  { id: 4, meno: 'dusi', vek: 20, pozicia: 'dizajner' },
  { id: 5, meno: 'traktorista', vek: 64, pozicia: 'boss' }
];
const clovekId = ludia2.find(clovek => {
  return clovek.id === 0;
});
console.log('clovekId', clovekId);
```

5. `reduce(callbackfn, currentValue, currentIndex, [])`
- slúži na manipuláciu aktuálne iterovanej hodnoty s predošlou iterovanou hodnotou
- 1 vstupný parameter accumulator - acc - total z celkovej kalkulácie
- 2 vstupný parameter currentValue - curr - aktuálna iterovaná hodnota
```js
const ludia3 = [
  { id: 1, meno: 'feri', vek: 30, pozicia: 'programator', plat: 2000 },
  { id: 2, meno: 'janko', vek: 22, pozicia: 'programator', plat: 900 },
  { id: 3, meno: 'iveta', vek: 25, pozicia: 'programator', plat: 1900 },
  { id: 4, meno: 'dusi', vek: 20, pozicia: 'dizajner', plat: 1200 },
  { id: 5, meno: 'traktorista', vek: 64, pozicia: 'boss', plat: 9000 }
];
const scitaniePlatov = ludia3.reduce((acc, curr) => {
  console.log('total', acc);
  console.log('aktualny plat', curr.plat);
  acc += curr.plat;
  return acc;
}, 0);
console.log('scitaniePlatov', scitaniePlatov);
```

## 35. Math objekt - štandardizované matematické metódy
- `Math.floor()` - zaukrúhľuje na celé číslo
```js
const cislo = 4.56789;
console.log(Math.floor(cislo)); // 4
```
- `Math.ceil()` - zaukrúhľuje na najbližšie najväčšie celé číslo
```js
const cislo = 4.56789;
console.log(Math.ceil(cislo)); // 5
```
- `Math.sqrt()` - odmocnina čísla
```js
console.log(Math.sqrt(25)); // 5
```
- `Math.PI` - 3.141592653589793
```js
console.log(Math.PI);
```
- `Math.min()` - nájdenie najmenšieho čísla
```js
console.log(Math.min(1, 4, 67, 89, 9));
```
- `Math.max()` - nájdenie najväčšieho čísla
```js
console.log(Math.max(1, 4, 67, 89, 9));
```
- `Math.random()` - vráti náhodne vygenerované číslo
```js
console.log(Math.random());
console.log(Math.floor(Math.random() * 10)); // 0 - 10
console.log(Math.floor(Math.random() * 10 + 1)); // 1 - 10
```
- `Math.round()` - zaokrúhľuje na najbližšie celé číslo
```js
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.4)); // 2
```
## 36. Date objekt - vieme získať aktuálny čas, deň, mesiac, rok a časové pásmo
vieme si nadefinovať začiatočný stav dát pre date objekt
[linka](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
```js
const date1 = new Date('December 17, 1995 03:24:00'); // 1995-12-17T02:24:00.000Z
const date2 = new Date('1995-12-17T03:24:00'); // 1995-12-17T02:24:00.000Z
```

vieme vytiahnúť dáta z date objektu
```js
const datum = new Date();
console.log(datum);

let rok = date.getFullYear();
console.log(rok);

let mesiac = date.getMonth();
console.log(mesiac);

let den = date.getDay();
console.log(den);

let sekunda = date.getSeconds();
console.log(sekunda);
```

vieme nadefinovať dáta pre date objektu

```js
const event = new Date('August 19, 1975 23:15:30');
event.setDate(24);
console.log(event.getDate());
```

## 37. DOM - dokument objekt model
Vytiahnutie elementov z DOM vieme pomocou týchto metód:
- `getElementById(id_elementu)` selektujem podľa id elementov
```js
const h1 = document.getElementById('title')
h1.style.color = 'red';
console.log(h1); // <h1 id="title" style="color: red;">text</h1>
```
- `getElementsByTagName(nazov_elementu)` selektujem podľa tag názvu elementu
```js
const list = document.getElementsByTagName('li');
console.log(list); // vrati pole selektnutych elementov
console.log(list.length); // pocet prvkov v poli
list[0].style.color = 'red';
```
list nám vráti HTMLCollection, ktoré nie je js pole, ktoré si pomocou spread operatora tj.`...` vieme preiterovať a vložiť do poľa, ktoré následne môžme používať ako v bežnom js

```js
const novePole = [...list];
novePole.forEach(element => {
  console.log(element);
});
```
- `getElementsByClassName(class_element)` selektujem podľa class názvu elementu
```js
const classSelektnutie = document.getElementsByClassName('daco');
console.log(classSelektnutie);
classSelektnutie[1].style.backgroundColor = 'red';
```
- `querySelector(vsetky_CSS_selektory)` napr. *, .className, #idName, div[class="daco"]
```js
const querySelektJedenPrvyNajdenyElement = document.querySelector('li');
console.log(querySelektJedenPrvyNajdenyElement);
querySelektJedenPrvyNajdenyElement.style.backgroundColor = 'green';
```
- `querySelectorAll(vsetky_CSS_selektory)` napr. *, .className, #idName, div[class="daco"]
```js
const querySelektVsetkyNajdeneElementy = document.querySelectorAll('li');
console.log(querySelektVsetkyNajdeneElementy);
querySelektVsetkyNajdeneElementy[3].style.backgroundColor = 'green';
```

## 38. navigovanie v DOM - `children`, `childNodes`, `firstChild`, `lastChild`
- `childNodes` vráti všetky deti selektnutého elementu aj s prázdnym definovaným priestorom
```js
const zoznam = document.querySelector('#zoznam');
const vsetkyVnoreneDataElementu = zoznam.childNodes;
console.log(vsetkyVnoreneDataElementu);
```
- `children` vieme získať všetky vnorené elementy v selektnutom elemente
```js
const vsetkyDetiElementu = zoznam.children;
console.log(vsetkyDetiElementu);
```
- `firstChild` získame prvé dieťa z childNodes
```js
const vytiahnemPrveDieta = zoznam.firstChild;
console.log(vytiahnemPrveDieta);
```
- `lastChild` získame posledné dieťa z childNodes
```js
const vytiahnemPosledneDieta = zoznam.lastChild;
console.log(vytiahnemPosledneDieta);
```

## 39. navigovanie v DOM - `nextSibling` vs `previousSibling`
- `nextSibling` vieme sa posunúť vrámci DOM o childNodes nadol
```js
const prvyElement = document.querySelector('.prva');
console.log(prvyElement);
const druhyElement = prvyElement.nextSibling.nextSibling;
console.log(druhyElement);
```
- `previousSibling` vieme sa posunúť vrámci DOM o childNodes nahor
```js
const poslednyElement = document.querySelector('.posledna');
console.log(poslednyElement);
const predposlednyElement = poslednyElement.previousSibling.previousSibling;
console.log(predposlednyElement);
```

## 40. hodnoty v DOM - textConent vs nodeValue
- `nodeValue` vracia string z definovaného childNodes, ktorý musí byť definovaný pomocou [poradie_ktori_string_chcem]
```js
const specialnyElement = document.getElementById('special');
console.log('specialnyElement:', specialnyElement);

const hodnotaNodeValue = specialnyElement.childNodes[0].nodeValue;
console.log('hodnotaNodeValue:', hodnotaNodeValue);
// pomocou trim metody vieme precistit priestor pred a za selektnutym stringom
const hodnotaNodeValueUpravena = specialnyElement.childNodes[0].nodeValue.trim();
console.log('hodnotaNodeValueUpravena:', hodnotaNodeValueUpravena);
```
- `textContent` vracia string nachádazjúci sa v selektnutom elemente
```js
const hodnotaTextContent = specialnyElement.textContent;
console.log('hodnotaTextContent:', hodnotaTextContent);
```

## 41. `getAttribute()` vs `setAttribute()`
- `getAttribute(nazovatributu)` pomocou tejto metódy vieme vytiahnúť zo selektnuteho elementu hodnotu z definovaného atribútu
```js
const elementLiPrvy = document.querySelector('li');
console.log('li element:', elementLiPrvy);

const showClass = elementLiPrvy.getAttribute('class');
const showId = elementLiPrvy.getAttribute('id');
console.log('showClass:', showClass);
console.log('showId:', showId);

const elementA = document.querySelector('a');
console.log('a element:', elementA);
const showHref = elementA.getAttribute('href');
console.log('showHref:', showHref);
```
- `setAttribute(nazovAtributu, hodnotaAtributu)` pomocou tejto metódy vieme vložiť definovaný atribút a jeho hodnotu do selektnutého elementu
```js
const elementLiPosledny = document.getElementsByTagName('li')[1];
elementLiPosledny.setAttribute('class', 'posledny');
elementLiPosledny.setAttribute('id', 'daco');
console.log(elementLiPosledny);
```

## 42. `className` vs `classList`
- `className` pomocou vytiahnutej premennej vieme vložiť classy alebo ich prepísať
```js
const prvy = document.getElementById('prvy');
const druhy = document.getElementById('druhy');
const treti = document.getElementById('treti');

const nazovClassy = prvy.className;

console.log(nazovClassy);

druhy.className = 'farba text'; // do selektnuteho elementu druhy prepisem alebo vlozim classu s definovanym nazvom
treti.className = 'farba text'; // do selektnuteho elementu druhy prepisem alebo vlozim classu s definovanym nazvom
```
- `classList` tento parameter vráti pole, ktoré obsahuje všetky classy nachádzajúce sa v seleknutom elemente a dĺžku `length` poľa spolu s hodnotou `value`, ktorá obsahuje všetky classy.
```js
const prvy = document.getElementById('prvy');
const druhy = document.getElementById('druhy');
const treti = document.getElementById('treti');

const selekttretiElement = treti.classList;

console.log(selekttretiElement); // vrati pole class a length a value
```
vrámci `classList` sa nachádzajú metódy: 
- `add(nazov_classy)`, ktorá pridáva classu
- `remove(nazov_classy)`, ktorá odoberá classu
- `item(poradiaClassy_vPoli)` vráti názov classy z poľa
- `replace(poradiaClassy_vPoli)` vráti názov classy z poľa
- `replace(nazov_classy, novy_nazov_classy)` prepíše starú classu na novú
- `contains(nazov_classy)` vráti `true` alebo `false` podľa toho, či classa existuje
```js
selekttretiElement.add('farba');
selekttretiElement.remove('farba');

console.log(selekttretiElement.item(1));

treti.classList.replace('a', 'farba');

let vysledok = treti.classList.contains('farba');
console.log(vysledok);
```

