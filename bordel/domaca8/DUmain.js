window.onload = () => {
  // vytvor do body takuto html strukturu

  /*
    <div>
      <ul>
        <li>a1</li>
        <li>a2</li>
        <li>a3</li>
      </ul>
    </div>
  */

  const elementDiv = document.createElement('div');
  document.body.appendChild(elementDiv);
  const elementUl = document.createElement('ul');
  const elementLi1 = document.createElement('li');

  // prirad prvemu li text pomocou createTextNode a appendChild
  const textLi1 = document.createTextNode('a1');
  elementLi1.appendChild(textLi1);
  elementUl.appendChild(elementLi1);

  // ostatnym textom mozes cez textContent
  const pole = ['a2', 'a3'];

  pole.map(text => {
    const elementLi = document.createElement('li');
    elementLi.textContent = text;
    elementUl.appendChild(elementLi);
  });

  elementDiv.appendChild(elementUl);

  // pod toto div
  // vytvor pomocou innerHTML takuto kostru
  /*
    <div class="obalovac">
      <ul class="zoznam">
        <li>a1</li>
        <li>a2</li>
        <li>a3</li>
      </ul>
    </div>
  */
  const obalovac = document.createElement('div');
  obalovac.className = 'obalovac';
  document.body.appendChild(obalovac);
  const zoznam = document.createElement('ul');
  zoznam.className = 'zoznam';
  zoznam.innerHTML = `<li>a1</li><li>a2</li><li>a3</li>`;
  obalovac.appendChild(zoznam);

  // pomocou style v js prirad zoznamu tieto styles
  /* . {
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: underline;
  color: red;
 }
 */
};
