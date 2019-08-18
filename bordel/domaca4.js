// vytvor globalny parameter ktori bude cislo a
// pouzity vo funkcii na scitanie s lokalnym parametrom ktori bude tiez cislo
// vykonzoluj vysledok a okomentuj ktory parameter je lokalny a globalny

const globalParameter = 12; //globalny
// console.log(globalParameter);

const scitaj = () => {
  const lokalParameter = 1; //lokalny
  // console.log(lokalParameter);

  const vysledok = globalParameter + lokalParameter;
  console.log(vysledok);
};
scitaj();

// vytvor funkciu ktora bude delit dve cisla a vstupne parametre su dve cisla ktore sa vlozia vo funkcii ktora tuto funkciu vyuzie ako callback
// vytvor funkciu ktora bude cez argument vyuzivat tuto definovanu funkciu kde pri volani tejto funkcii vlozis do nej dve cisla a to (10, 2)

const poleCisel = { prve: 6, druhe: 2 };

const predel = (prve, druhe) => {
  // console.log(prve, druhe);
  return prve / druhe;
};

const vysledok = (poleCisel, predel) => {
  return predel(poleCisel.prve, poleCisel.druhe);
};

const vysledokDelenia = vysledok(poleCisel, predel);
console.log(vysledokDelenia);
