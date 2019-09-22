window.onload = () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;

    console.log(
      `Your name is ${name} amd your number is ${number} and your password is ${password}`
    );
  });
};
