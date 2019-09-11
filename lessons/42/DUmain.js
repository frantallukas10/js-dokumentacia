window.onload = () => {
  const prveLi = document.getElementById('prve');
  console.log('prve li:', prveLi);
  console.log('---------------------------');

  const hodnotaNodeValue1 = prveLi.childNodes[0].nodeValue;
  console.log('hodnota nodeValue pre prve li:', hodnotaNodeValue1);
  console.log('---------------------------');

  const druheLi = document.getElementsByClassName('druhe')[0];
  console.log('druhe li:', druheLi);
  console.log('---------------------------');

  const hodnotaNodeValue2 = druheLi.childNodes[0].nodeValue;
  console.log('hodnota nodeValue pre druhe li:', hodnotaNodeValue2);
  console.log('---------------------------');

  const posledneLi = document.getElementsByTagName('li')[5];

  const hodnotaTextContent = posledneLi.textContent;
  console.log('hodnota textContent pre posledne li:', hodnotaTextContent);
  console.log('---------------------------');

  // const pridajClassAtribut = posledneLi.setAttribute('class', 'ahoj');
  // console.log('pridana nova klasa "ahoj" poslednemu li:', pridajClassAtribut); NEFUNGUJE, PRECO???? vracia: "pridana nova klasa "ahoj" poslednemu li: undefined"

  posledneLi.className = 'ahoj';

  const vytiahnutieClassyZposlednehoLi = posledneLi.classList;
  console.log(
    'vytiahnutie class atributu z posledneho li:',
    vytiahnutieClassyZposlednehoLi
  );
  console.log('---------------------------');

  prveLi.className = 'daco';

  // prveLi.remove('daco');///ODOBERIE CELE LI

  prveLi.classList.remove('daco'); ///PRECO ODOBERIE NAZOV CLASSY ALE SLOVO 'CLASS' TAM NECHA??

  let existenciaClassy = prveLi.classList.contains('daco');
  console.log('klasa "daco" stale existuje:', existenciaClassy);
};
