window.onload = () => {
  const btn = document.getElementById('btn');
  btn.addEventListener('click', e => {
    console.log('event', e);
    console.log('target nad akym elementom sa vykonal event click', e.target);
    console.log('className', e.target.className);
    console.log('classList', e.target.classList);
    console.log('id', e.target.id);
    console.log('type', e.target.type);
    console.log('cas cliknutia', e.timeStamp);

    if (e.target.className !== 'secondary') {
      e.target.classList.add('secondary');
      e.target.textContent = 'som vypnuty';
    } else {
      e.target.classList.remove('secondary');
      e.target.textContent = 'som zapnuty';
    }
  });

  const isYellow = () => document.body.style.backgroundColor;

  const btn2 = document.getElementById('btn2');
  btn2.addEventListener('click', () => {
    console.log('aaa');
    if (isYellow() === 'yellow') {
      document.body.style.backgroundColor = '';
    } else {
      document.body.style.backgroundColor = 'yellow';
    }
  });
};
