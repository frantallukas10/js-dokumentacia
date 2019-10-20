window.onload = () => {
  const addTask = document.getElementById('task');
  const filterTask = document.getElementById('filter');
  const ulElement = document.getElementsByClassName('list-group')[0];
  const btnAdd = document.getElementsByClassName('btn-primary')[0];
  const btnDelete = document.getElementsByClassName('btn-primary')[1];

  btnAdd.addEventListener('click', () => {
    const addTaskValue = addTask.value.trim();
    const li = document.createElement('li');
    const removeBtn = `<i class="far fa-times-circle"></i>`;
    li.innerHTML = removeBtn;
    const liText = document.createTextNode(addTaskValue);
    li.className = 'list-group-item';
    li.appendChild(liText);
    ulElement.appendChild(li);
  });

  filterTask.addEventListener('keyup', e => {
    document.querySelectorAll('.list-group-item').forEach(element => {
      element.style.display = 'block';

      if (!element.textContent.includes(e.target.value)) {
        element.style.display = 'none';
      }
    });
  });

  ulElement.addEventListener('click', e => {
    e.target.classList.contains('fa-times-circle') &&
      e.target.parentElement.remove();
  });

  btnDelete.addEventListener('click', () => {
    ulElement.innerHTML = null;
  });
};
