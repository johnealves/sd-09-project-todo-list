function createTask() {
  const button = document.querySelector('.button');
  const inputText = document.querySelector('.inputText');
  const father = document.querySelector('.taskList');
  button.addEventListener('click', function () {
    const task = document.createElement('li');
    task.innerText = inputText.value;
    task.className = 'task';
    father.appendChild(task);
    inputText.value = '';
  });
}
createTask();

function changeColorTask() {
  const taskList = document.querySelector('.taskList');
  const color = 'rgb(128, 128, 128)';
  taskList.addEventListener('click', function (event) {
    removeColorTask();
    event.target.style.backgroundColor = color;
  });
}
changeColorTask();
function removeColorTask () {
  const taskList = document.querySelectorAll('.task') ;
  for (let index = 0; index < taskList.length; index += 1){
    if (taskList[index].style.backgroundColor !== 'white'){
      taskList[index].style.backgroundColor = 'white'
    }
  }
}