window.onload = () => {
  const alert = document.getElementById('alert');
  const input = document.getElementById('input');
  const btn = document.getElementById('btn-submit');
  const info = document.getElementById('info');

  btn.addEventListener('click', () => {
    if (input.value === '') {
      alert.classList.remove('d-none');
      alert.classList.add('d-block');
      info.style.display = 'none';
    } else {
      info.style.display = 'block';
      info.innerHTML = input.value;
    }
  });

  input.addEventListener('focus', () => {
    alert.classList.remove('d-block');
    alert.classList.add('d-none');
  });
};
