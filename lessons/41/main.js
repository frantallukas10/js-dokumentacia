window.onload = () => {
  // const elementLiPrvy = document.querySelectorAll('ul > li')[0];
  const elementLiPrvy = document.querySelector('li');
  console.log('li element:', elementLiPrvy);

  const showClass = elementLiPrvy.getAttribute('class');
  const showId = elementLiPrvy.getAttribute('id');
  console.log('showClass:', showClass);
  console.log('showId:', showId);

  // const elementA = document.querySelectorAll('a')[0];
  // const elementA = document.getElementsByTagName('a')[0];
  const elementA = document.querySelector('a');
  console.log('a element:', elementA);
  const showHref = elementA.getAttribute('href');
  console.log('showHref:', showHref);

  const elementLiPosledny = document.getElementsByTagName('li')[1];
  elementLiPosledny.setAttribute('class', 'posledny');
  elementLiPosledny.setAttribute('id', 'daco');
  console.log(elementLiPosledny);
};
