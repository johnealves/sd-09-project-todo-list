const btnAddTask = document.querySelector('#criar-tarefa');

// Função responsável por limpar o campo de input
function clearTextInput() {
  document.querySelector('#texto-tarefa').value = '';
}

// Requisitos [7-8] - Função responsável por colorir BgColor do item selecionado
function clickItemList(event) {
  const li = document.querySelectorAll('li');
  li.forEach((item) => {
    item.style.backgroundColor = '';
  });
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Requisito [9] - Função responsável pelo o double click no item 
function doubleClickItem() {
  const ol = document.querySelector('ol');
  ol.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}

doubleClickItem();

// Requisito [5] - Função responsável por adicionar uma nova tarefa
function createTask() {
  const input = document.querySelector('#texto-tarefa').value;
  const listTask = document.createElement('li');
  listTask.className = 'tasks';
  listTask.innerText = input;
  document.querySelector('#lista-tarefas').appendChild(listTask);
  listTask.addEventListener('click', clickItemList);
  clearTextInput();
}

btnAddTask.addEventListener('click', createTask);
