window.onload = () => {
  // document.createElement('nazov_html_tagu')
  // document.createTextNode('nejaky string')
  // element.appendChild(childElement)
  const selectObalovac = document.getElementById('obalovac');
  console.log(selectObalovac.children);

  // vytvor prazdny element
  const vytvorenyDivElement = document.createElement('div');
  // console.log(vytvorenyDivElement);

  // vytvor text
  const vytvorenyText = document.createTextNode('nejaky vytvoreny text');
  // console.log(vytvorenyText);

  // pridaj vytvoreny text do vytvoreneho div elementu
  vytvorenyDivElement.appendChild(vytvorenyText);

  // pridaj vytvoreny element div s vytvorenym textom do body
  document.body.appendChild(vytvorenyDivElement);

  // -----------------------

  const elementUl = document.createElement('ul');

  // const elementLi1 = document.createElement('li');
  // const text1 = document.createTextNode('prvy');
  // elementLi1.appendChild(text1);
  // elementUl.appendChild(elementLi1);

  // const elementLi2 = document.createElement('li');
  // const text2 = document.createTextNode('druhy');
  // elementLi2.appendChild(text2);
  // elementUl.appendChild(elementLi2);

  // const elementLi3 = document.createElement('li');
  // const text3 = document.createTextNode('treti');
  // elementLi3.appendChild(text3);
  // elementUl.appendChild(elementLi3);

  const pole = ['prvy', 'druhy', 'treti'];

  pole.map(item => {
    // console.log(item);

    const elementLi = document.createElement('li');
    const text = document.createTextNode(item);
    elementLi.appendChild(text);
    elementUl.appendChild(elementLi);
  });

  document.body.appendChild(elementUl);

  elementUl.classList.add('nadpis');
  // elementUl.classList.add('nadpis2');
  // elementUl.classList.add('nadpis3');

  console.log(elementUl.classList);
  console.log(elementUl.className);

  // elementUl.className = 'nadpis1';
  // elementUl.className = 'nadpis2';
  // elementUl.className = 'nadpis3';

  const elementH2 = document.createElement('h2');
  const textH2 = document.createTextNode('som prvy');
  elementH2.appendChild(textH2);

  // vloz element h2 pred definovany element selectObalovac
  document.body.insertBefore(elementH2, selectObalovac);

  // nahradim element s textom nejaky vytovreny text namiesto h2 elementom s textom som prvy
  document.body.replaceChild(elementH2, vytvorenyDivElement);
};
