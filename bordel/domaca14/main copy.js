window.onload = () => {
  // sem js
  const img = document.getElementsByTagName('img')[0];
  img.style.border = '15px solid rgb(56, 116, 194)';
  img.style.borderRadius = '5px';

  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');

  const obrazky = [
    (a = src = './contBcg-0.jpeg'),
    (b = src = './contBcg-1.jpeg'),
    (c = src = './contBcg-2.jpeg'),
    (d = src = './contBcg-3.jpeg'),
    (e = src = './contBcg-4.jpeg')
  ];
  // console.log(obrazky);

  let aktualnahodnota = 0;
  aktualnyObrazok = obrazky[aktualnahodnota];

  // console.log(btn1);

  btn1.addEventListener('click', () => {
    if (aktualnahodnota < 0) {
      aktualnyObrazok = obrazky[aktualnahodnota];
      aktualnyObrazok.style.display = 'block';
    }
  });

  btn2.addEventListener('click', () => {
    aktualnahodnota++;
    if (aktualnahodnota > obrazky.length) {
      aktualnyObrazok = obrazky[aktualnahodnota];
      aktualnyObrazok.style.display = 'block';
    }
  });
};
