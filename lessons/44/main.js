window.onload = () => {
  // textContent
  // innerHTML

  // vytvor zoznam ul ktori bude obsahovat tri li elementi v ktori sa budu nachadzat texty
  // prvy, druhy, treti a vloz to do body

  const pole = ['prvy', 'druhy', 'treti'];
  const elementUl = document.createElement('ul');

  pole.map(text => {
    // console.log('aaaa', text);
    const elementLi = document.createElement('li');
    // const textElementLi = document.createTextNode(text);
    // elementLi.appendChild(textElementLi);
    // alebo pomoocu textContent
    elementLi.textContent = text;
    elementUl.appendChild(elementLi);
  });

  document.body.appendChild(elementUl);

  console.log(document.getElementById('test').textContent);

  console.log(elementUl.textContent); // prvydruhytreti
  console.log(elementUl.innerHTML); // <li>prvy</li><li>druhy</li><li>treti</li>
  // -----------------------

  const zoznam = document.createElement('ul');
  zoznam.innerHTML = `<li class="item">1</li><li class="item">2</li>`;
  document.body.appendChild(zoznam);

  const krabica = document.createElement('div');
  krabica.textContent =
    'text v krabici pred zoznamom cisel vkada insertBefore()';
  document.body.insertBefore(krabica, zoznam);
};
