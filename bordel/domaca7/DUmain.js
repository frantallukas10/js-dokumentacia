window.onload = () => {
  // vytvor si index.html kde budes mat zoznam ul a v nom 6 li elementov a v kazdom bude nejake pismenko, kde prve li bude mat id="prve", druhe li bude mat class="druhe"

  // pomocou nodeValue vytiahni text z prveho li
  const prveLi = document.getElementById('prve');
  console.log('prve li:', prveLi);
  console.log('---------------------------');

  const hodnotaNodeValue1 = prveLi.childNodes[0].nodeValue;
  console.log('hodnota nodeValue pre prve li:', hodnotaNodeValue1);
  console.log('---------------------------');

  // pomocou nodeValue vytiahni text z druheho li
  const druheLi = document.getElementsByClassName('druhe')[0];
  console.log('druhe li:', druheLi);
  console.log('---------------------------');

  const hodnotaNodeValue2 = druheLi.childNodes[0].nodeValue;
  console.log('hodnota nodeValue pre druhe li:', hodnotaNodeValue2);
  console.log('---------------------------');

  // pomocou textContent vytiahni text z posledneho li
  const posledneLi = document.getElementsByTagName('li')[5];

  const hodnotaTextContent = posledneLi.textContent;
  console.log('hodnota textContent pre posledne li:', hodnotaTextContent);
  console.log('---------------------------');

  // pridaj atribut class s hodnotou ahoj poslednemu li
  // posledneLi.setAttribute('class', 'ahoj');
  // alebo
  posledneLi.className = 'ahoj';

  // vytiahni tento atribut class z posledneho li
  const vytiahnutieClassyZposlednehoLi = posledneLi.classList.value;
  console.log(
    'vytiahnutie class atributu z posledneho li:',
    vytiahnutieClassyZposlednehoLi
  );
  console.log('---------------------------');

  // pomocou className pridaj prvemu li elmentu classu 'daco'
  prveLi.className = 'daco';

  // pomocou classList tuto classu zmaz

  // prveLi.remove('daco');///ODOBERIE CELE LI

  prveLi.classList.remove('daco'); ///PRECO ODOBERIE NAZOV CLASSY ALE SLOVO 'CLASS' TAM NECHA??
  prveLi.classList.removeAttribute('class'); // viem zmazat aj class atribut

  // pomocou contains zisti ci ta classa existuje a vypis stav false
  let existenciaClassy = prveLi.classList.contains('daco');
  console.log('klasa "daco" stale existuje:', existenciaClassy);
};
