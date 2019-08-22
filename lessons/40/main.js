window.onload = () => {
  const specialnyElement = document.getElementById('special');
  console.log('specialnyElement:', specialnyElement);
  console.log('---------------------------');

  // `nodeValue` vracia string z definovaneho childNodes ktori musi byt definovany pomocou [poradie_ktori_string_chcem]
  const hodnotaNodeValue = specialnyElement.childNodes[0].nodeValue;
  console.log('hodnotaNodeValue:', hodnotaNodeValue);
  console.log('---------------------------');

  // pomocou trim metody vieme precistit priestor pred a za selektnutym stringom
  const hodnotaNodeValueUpravena = specialnyElement.childNodes[0].nodeValue.trim();
  console.log('hodnotaNodeValueUpravena:', hodnotaNodeValueUpravena);
  console.log('---------------------------');

  // `textContent` vracia string nachadazjuci sa v selektnutom elemente
  const hodnotaTextContent = specialnyElement.textContent;
  console.log('hodnotaTextContent:', hodnotaTextContent);
};
