# js dokumentacia

## 1. inline js

`onclick` je atribut pomocou ktoreho som nadefinoval inlinovy javascript, kde prevolam metodu alert v ktorej nadefinujem vstupny string ktori sa zobrazi v popupe
priklad:

```html
<button onclick="alert('ahoj spustil som inlinovy javascript')">Click</button>
```

## 2. interny js

pridali sme atribut ID s hodnotou "btn" pre element button, vytvorili sme interny javascript pomocou html tagu "script",vo vnutri sme selectli element button pomocou DOMu, kde sme vytiahlipomocou metody "getElementById" element s ID "btn". Nasledne sme definovali metodu, ktora kontroluje eventy nad selectnutym elementom.Definovali sme v tejto metode kontrolu nad eventom "click", kde po kliknuti ma nastatmetoda "alert", ktora vykresli vstupny string.
priklad:

```HTML
<button id="btn">Click</button>
<script>
    document.getElementById("btn").addEventListener("click", function () {
        alert('ahoj spustil som interny javascript')
    })
</script>
```

## 3. externy js

pridali sme atribut ID s hodnotou "btn" pre element button, nasledne sme vytvorili externy javascript v subore main.js a nalinkovali pod element ktory budeme vyuzivat v javascripte

```html
<button id="btn">Click</button>
<script src="./main.js"></script>
```

## 4. externy js definovany v `<head>` elemente

priklad:

```html
<head>
  <script src="./main.js"></script>
</head>
<body>
  <button id="btn">Click</button>
</body>
```

musime vramci nacitania javascriptu pouzit metodu, ktora zabezpeci, ze javascript je nacitany az po nacitani HTML.

```js
window.onload = function() {
  document.getElementById('btn').addEventListener('click', function() {
    alert('ahoj spustil som externy nacitany z onload javascript');
  });
};
```

## 5. testovanie javascriptu

tymito sposobmi mozeme zistit obsah hodnot alebo nefunkcnost zdrojoveho kodu

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

## 7. premenne javascriptu

v javascripte vieme nadefinovat premenne pomocou `var`, do ktorych vieme docasne ulozit hodnotu. Je to starsi zapis javascriptu. Aktualne sa pouziva `let` a `const`, kde `let` definuje prepisovatelnu premennu a `const` definuje neprepisovatelnu premennu.

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

## 8. pomenovanie premennych v javascripte

Pri definovani nazvu premennej sa pouziva zapis `camelCase`. Pri definovani nazvu zaciatok nesmie obsahovat číslo (`1name`), premenná nesmie byť pomenovaná nasledovnými slovami:
- `break, continue, debugger, do, while, for, function, if, else, return, switch, try, catch, const, let, var, ...spred`, rozlišuje aj veľkosť písmena.

```js
let fullName = 'Janko Hrasko';
console.log(fullName);
```

## 9. spajanie stringov v javascripte

string v js môžme zapisovať takto:
```js
let fullNameViacejRiadkov = `aaa
                             bbb`;
let fullName1 = `I'm Janko Hrasko`;
let fullName2 = "I'm Janko Hrasko";
let fullName3 = 'I\'m Janko Hrasko';
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

v js môžme používať všetky matematické úkony (+,-,/,*,...)<br>
specialne ciselne operatory: `+=`, `-=`, `/=`, `*=`, `++`, `--`, `%`

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
console.log(cislo3 % 2); // 1


let cislo4 = 0;
cislo4 += 10; // pripocita k 0 cislo 10 a prepise aktualny stav v parametri cislo4
console.log(cislo4); // 10
```

## 11. datove typy v javascripte

operator na zistenie datoveho typu je `typeof`

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
let object = {name: 'Janko'}

```

## 12. polia v javascripte

