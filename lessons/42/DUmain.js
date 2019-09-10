window.onload = () => {
  const prveLi = document.getElementById('prve');
  console.log('prve li:', prveLi);
  console.log('---------------------------');

  const druheLi = document.getElementsByClassName('druhe')[0];
  console.log('druhe li:', druheLi);
  console.log('---------------------------');

  const posledneLi = document.getElementsByTagName('li')[5];

  const hodnotaNodeValue1 = prveLi.childNodes[0].nodeValue;
  console.log('hodnota nodeValue pre prve li:', hodnotaNodeValue1);
  console.log('---------------------------');

  const hodnotaNodeValue2 = druheLi.childNodes[0].nodeValue;
  console.log('hodnota nodeValue pre druhe li:', hodnotaNodeValue2);
  console.log('---------------------------');

  const hodnotaTextContent = posledneLi.textContent;
  console.log('hodnota textContent pre posledne li:', hodnotaTextContent);
  console.log('---------------------------');

  // const pridajClassAtribut = posledneLi.setAttribute('class', 'ahoj');
  // console.log('pridana nova klasa "ahoj" poslednemu li:', pridajClassAtribut); NEFUNGUJE, PRECO???? vracia: "pridana nova klasa "ahoj" poslednemu li: undefined"

  posledneLi.className = 'ahoj';
  console.log('---------------------------');

  const vytiahniClassZposlednehoLi = posledneLi.classList;
  console.log('---------------------------');
  console.log(
    'vytiahnutie class atributu z posledneho li:',
    vytiahniClassZposlednehoLi
  );
  console.log('---------------------------');

  prveLi.className = 'daco';
  console.log('---------------------------');

  // prveLi.remove('daco');
  // console.log('---------------------------'); ///ODOBERIE CELE LI

  prveLi.classList.remove('daco');
  console.log('---------------------------'); ///PRECO ODOBERIE NAZOV CLASSY ALE SLOVO 'CLASS' TAM NECHA??
  console.log('---------------------------');

  let existenciaClassy = prveLi.classList.contains('daco');
  console.log('klasa "daco" stale existuje:', existenciaClassy);
};
