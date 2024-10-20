const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Por favor, insira uma tarefa!");
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remover';
  removeBtn.classList.add('remove-btn');
  taskItem.appendChild(removeBtn);

  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    taskItem.remove();
  });

  taskList.appendChild(taskItem);
  taskInput.value = "";
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
