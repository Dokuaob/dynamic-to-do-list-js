// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();

    // Alert if input is empty
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Set onclick handler to remove the task
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append button to li, and li to task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    // Click event for "Add Task" button
    addButton.addEventListener('click', addTask);

    // Press "Enter" key to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
