window.onload = () => {
  const input = document.getElementById('input');
  const btnAdd = document.getElementById('btn-add');
  const btnClear = document.getElementById('btn-clear');

  localStorage.setItem('name', 'Janko');
  localStorage.setItem('age', '21');
  // localStorage.setItem('name', 'Ferko');

  const name = localStorage.getItem('name');
  const age = localStorage.getItem('age');
  console.log(name, age);

  btnAdd.addEventListener('click', e => {
    localStorage.setItem(e.timeStamp, input.value);
  });

  btnClear.addEventListener('click', () => {
    localStorage.clear();
  });

  const pole = [
    'Janko',
    21,
    {
      name: 'janko',
      age: 10
    }
  ];
  const poleAkoJson = JSON.stringify(pole);
  console.log('JSON.stringify(pole):', poleAkoJson);
  localStorage.setItem('poleAkoJson', poleAkoJson);

  console.log(localStorage.getItem('poleAkoJson'));
  console.log(JSON.parse(localStorage.getItem('poleAkoJson')));

  const objekt = {
    name: 'janko',
    cislo: 10,
    objekt: {},
    pole: []
  };
  const objektAkoJson = JSON.stringify(objekt);
  console.log('JSON.stringify(objekt):', objektAkoJson);
  localStorage.setItem('objektAkoJson', objektAkoJson);

  console.log(localStorage.getItem('objektAkoJson'));
  console.log(JSON.parse(localStorage.getItem('objektAkoJson')));
};
