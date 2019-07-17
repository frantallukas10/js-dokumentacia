// Logicke operatory
// || === or, && == and
// !

const vstupEmail = 'janko@gmail.com';
const vstupHeslo = 'nba12345';

const databaseEmail = 'janko@gmail.com';
const databaseHeslo = 'nba12345';

if (vstupEmail === databaseEmail && vstupHeslo === databaseHeslo) {
  console.log('ahoj pouzivatel janko');
} else if (vstupEmail !== databaseEmail && vstupHeslo === databaseHeslo) {
  console.log('zadal si zly email');
} else if (vstupEmail === databaseEmail && vstupHeslo !== databaseHeslo) {
  console.log('zadal si zle heslo');
} else {
  console.log('uzivatel neexistuje');
}

const vykonaj = true;
vykonaj && console.log('ahoj1');

//to iste
if (vykonaj) {
  console.log('ahoj1');
}

vykonaj || console.log('ahoj2');

// to iste
if (!vykonaj) {
  console.log('ahoj2');
}
