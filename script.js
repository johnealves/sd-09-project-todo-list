const container = document.querySelector('#container');

function addHeader() {
  const createHeader = document.createElement('header');
  container.appendChild(createHeader);
}

function addTitle() {
  const header = document.querySelector('header');
  const createTitle = document.createElement('h1');
  createTitle.innerText = 'Minha Lista de Tarefas';
  header.appendChild(createTitle);
}

function addParagraph() {
  const createParagraph = document.createElement('p');
  createParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  createParagraph.id = 'funcionamento';
  container.appendChild(createParagraph);
}

function addContainerTask() {
  const containerTask = document.createElement('div');
  containerTask.id = 'container-task';
  container.appendChild(containerTask);
}

function addInput() {
  const containerTask = document.getElementById('container-task');
  const createInput = document.createElement('input');
  createInput.id = 'texto-tarefa';
  createInput.setAttribute('placeholder', 'Task');
  containerTask.appendChild(createInput);
}

function addList() {
  const createList = document.createElement('ol');
  createList.id = 'lista-tarefas';
  container.appendChild(createList);
}

function loadListInStorage() {
  let getTasks = JSON.parse(localStorage.getItem('tasks'));
  if (getTasks.length > 0) {
    for (let index = 0; index < getTasks.length; index += 1) {
      const list = document.getElementById('lista-tarefas');
      const createListItem = document.createElement('li');
      createListItem.innerText = getTasks[index].text;
      createListItem.className = getTasks[index].class;
      createListItem.addEventListener('click', handleTaskClick);
      createListItem.addEventListener('dblclick', handleTaskCompleted);
      list.appendChild(createListItem);
    }
  }
}

function handleTaskClick(event) {
  const listItem = event.target;
  const selectedItems = document.getElementsByTagName('li');
  for (let index = 0; index < selectedItems.length; index += 1) {
    let isSelected = selectedItems[index].classList.contains('selected');
    if (isSelected) {
      selectedItems[index].classList.remove('selected');
    }
  }
  listItem.classList.add('selected');
}

function handleTaskCompleted(event) {
  const task = event.target;
  const checkTaskCompleted = task.classList.contains('completed');
  if (checkTaskCompleted) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function handleAddListItem() {
  const createListItem = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const task = inputText.value;
  createListItem.innerText = task;
  createListItem.addEventListener('click', handleTaskClick);
  createListItem.addEventListener('dblclick', handleTaskCompleted);
  list.appendChild(createListItem);
  inputText.value = '';
}

function addButton() {
  const containerTask = document.getElementById('container-task');
  const createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  createButton.className = 'btn';
  createButton.innerText = 'ADICIONAR';
  createButton.addEventListener('click', handleAddListItem);
  containerTask.appendChild(createButton);
}

function generateContainerButtons() {
  const containerButtons = document.createElement('div');
  containerButtons.id = 'container-buttons';
  container.appendChild(containerButtons);
}

function handleRemoveList() {
  const listItems = document.querySelectorAll ('li');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].parentNode.removeChild(listItems[index]);
  }
}

function generateButtonRemove() {
  const containerButtons = document.getElementById('container-buttons');
  const createButton = document.createElement('button');
  createButton.id = 'apaga-tudo';
  createButton.className = 'btn';
  createButton.innerText = 'Limpar Lista';
  createButton.addEventListener('click', handleRemoveList);
  containerButtons.appendChild(createButton);
}

function handleRemoveListCompleted() {
  const taskCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < taskCompleted.length; index += 1) {
    taskCompleted[index].parentNode.removeChild(taskCompleted[index]);
  }
}

function generateButtonRemoveTasksCompleted() {
  const containerButtons = document.getElementById('container-buttons');
  const createButton = document.createElement('button');
  createButton.innerText = 'Remover Completos';
  createButton.id = 'remover-finalizados';
  createButton.className = 'btn';
  createButton.addEventListener('click', handleRemoveListCompleted);
  containerButtons.appendChild(createButton);
}

function handleSaveTasks() {
  if (typeof(Storage) !== "undefined") {
    localStorage.clear();
    let tasks = [];
    let isCompleted = false;
    const listItems = document.querySelectorAll('li');
    for (let index = 0; index < listItems.length; index += 1) {
      isCompleted = listItems[index].classList.contains('completed');
      if (isCompleted) {
        tasks.push({
          text: listItems[index].innerText,
          class: 'completed'
        });
      } else {
        tasks.push({
          text: listItems[index].innerText,
          class: ''
        });
      }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    alert('Sorry! No Web Storage support..');
  }
}

function generateButtonSaveTasks() {
  const containerButtons = document.getElementById('container-buttons');
  const createButton = document.createElement('button');
  createButton.id = 'salvar-tarefas';
  createButton.innerText = 'Salvar Tarefas';
  createButton.className = 'btn';
  createButton.addEventListener('click', handleSaveTasks);
  containerButtons.appendChild(createButton);
}

function handleMoveUp() {
  const currentListItem = document.querySelector('.selected');
  const listItemParent = currentListItem.parentNode;
  const previousSibling = currentListItem.previousSibling;
  listItemParent.insertBefore(currentListItem, previousSibling);
}

function generateButtonUp() {
  const containerButtons = document.getElementById('container-buttons');
  const createButtonUp = document.createElement('button');
  createButtonUp.id = 'mover-cima';
  createButtonUp.className = 'btn';
  createButtonUp.innerHTML = '&#708';
  createButtonUp.addEventListener('click', handleMoveUp);
  containerButtons.appendChild(createButtonUp);
}

function handleMoveDown() {
  const currentListItem = document.querySelector('.selected');
  const listItemParent = currentListItem.parentNode;
  const nextSibling = currentListItem.nextSibling;
  listItemParent.insertBefore(nextSibling, currentListItem);
}

function generateButtonDown() {
  const containerButtons = document.getElementById('container-buttons');
  const createButtonDown = document.createElement('button');
  createButtonDown.id = 'mover-baixo';
  createButtonDown.className = 'btn';
  createButtonDown.innerHTML = '&#709';
  createButtonDown.addEventListener('click', handleMoveDown);
  containerButtons.appendChild(createButtonDown);
}

window.onload = function () {
  addHeader();
  addTitle();
  addParagraph();
  addContainerTask();
  addInput();
  addList();
  addButton();
  loadListInStorage();
  generateContainerButtons();
  generateButtonRemove();
  generateButtonRemoveTasksCompleted();
  generateButtonSaveTasks()
  generateButtonUp();
  generateButtonDown();
};
