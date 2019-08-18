// GLOBAL SCOPE VS LOCAL SCOPE
// premenne z vonkajsieho bloku kódu sa nazývajú global scope

let name = 'bob';
name = 'peter';

function pocitaj() {
  // tu sa nachadza blok kodu
  console.log(name);
  name = 'orange';

  function inePocitanie() {
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
