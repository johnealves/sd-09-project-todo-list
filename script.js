window.onload = function() {
    let addButton = document.getElementById('criar-tarefa');
    let clearListButton = document.getElementById('apaga-tudo');
    let clearCompletedButton = document.getElementById('remover-finalizados');
    let list = document.querySelector('#lista-tarefas');
    addButton.addEventListener('click', addTaskToList);
    clearListButton.addEventListener('click', clearList);
    clearCompletedButton.addEventListener('click', clearCompleted);
     
    function addTaskToList() {
        let taskToAdd = document.getElementById('texto-tarefa').value;
        if(document.getElementById('texto-tarefa').value == 0) {
            return alert('Insira uma tarefa');
        }
        let taskToList = document.createElement('li');
        taskToList.addEventListener('click', highlight);
        taskToList.addEventListener('dblclick', taskComplete);
        taskToList.className = 'item-list';
        taskToList.innerText = taskToAdd;
        list.appendChild(taskToList);
        clearInput();        
    }
}
    
    function clearInput() {
        if(document.getElementById('texto-tarefa').value !== 0) {
            document.getElementById('texto-tarefa').value = '';
        }
    }
    function highlight(event) {
        let listItemToHighlight = event.target;
        let previousSelectedItem = document.querySelector('.selected');
        if(listItemToHighlight.classList.contains('selected') !== true) {
            listItemToHighlight.classList.add('selected');
            if(previousSelectedItem) {
                previousSelectedItem.classList.remove('selected');
            }
        }
        
    }
    
    function taskComplete(event) {
        let completedItem = event.target;
        if(completedItem.classList.contains('completed') !== true) {
            completedItem.classList.add('completed');
        } else {
            completedItem.classList.remove('completed');
        }
        
    }

    function clearList() {
        let listItems = document.querySelectorAll('.item-list');
        for(let i = 0; i < listItems.length; i += 1) {
            document.querySelector('#lista-tarefas').removeChild(listItems[i]);
        }
    }

    function clearCompleted() {
        let completedItems = document.querySelectorAll('.item-list');
        for(let i = 0; i < completedItems.length; i += 1) {
            if(completedItems[i].classList.contains('completed')) {
                document.querySelector('#lista-tarefas').removeChild(completedItems[i]);
            }
        }
    }
    

