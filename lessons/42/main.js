window.onload = () => {
  const prvy = document.getElementById('prvy');
  const druhy = document.getElementById('druhy');
  const treti = document.getElementById('treti');

  const nazovClassy = prvy.className;

  console.log(nazovClassy);

  druhy.className = 'farba text';
  treti.className = 'text a b c d';

  const selekttretiElement = treti.classList;

  console.log(selekttretiElement);

  selekttretiElement.add('farba');

  selekttretiElement.remove('farba');

  console.log(selekttretiElement.item(0));

  treti.classList.replace('a', 'farba');

  let vysledok = treti.classList.contains('farba');
  console.log(vysledok);
};
