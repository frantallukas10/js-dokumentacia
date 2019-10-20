window.onload = () => {
  const input1 = document.getElementById('input1');

  input1.addEventListener('mouseleave', e => {
    inputValue = e.target.value;
    input1.style.backgroundColor = inputValue;
  });

  const btn = document.getElementById('btn');
  const ulObalovac = document.getElementById('ulObalovac');
  btn.addEventListener('click', () => {
    const inputValue = input1.value.trim();

    const div = document.createElement('div');
    const divText = document.createTextNode(inputValue);
    div.appendChild(divText);
    console.log(div);
    ulObalovac.appendChild(div);
  });

  const input2 = document.getElementById('input2');

  input2.addEventListener('mouseleave', e => {
    if (e.target.value === 'ano') {
      alert('nie');
    }
  });

  const divElement = document.getElementById('divElement');
  // console.log(divElement);
  divElement.style.marginTop = '10px';
  divElement.style.height = '500px';
  divElement.style.width = '500px';
  divElement.style.backgroundColor = 'blue';

  divElement.addEventListener('mouseenter', () => {
    divElement.style.backgroundColor = 'orange';
  });

  divElement.addEventListener('mouseleave', () => {
    divElement.style.backgroundColor = 'blue';
  });
};
