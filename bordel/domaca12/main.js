window.onload = () => {
  const odpocitaj = document.getElementsByClassName('btn1')[0];
  const pripocitaj = document.getElementsByClassName('btn2')[0];

  const changeStyleCounter = cislo => {
    if (cislo >= 1) {
      return 'green';
    } else if (cislo < 0) {
      return 'red';
    }
    return 'black';
  };

  const element = document.getElementById('counter');
  let counterHodnota = element.innerHTML;

  odpocitaj.addEventListener('click', () => {
    counterHodnota--;
    element.innerHTML = counterHodnota;
    element.style.color = changeStyleCounter(counterHodnota);
  });

  pripocitaj.addEventListener('click', () => {
    counterHodnota++;
    element.innerHTML = counterHodnota;
    element.style.color = changeStyleCounter(counterHodnota);
  });
};
