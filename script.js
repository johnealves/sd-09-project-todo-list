const inputText = document.querySelector('#texto-tarefa');
const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click', addTask);
function addTask () {
    const taskList = document.querySelector('#lista-tarefas');
    const taskItem = document.createElement('li');
    taskItem.innerText = inputText.value;
    taskList.appendChild(taskItem);
    taskItem.addEventListener('click', selectItem);
    taskItem.addEventListener('dblclick', completeItem);
}

function selectItem(chosenItem) {
    const itemSelected = chosenItem.target;
    if (document.querySelector('.selected')){
        const previousSelected = document.querySelector('.selected');
        previousSelected.classList.remove('selected');
        previousSelected.style.backgroundColor = null;
        // itemSelected.style.backgroundColor = 'rgb(128,128,128)';
        itemSelected.classList.add('selected');
    }
    else{
        // itemSelected.style.backgroundColor = 'rgb(128,128,128)';
        itemSelected.classList.add('selected');
    }
}

function completeItem(completedItem){
    const completedTask = completedItem.target;
    if (completedTask.classList.contains('completed')){
        // const previousCompleted = document.querySelector('.completed');
        completedTask.classList.remove('completed');
        // completedTask.style.textDecoration = null;
        // completedTask.classList.add('completed');
        // completedTask.style.textDecoration = 'line-through solid rgb(0,0,0)';
    }
    else {
        completedTask.classList.add('completed');
        // completedTask.style.textDecoration = 'line-through solid rgb(0,0,0)';
    }
}