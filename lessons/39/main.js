window.onload = () => {
  // nextSibling
  const prvyElement = document.querySelector('.prva');
  console.log(prvyElement);
  const druhyElement = prvyElement.nextSibling.nextSibling;
  console.log(druhyElement);

  // previousSibling
  const poslednyElement = document.querySelector('.posledna');
  console.log(poslednyElement);
  const predposlednyElement = poslednyElement.previousSibling.previousSibling;
  console.log(predposlednyElement);
};
