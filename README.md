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
```

## 1. basic

vytvor tri prepisovatelne parametre s nazvami radius, x, y<br>
vsetky tri parameter budu obsahovat cislo 1<br>
vytvor neprepisovatelny parameter s nazvom circle ktory<br>
bude obsahovať objekt v ktorom budem mat parameter radius, location a isVisible<br>
radius bude mat ulozene cislo 1, a location bude mat v sebe objekt v ktorom<br>
budu dve parameter x a y tieto dve parameter budu mat v sebe ulozene cislo 1<br>
parameter isVisible v objekte circle bude obsahovat hodnotu true<br>
dopln do objektu circle parameter draw ktori bude obsahovat anonymnu a ta<br>
funkcia vypise do consoly 'draw'<br>
skusme z objektu circle zavolal funkciu ktora je ulozena v parametri draw<br>

[riešenie](lessons/1/main.js)

## 2. Factory functions

vytvor funkciu s nazvom createCircle ktora bude vraciat obsah circle1 a circle2, ktorí je rovnaký<br>
potom tuto funkciu craeteCircle zavolam a vytiahnem metodu draw<br>
zmaz location a is visible parametere vo funkcii craeteCircle a uprav radius parameter tak ze sa do neho bude vkladat vstupna hodnota s nazvom radius namiesto 1, ktora bude definovana pri volani funkcie, ktora pri volani bude defionvana takto createCircle(1) na otestovanie vypisme obsah volanej funkcie cez console log<br>
zmazem testovanie volanej funkcie...<br>
vytvor dve konstanty circle1 a circle2 ktore budu obsahovat volanie funkcie createCircle(), kde v prvej bude vstupny parameter 1 a v druhej 2 a tieto dve konstanty nasledne vypisem do terminalu<br>

```js
const circle1 = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('draw');
  }
};

const circle2 = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('draw');
  }
};
```

[riešenie](lessons/2/main.js)

## 3. Constructor functions

po vyrieseni 2 ulohy si skopiruj obsah do 3 riesnia a zmaz si konstatny circle2 aj s console logom <br>
vytvor funkciu s nazvom Circle() ktora bude mat defionvany vstupny parameter radius<br>
vramci funkcie skus otestovat vypis do terminalu `this` vypise ti kvantum informacii ktore boli z kontextu node, kontext je objekt, ktori je definovany vramci volanej funkcie<br>
pred volanu funkciu Circle() skus vlozit `new` vrati ti obsah volanej funkcie<br>
skus vramci funkcie Circle namiesto `console.log(this)` napisat `this.radius = radius`<br>
vypis volanie novovytvoreného objektu `new Circle(1)` malo by ti to vypisat obsah objektu<br>

[riešenie](lessons/3/main.js)
