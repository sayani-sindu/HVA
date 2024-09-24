//variables

const addTask = document.getElementById('add-task');

const taskContainer = document.getElementById('task-container');

const inputTask = document.getElementById('input-task');


//Event Listener for Add button

let controlsAdded = false;


let inputTasks = []

const taskCreation = (taskName) =>{
    const task = document.createElement('div');
    task.classList.add('task');

    const li = document.createElement('li');
    li.innerText = taskName;
    task.appendChild(li);

    const checkButton = document.createElement("button");

    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');

    task.appendChild(checkButton);

    const deleteButton = document.createElement("button");

    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');

    task.appendChild(deleteButton);
    return task;
}

const addControls = () =>{
    const alltasks = document.createElement('div');
    alltasks.classList.add('alltasks');

   
    allCheckBtn = document.createElement('input');
    allCheckBtn.setAttribute('type', 'checkbox');
    
    

    const checkAllLabel = document.createElement('label');
    checkAllLabel.appendChild(allCheckBtn);
    checkAllLabel.appendChild(document.createTextNode('Check All'));

    allCheckBtn.classList.add('CheckBtn');

    checkAllLabel.classList.add('checkAllTasks');

    alltasks.appendChild(checkAllLabel);
    checkAllLabel.classList.add('checkAllTasks');

    allDeleteBtn = document.createElement('input');
    allDeleteBtn.setAttribute('type', 'checkbox');
    

    const deleteAllLabel = document.createElement('label');
    deleteAllLabel.appendChild(allDeleteBtn);
    deleteAllLabel.appendChild(document.createTextNode('Delete All'));

    allDeleteBtn.classList.add('CheckBtn');
    deleteAllLabel.classList.add('deleteAllTasks');


    alltasks.appendChild(deleteAllLabel);
    return alltasks;
}

const updateControls = () =>{
    tasks = taskContainer.querySelectorAll('.task');
    controls = taskContainer.querySelector('.alltasks');

    if(tasks.length === 0 && controls){
        controls.remove();
        controlsAdded = false;
    }
}
const addingTask = () =>{
    if(inputTask.value === ""){
        alert('please enter the task');
        return;
    }
    if(inputTasks.includes(inputTask.value)){
        alert("Task already written");
        return;
    }
    inputTasks.push(inputTask.value);
    const task = taskCreation(`${inputTask.value}`);
    let alltasks = addControls();

    

    taskContainer.appendChild(task);
    
    if (!controlsAdded) {
        controls = addControls();
        taskContainer.appendChild(controls);
        controlsAdded = true;
    } else {
        // Move controls to the end if they are already added
        if (taskContainer.contains(controls)) {
            taskContainer.removeChild(controls);
        }
        taskContainer.appendChild(controls);
    }

    inputTask.value="";
    const checkButton = task.querySelector('.checkTask');
    const deleteButton = task.querySelector('.deleteTask');

    

    addEventListenersToTaskButtons(task, checkButton, deleteButton);
    updateControls();
    
}

const completeTasks = (checkButton, task, completeTask) => {
    if (!completeTask) {
        checkButton.classList.add('completed');
        checkButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        task.querySelector('li').style.textDecoration = 'line-through'; 
        completeTask = true;
    } else {
        checkButton.classList.remove('completed');
        checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        task.querySelector('li').style.textDecoration = 'none';
        completeTask = false;
    }
    return completeTask; // Return the updated state
}

const deleteTasks = (task) => {
    const taskName = task.querySelector('li').innerText;
    const index = inputTasks.indexOf(taskName);  // Correctly find the index in inputTasks array
    if (index > -1) {
        inputTasks.splice(index, 1);  // Remove task from inputTasks array
    }
    task.remove();  // Remove task from DOM
    updateControls();
};

const addEventListenersToTaskButtons = (task, checkButton, deleteButton) => {
    let completeTask = false;

    checkButton.addEventListener('click', () => {
        completeTask = completeTasks(checkButton, task, completeTask); // Pass correct arguments and update state
    });

    deleteButton.addEventListener('click', () => deleteTasks(task));
}



const completingTasks = () => {
    const alltasks = taskContainer.querySelector('.alltasks');
    const allCheckBtn = alltasks.querySelector('.checkAllTasks input'); 
    

    const tasks = taskContainer.querySelectorAll('.task');

    allCheckBtn.addEventListener('change', (event) => {
        tasks.forEach(task => {
            if (event.target.checked) {
                task.style.textDecoration = 'line-through';
                
            } else {
                task.style.textDecoration = 'none';
              
            }
        });
    });
}

const deletingTasks = () => {
    let alltasks = taskContainer.querySelector('.alltasks');

    if (!alltasks) return;

    let allDelete = alltasks.querySelector('.deleteAllTasks input');

    if (!allDelete) return;

    allDelete.addEventListener('change', (event) => {
        if (event.target.checked) {
            let tasks = taskContainer.querySelectorAll('.task');
            
            tasks.forEach(task => {
                const taskName = task.querySelector('li').innerText;  // Get task name for each task
                const index = inputTasks.indexOf(taskName);  // Find task in inputTasks array
                if (index > -1) {
                    inputTasks.splice(index, 1);  // Remove task from inputTasks array
                }
                task.remove();  // Remove task from DOM
            });
            updateControls();
        }
    });
};

addTask.addEventListener('click', () =>{
    addingTask();
    completingTasks();
    deletingTasks();
});

