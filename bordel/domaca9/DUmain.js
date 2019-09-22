window.onload = () => {
  // selektni input 1 a otestuj addEventListener metodu kde do prveho input elementu nieco napises vypise to do console logu
  // selektni input 2 a otestuj addEventListener metodu kde kliknes do druheho input elementu a stlacis sipku dole pri tomto evente do console logu vypis stlacila som sipku dole
  // a takto pokracuje vramci dokumentacie pre klavesu a mys
  const input1 = document.getElementById('id1');
  input1.addEventListener('keypress', function() {
    console.log('text sa zobrazil po stlaceni lubovolneho pismena');
  });
  const input2 = document.getElementById('id2');
  input2.addEventListener('keydown', function() {
    console.log('text sa zobrazil po stlaceni klavesy');
  });
  const input3 = document.getElementById('id3');
  input3.addEventListener('keyup', function() {
    console.log('text sa zobrazil po pusteni klavesy');
  });
  const input4 = document.getElementById('id4');
  input4.addEventListener('focus', function() {
    console.log('text sa zobrazil lebo som vosla mysou do elementu');
  });
  const input5 = document.getElementById('id5');
  input5.addEventListener('blur', function() {
    console.log('text sa zobrazil lebo som odisla mysou z elementu');
  });
  const input6 = document.getElementById('id6');
  input6.addEventListener('cut', function() {
    console.log(
      'text sa zobrazil ked som oznacila text v inpute a stalcila som ctrl+x'
    );
  });
  const input7 = document.getElementById('id7');
  input7.addEventListener('paste', function() {
    console.log(
      'text sa zobrazil ked som skopirovala text pomocou stalcenia ctrl+v'
    );
  });
  const input8 = document.getElementById('id8');
  input8.addEventListener('input', function() {
    console.log('text sa zobrazil ked som urobila hocico vramci inputu');
  });
  const input9 = document.getElementById('id9');
  input9.addEventListener('change', function() {
    console.log(
      'text sa zobrazil ked som vlozila jedno pismeno a odklikla som sa z inputu'
    );
  });
  const input10 = document.getElementById('id10');
  input10.addEventListener('click', function() {
    console.log('text sa zobrazil ked som klikla');
  });
  const input11 = document.getElementById('id11');
  input11.addEventListener('dblclick', function() {
    console.log('text sa zobrazil ked som urobila dvojklik');
  });
  const input12 = document.getElementById('id12');
  input12.addEventListener('mousedown', function() {
    console.log('text sa zobrazil ked som klikla nad prvkom');
  });
  const input13 = document.getElementById('id13');
  input13.addEventListener('mouseup', function() {
    console.log('text sa zobrazil ked som uvolnila tlacidlo mysi nad prvkom');
  });
  const input14 = document.getElementById('id14');
  input14.addEventListener('mouseout', function() {
    console.log('text sa zobrazil ked som odisla z elementu');
  });
  const input15 = document.getElementById('id15');
  input15.addEventListener('mouseover', function() {
    console.log(
      'text sa zobrazil ked som sa presunula nad prvok alebo na jedno z jeho deti'
    );
  });
  const input16 = document.getElementById('id16');
  input16.addEventListener('mouseenter', function() {
    console.log('text sa zobrazil ked som kurzorom presunula na prvok');
  });
  const input17 = document.getElementById('id17');
  input17.addEventListener('mouseleave', function() {
    console.log('text sa zobrazil ked som odisla z prvku');
  });
  const input18 = document.getElementById('id18');
  input18.addEventListener('mousemove', function() {
    console.log('text sa zobrazil ked som sa kurzorom pohybovala nad prvkom ');
  });
};
