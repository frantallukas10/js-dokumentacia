window.onload = () => {
  // .stylePreNadpis {
  //   font-size: 12px;
  //   background: blue;
  //   color: white;
  // }

  const nadpis = document.getElementById('nadpis');

  console.log(nadpis.style);

  nadpis.style.fontSize = '12px';
  nadpis.style.background = 'blue';
  nadpis.style.color = 'white';
  // nadpis.style.display = 'none';
  // nadpis.style.display = 'block';

  // nadpis.classList.add('stylePreNadpis');
  // nadpis.classList.add('schovaj');
  // nadpis.classList.add('zobraz');
};
