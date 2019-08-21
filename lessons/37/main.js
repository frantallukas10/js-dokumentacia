window.onload = () => {
  // getElementById(id_elementu)
  const h1 = document.getElementById('title');
  h1.style.color = 'red';
  console.log(h1);
  const btn = document.getElementById('btn');
  btn.style.backgroundColor = 'blue';
  console.log(btn.style);

  // getElementsByTagName(nazov_elementu)
  const list = document.getElementsByTagName('li');
  console.log(list); // vrati pole selektnutych elemntov

  console.log(list.length);

  list[0].style.color = 'red';

  const novePole = [...list];
  novePole.forEach(element => {
    console.log(element);
  });

  // getElementsByClassName(class_element)
  const classSelektnutie = document.getElementsByClassName('daco');
  console.log(classSelektnutie);
  classSelektnutie[1].style.backgroundColor = 'red';

  // querySelector(vsetky_CSS_selektory); napr. *, .className, #idName, div[class="daco"],
  const querySelektJedenPrvyNajdenyElement = document.querySelector('li');
  console.log(querySelektJedenPrvyNajdenyElement);
  querySelektJedenPrvyNajdenyElement.style.backgroundColor = 'green';

  const querySelektVsetkyNajdeneElementy = document.querySelectorAll('li');
  console.log(querySelektVsetkyNajdeneElementy);
  querySelektVsetkyNajdeneElementy[3].style.backgroundColor = 'green';
};
