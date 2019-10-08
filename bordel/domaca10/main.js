window.onload = () => {
  // selektni btn, vytvor si pole farbieb a uloz do constanty farba ['yellow', 'green', 'blue, '#f15025', 'rgba(125,125,125,0.5)']
  // vytvor posluchaca nad buttonom a na klik bude menit farbu pozadia stranky randdomne
  // naskor si uloz do constanty randomHodnota Math.random(), nasledne si ju vykonzoluj
  // potom si uprav tuto metodu takto Math.random() * farba.length
  // na zaokruhlenie randomHodnota pouzi metodu Math.floor(Math.random() * 5)
  // cez style parameter zmen body backgroundColor na hodnotu = rarba[randomHodnota]
  const btn = document.getElementsByClassName('btn')[0];

  btn.addEventListener('click', () => {
    const farba = [
      'yellow',
      'green',
      'blue',
      '#f15025',
      'rgba(125,125,125,0.5)'
    ];
    // const randomHodnota = Math.random();
    // console.log(randomHodnota);
    // const randomHodnota = Math.random() * farba.length;
    // console.log(randomHodnota);
    const randomHodnota = Math.floor(Math.random() * 5);
    // console.log(randomHodnota);
    document.body.style.backgroundColor = farba[randomHodnota];
  });
};
