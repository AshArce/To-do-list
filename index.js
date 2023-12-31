window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const list_el = document.querySelector('#tasks');

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

    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerHTML = 'Edit';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerHTML = 'Delete';

    const task_complete_el = document.createElement('button');
    task_complete_el.classList.add('complete');
    task_complete_el.innerHTML = 'Complete';

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
    task_actions_el.appendChild(task_complete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = '';

    task_edit_el.addEventListener('click', () => {
      if (task_input_el.readOnly) {
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();
        task_edit_el.innerText = 'Save';
      } else {
        task_input_el.setAttribute('readonly', 'readonly');
        task_edit_el.innerText = 'Edit';
      }
    });

      task_delete_el.addEventListener(`click`, () => {
        list_el.removeChild(task_el);
      
      });

      task_complete_el.addEventListener('click', () => {
        // Ask for confirmation
        const confirmComplete = window.confirm('Are you sure this task is complete?');
    
        if (confirmComplete) {
            // Remove the "Edit" and "Complete" buttons from the task element.
            task_actions_el.removeChild(task_edit_el);
            task_actions_el.removeChild(task_complete_el);
    
            // Remove the task from the to-do list.
            list_el.removeChild(task_el);
    
            // Add the task to the completed tasks list.
            completedTasksDiv.appendChild(task_el);
    
            // Add event listener to the "Delete" button in completed tasks.
            const task_delete_completed_el = task_el.querySelector('.delete');
            task_delete_completed_el.addEventListener('click', () => {
                completedTasksDiv.removeChild(task_el);
            });
        }
    });

      

  });

  
});