Pole slúži na ukladanie viacerých hodnôť do jednej premennej.
```js
const priatelov = ['janko', 'ferko', 'dusi', 'traktorista', 45, undefined];
```
Z pola vieme vyťahovať hodnoty napr prvu hodnotu z pola:
```js
console.log(priatelov[0]);
```
Prepisovanie hodnoty v poly:
```js
priatelov[0] = 'peto';
console.log(priatelov);
```
Pole začína vždy od 0. vramci pola sa da jendoducho zistit počet hodnôt v poli pomocou `length`
```js
console.log(priatelov.length);
```

## 13. funkcie v javascripte
Funkciu deklarujeme takto
```js
function ahoj() {
  console.log('ahoj');
}
```
Funkciu ak chceme aby sa vykonala musime ju zavolat napr. takto:
```js
ahoj();
```
Vo vnutri funkcii vieme definovat priradenie hodnot a nasledne pomocou `return` vratit vysledok:
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

Funkcie vieme definovat aj s anonymnou funkciou takto:
```js
const add = function (num1, num2) {
  let result = num1 + num2;
  return result;
}
```

## 14. objekty v javascripte

Objekt umoznuje definovat viacero hodnôt s nazvami parametrov do jedneho parametra

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

ak chceme vytiahnut hodnotu z objektu môžeme to vykonať dvoma spôsobmi a to cez `.` alebo cez `[nazov_parametra]`.
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

ak je v objekte definované pole vieme vytiahnut prvky z pola takto:
```js
console.log(person.siblings[0]);
console.log(person['siblings'][1]);
```

ak je v objekte definovana funkcia vieme ju zavolat napr. takto:
```js
person.greeting();
person['greeting']();
```

ak chcem prepisat hodnotu v objekte vieme to spravit takto:
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

## 15. Podmienkova logika if a else v javascripte

V js mame tieto rozhodovacie operatory:
- `>, <, >=, <=`
- `==, ===, !=, !==` 
ak porovnavam dve hodnoty pomocou `===` porovnavam aj typ aj hodnotu
ak porovnavam dve hodnoty pomocou `==` porovnavam iba hodnotu
ak porovnavam dve hodnoty pomocou `!==` porovnavam aj typ aj hodnotu ale zaujima ma nerovnost medzi hodnotami
ak porovnavam dve hodnoty pomocou `!=` porovnavam iba hodnotu ale zaujima ma nerovnost medzi hodnotami

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
ak mam dve po sebe nadefinovane `if` a porovnavaju rovnake hodnoty môžem to prepisať takto:
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

ak chcem vytvorit opacnu logiku tj. znegovat logiku mozem pouzit `!` na znekovanie hodnoty
```js
let value = false;
if(!value) {
  console.log('hodnota je true')
}
```

## 16. Logicke operatory `AND` a `OR` v javascripte

v JS mame tieto logicke operatory:
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

vramci js vieme vyhodnocovat a spustat kod takymto zapisom
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

## 17. metoda `Switch()` v javascripte
`switch()` metoda sluzi na jednoduche vyhodnocovanie viacerých podmienok.

`switch()` metoda ocakva vstupnu hodnotu ktora sa bude porovnavat s každou `case` hodnotou, ak sa hodnota rovna vstupnej hodnote vo `switch()` metode vykona sa skript ktory je definovaný za `:` a nasledne pomocou `break` sa dany skript ukončí. Na konci sa vždý definuje `default:` ktorí bý mal definovať to, že čo má udiať ak ani jedna hodnota z `case` nie je rovná vstupnej hodnote zo `switch()`

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
cyklus `while` ma vo vnútri definovaný skript, ktorí bude vykonaný iba vtedy ak vnutorna definovana logika t.j. `(value <= 10)` pravdivá, ak prestane byť pravdivá následne cyklus skončí.

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
cyklus `do while` funguje skoro rovnako ako while, len to ze na zaciatku spusteneho skriptu prva vstupna hodnota sa neporovnava s ocakavanym vstupom a bez porovnania sa dany skript vykona 1 krat.

priklad:
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

