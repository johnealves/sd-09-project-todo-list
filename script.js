const text = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const list = document.createElement('li');
list.className = 'todo-list';
const buttonsSection = document.querySelector('#buttons');
const removeTasks = document.createElement('button');
removeTasks.id = 'apaga-tudo';
removeTasks.className = 'button remove';
removeTasks.innerHTML = 'Remove All';
buttonsSection.appendChild(removeTasks);
const removeChecked = document.createElement('button');
removeChecked.id = 'remover-finalizados';
removeChecked.className = 'button remove';
removeChecked.innerHTML = 'Remove Completed';
buttonsSection.appendChild(removeChecked);
const removeSelected = document.createElement('button');
removeSelected.id = 'remover-selecionado';
removeSelected.className = 'button remove';
removeSelected.innerHTML = 'Remove Selected';
buttonsSection.appendChild(removeSelected);
const saveTasks = document.createElement('button');
saveTasks.id = 'salvar-tarefas';
saveTasks.className = 'button save';
saveTasks.innerHTML = 'Save Selected';
buttonsSection.appendChild(saveTasks);

// Add tasks
function addTask() {
  button.addEventListener('click', function () {
    if (text.value === '') {
      alert('[ERRO!] - Valor inválido!');
    } else {
      const lists = document.createElement('li');
      lists.className = 'todo-list';
      orderedList.appendChild(lists);
      lists.innerText = text.value;
      text.value = '';
    }
  });
}

function selectedDesativate() {
  orderedList.addEventListener('click', function (event) {
    const selectedLi = document.querySelectorAll('.selected');
    for (let index = 0; index < selectedLi.length; index += 1) {
      selectedLi[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

// Scratch the double-click tasks
function todoCompleted() {
  orderedList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

  // Removes all tasks
function removeAllTasks() {
  removeTasks.addEventListener('click', function () {
    const ulList = document.querySelectorAll('#lista-tarefas>li');
    for (let index = 0; index < ulList.length; index += 1) {
      const listTask = ulList[index];
      listTask.parentNode.removeChild(listTask);
    }
  });
}

// Remove scratched tasks
function removeCheckedTasks() {
  removeChecked.addEventListener('click', function () {
    const listUl = document.querySelectorAll('#lista-tarefas>li');
    for (let index = 0; index < listUl.length; index += 1) {
      const checked = listUl[index];
      if (checked.classList.contains('completed')) {
        checked.parentNode.removeChild(checked);
      }
    }
  });
}

// Save your preferences on localStorage
function saveAllTasks() {
  saveTasks.addEventListener('click', function () {
    const olList = document.querySelectorAll('.todo-list');
    const mylList = [];
    const classes = [];
    const myTasks = {
      mylList,
      classes,
    };
    for (let index = 0; index < olList.length; index += 1) {
      mylList.push(olList[index].innerHTML);
      classes.push(olList[index].classList.contains('completed'));
    }
    localStorage.setItem('myTodoList', JSON.stringify(myTasks));
  });
}

function removeSelectedTasks() {
  removeSelected.addEventListener('click', function () {
    const selectList = document.querySelector('.selected');
    orderedList.removeChild(selectList);
  });
}

addTask();
selectedDesativate();
todoCompleted();
removeAllTasks();
removeCheckedTasks();
saveAllTasks();
removeSelectedTasks();

// When reloading the page, the preferences are loaded
const myTodo = JSON.parse(localStorage.getItem('myTodoList'));
function loadPage() {
  for (let index = 0; index < myTodo.mylList.length; index += 1) {
    const savedList = document.createElement('li');
    savedList.innerHTML = myTodo.mylList[index];
    savedList.classList = 'todo-list';
    if (myTodo.classes[index] === true) {
      savedList.classList += ' completed';
    }
    orderedList.appendChild(savedList);
  }
}

if (myTodo !== null && myTodo.mylList.length > 0) {
  window.onload = loadPage();
}
