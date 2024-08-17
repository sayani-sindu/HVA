let tasks = [
    {
        id: 1,
        description: "Complete Java",
        dueDate: "10-09-2024",
        status: "ongoing",
        topic: "OOPS"
    },
    {
        id: 2,
        description: "Complete DOM in Java Script",
        dueDate: "30-08-2024",
        status: "not yet started",
        topic: "Functions, Arrays and Objects"
    },
    {
        id: 3,
        description: "Complete Strings in Coding",
        dueDate: "10-09-2024",
        status: "just started",
        topic: "Arrays"
    },
    {
        id: 4,
        description: "Read the resources given by Jeevan",
        dueDate: "18-08-2024",
        status: "not yet started",
        topic: "rules for declarations"
    }
];

class Task{
    constructor(id, description, dueDate, status, topic){
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        this.topic = topic;
    }
}

function displayTasks(){
    tasks.forEach(task => console.log(`${task.description} - ${task.dueDate}(${task.status})`));
}
displayTasks(tasks);

function addtasks(id, description, dueDate, status, topic){
    const newtask = new Task(id, description, dueDate, status, topic);
    tasks.push(newtask);
}
addtasks(5, "complete resume", "20-08-2024", "Ongoing", "adding project links");
displayTasks(tasks);

function updateTask(id, newStatus, date){
    const task = tasks.find(task => task.id === id);
    if(task){
        task.status = newStatus;
        task.dueDate = date; 
    }
    else{
        console.log("No task is found with id, please add the task to the tasks");
    }
}
updateTask(1, "completed", "17-08-2024");
displayTasks(tasks);

function updatetaskWithmap(id, newStatus){
    tasks = tasks.map(task => {
        if(task.id === id){
            return {
                ...tasks,
                status: newStatus,
            }
        }
        return task;

    });
}
updatetaskWithmap(2, "ongoing");
displayTasks(tasks);

function removeTask(id){
    tasks = tasks.filter(task => task.id !== id);
}
removeTask(5);
displayTasks(tasks);