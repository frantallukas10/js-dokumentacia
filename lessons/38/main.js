window.onload = () => {
  const zoznam = document.querySelector('#zoznam');
  console.log(zoznam);

  // childNodes
  const vsetkyVnoreneDataElementu = zoznam.childNodes;
  console.log(vsetkyVnoreneDataElementu);

  // children
  const vsetkyDetiElementu = zoznam.children;
  console.log(vsetkyDetiElementu);
  // firstChild
  const vytiahnemPrveDieta = zoznam.firstChild;
  console.log(vytiahnemPrveDieta);

  // lastChild
  const vytiahnemPosledneDieta = zoznam.lastChild;
  console.log(vytiahnemPosledneDieta);
};
