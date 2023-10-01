window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const list_el = document.querySelector('#tasks');

  // Get the ".tasks" and "completed-tasks" divs.
  const tasksDiv = document.querySelector('.tasks');
  const completedTasksDiv = document.querySelector('.completed-tasks');

  // Add Task
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert('Please set a task');
      return;
    }

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    const task_complete_el = document.createElement('button');
    task_complete_el.classList.add('complete');
    task_complete_el.innerHTML = 'Complete';

    task_actions_el.appendChild(task_complete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = '';

    // Add event listener to the ".complete" button.
    task_complete_el.addEventListener('click', () => {
      // Move the task to the completed list.
      task_el.classList.add('completed');

      // Remove the task from the to-do list.
      list_el.removeChild(task_el);

      // Add the task to the completed tasks list.
      completedTasksDiv.appendChild(task_el);
    });
  });

  // Display the completed task list.
  displayCompletedTaskList();

  // Function to display the completed task list.
  function displayCompletedTaskList() {
    completedTasksDiv.innerHTML = '';

    // Get all of the completed tasks.
    const completedTasks = document.querySelectorAll('.task.completed');

    // Iterate over the completed tasks and add them to the completed tasks list.
    completedTasks.forEach((task) => {
      const taskEl = document.createElement('div');
      taskEl.classList.add('task');

      const taskContentEl = document.createElement('div');
      taskContentEl.classList.add('content');

      taskEl.appendChild(taskContentEl);

      const taskInputEl = document.createElement('input');
      taskInputEl.classList.add('text');
      taskInputEl.type = 'text';
      taskInputEl.value = task.querySelector('.text').value;
      taskInputEl.setAttribute('readonly', 'readonly');

      taskContentEl.appendChild(taskInputEl);

      const taskActionsEl = document.createElement('div');
      taskActionsEl.classList.add('actions');

      const taskDeleteEl = document.createElement('button');
      taskDeleteEl.classList.add('delete');
      taskDeleteEl.innerHTML = 'Delete';

      taskActionsEl.appendChild(taskDeleteEl);

      taskEl.appendChild(taskActionsEl);

      completedTasksDiv.appendChild(taskEl);
    });
  }
});
