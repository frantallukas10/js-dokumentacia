window.onload = () => {
  document.getElementById('btn').addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    console.log('klikol som');
  });

  document.addEventListener('click', e => {
    console.log('klikol som nad dokumentom');
  });
};
