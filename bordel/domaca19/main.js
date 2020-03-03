// vytvor es5 funkciu s nazvom clovek vstupne hodnoty bude mat vek a meno tato funkcia bude vraciat objekt v ktorom ma parameter name a age tieto parametre budu primat hodnoty zo vstupu definovanej funkcie
// pokus sa vypisat name a age v console ak tuto funkciu zavolas so vstupnimi parametrami ('janko', 12)

function clovek(name, age) {
  return {
    name: name,
    age: age,
    function: () => {
      console.log(`${name} ${age}`);
    }
  };
}
clovek('Janko', 12).function();

// skus vytvorit function ako class s nazvom Human vstupne hodnoty budu vek a vaha tieto vstupne hodnoty bude classa dedit do svojich parametrov pri vytvarani instancii nazvy parametrom mozu byt rovnake ako vstupne hodnoty okrem tychto hodnot classa bude obsahovat aj parameter vypis v ktorom bude defionvana anonymna funkcia s vypisom tychto dvoch hodnot

function Human(vek, vaha) {
  this.vek = vek;
  this.vaha = vaha;
  this.vypis = function() {
    console.log(`${this.vek} ${this.vaha}`);
  };
}

// ked budes mat vytvorenu classu vytvor si instanciu classy so vstupny hodnotami 10 a 30 tato instancia bude vlozena do konštanty small

const small = new Human(10, 10);

// dalsia instancia bude big s hodnotami 15 50

const big = new Human(15, 50);

// po definovani isntancii pokus sa vypisat obsah jednej aj druhej instancii teda obsah parametrov teda iba hodnoty

small.vypis();
big.vypis();

// pokus sa vypisat obsah instancii t.j. parametre aj s hodnotami
console.log(small.constructor);
console.log(big.constructor);

// pokus sa pomocou Object.getProtoTypeOf vypisat metody pre jednu instanciu constructoru
console.log(Object.getPrototypeOf(small));
console.log(Object.getPrototypeOf(big));
