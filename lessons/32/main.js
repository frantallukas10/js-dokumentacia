// GLOBAL SCOPE VS LOCAL SCOPE
// scope je priestor v {} a vonku z nich

const globalneCislo = 5;

// function spocitaj(cislo1, cislo2) {
//   const vysledok = cislo1 + cislo2 + globalneCislo
//   return vysledok
// }

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
};
// console.log(spocitajVysledok); // nie je dostypna hodnota lebo je v inom scope

console.log(globalneCislo);

console.log('spocitajVysledok', spocitaj());
