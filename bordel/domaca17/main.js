window.onload = () => {
  const input = document.getElementById('input');
  const input2 = document.getElementById('input2');
  const input3 = document.getElementById('input3');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    if (input.value.length > 0) {
      alert(input.value);
    }
    if (input.value.length > 10) {
      alert('Tvoj input je vacsi ako 10!');
    }
  });

  input.addEventListener('keyup', e => {
    input2.value = e.target.value;
  });

  input2.addEventListener('blur', e => {
    input3.value = e.target.value;
    if (e.target.value === 'black') {
      document.body.style.backgroundColor = 'black';
    } else if (e.target.value === 'white') {
      document.body.style.backgroundColor = 'white';
    } else {
      alert('Nedodal si spravnu farbu!');
    }
  });

  input3.addEventListener('keyup', e => {
    e.target.value = e.target.value.trim();
    btn.innerHTML = e.target.value;
  });

  document.addEventListener('mousemove', e => {
    if (e.target.id === 'btn') {
      btn.style.backgroundColor = 'black';
    }
  });

  btn.addEventListener('blur', () => {
    btn.style.backgroundColor = 'blue';
  });
};
