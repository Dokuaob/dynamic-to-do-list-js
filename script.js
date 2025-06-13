// Function to load tasks from localStorage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => {
        addTask(taskText, false); // false = do not save again
    });
}

// Function to add a new task
function addTask(taskText, save = true) {
    const taskList = document.getElementById('task-list');

    // Create a new <li> element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create the Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Set remove functionality
    removeBtn.onclick = function () {
        taskList.removeChild(li);

        // Remove from localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks = tasks.filter(t => t !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Append the button and <li> to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save to localStorage (if not already saved)
    if (save) {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    // Load any existing tasks from localStorage
    loadTasks();

    // Event listener for Add Task button
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        addTask(taskText);
        taskInput.value = '';
    });

    // Event listener for Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();

            if (taskText === '') {
                alert('Please enter a task.');
                return;
            }

            addTask(taskText);
            taskInput.value = '';
        }
    });
});
