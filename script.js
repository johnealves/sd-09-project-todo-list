function addTask() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', function () {
    const inputTask = document.getElementById('texto-tarefa');
    if (inputTask.value !== '') {
      const ol = document.getElementById('lista-tarefas');
      const li = document.createElement('li');
      li.innerHTML = inputTask.value;
      ol.appendChild(li);
      inputTask.value = '';
    }
  });
}

function selectItem() {
  const listItem = document.getElementById('lista-tarefas');
  listItem.addEventListener('click', function (event) {
    const selectedItem = document.getElementsByClassName('selected');
    if (selectedItem[0]) {
      selectedItem[0].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

function completedItem() {
  const listItem = document.getElementById('lista-tarefas');
  listItem.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}

function clearList() {
  const buttonClearList = document.getElementById('apaga-tudo');
  buttonClearList.addEventListener('click', function () {
    const listItem = document.getElementById('lista-tarefas');
    while (listItem.firstChild) {
      listItem.removeChild(listItem.firstChild);
    }
  });
}

function clearListCompleted() {
  const buttonclearListCompleted = document.getElementById('remover-finalizados');
  buttonclearListCompleted.addEventListener('click', function () {
    const listCompleted = document.getElementsByClassName('completed');
    while (listCompleted[0]) {
      console.log("cai aqui")
      listCompleted[0].parentNode.removeChild(listCompleted[0]);
      alert("stop");
    }
  });
}

window.onload = function () {
  addTask();
  selectItem();
  completedItem();
  clearList();
  clearListCompleted();
};
