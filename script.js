let Add = document.getElementById("Add");
let TasksList = document.getElementById("TasksList")
let Tasks = JSON.parse(localStorage.getItem("Tasks")) || [];


for(let el of Tasks){
    let taskWrapper = document.createElement("div")
    taskWrapper.style.minWidth = "50%"
    taskWrapper.style.alignItems = "center"
    
    let newTask = document.createElement("div")
    newTask.style.border = "solid";
    newTask.style.borderWidth = "5px"
    newTask.style.minHeight = "50px"
    newTask.style.backgroundColor = "white"
    newTask.style.minWidth = "100%"
    newTask.style.borderRadius = "10px"
    newTask.style.display = "flex";
    newTask.style.alignItems = "center";
    newTask.style.boxSizing = "border-box"
    let newTaskName = document.createElement("input")
    newTaskName.style.border = "none"
    newTaskName.style.background = "none"
    newTaskName.disabled = true
    newTaskName.style.color = "black"
    newTaskName.value = el.name
    newTaskName.style.marginRight = "auto"
    newTaskName.style.maxWidth = "60%"
    newTaskName.style.textOverflow = "ellipsis"
    newTaskName.style.pointerEvents = "none"
    newTaskName.style.overflow = "hidden"
    newTask.appendChild(newTaskName)
    
    let createdTime = document.createElement("label")
    createdTime.textContent = el.time
    createdTime.style.fontSize = "15px"
    createdTime.style.fontWeight = "bold"
    createdTime.style.backgroundColor = "white"
    createdTime.style.border = "solid"
    createdTime.style.borderWidth = "5px"
    createdTime.style.display = "block"
    createdTime.style.userSelect = "none"
    createdTime.style.maxWidth = "80%"
    createdTime.style.marginLeft = "auto"
    createdTime.style.marginRight = "auto"
    createdTime.style.minHeight = "18px"
    createdTime.style.borderRadius = "10px"
    
    let deleteTask = document.createElement("button")
    deleteTask.textContent = "X"
    deleteTask.style.display = "flex"
    deleteTask.style.userSelect = "none"
    deleteTask.style.flexShrink = "0"
    deleteTask.style.marginLeft = "auto";
    deleteTask.style.margin = "2px"
    deleteTask.style.justifyContent = "center"
    deleteTask.style.alignItems = "center"
    deleteTask.style.fontWeight = "bolder"
    deleteTask.addEventListener("mouseenter", function(){
        deleteTask.style.backgroundColor = "red"
    })
    deleteTask.addEventListener("mouseleave", function(){
        deleteTask.style.background = "none"
    })
    deleteTask.addEventListener("click", function(){
        deleteTask.style.backgroundColor = "darkred"
        taskWrapper.remove();
        Tasks = Tasks.filter(task => task.id !== taskID)
        
        localStorage.setItem("Tasks", JSON.stringify(Tasks))
    })
    deleteTask.style.background = "none"
    deleteTask.style.border = "solid"
    deleteTask.style.borderWidth = "5px"
    deleteTask.style.width = "30px"
    deleteTask.style.height = "30px"
    
    taskWrapper.appendChild(createdTime)
    taskWrapper.appendChild(newTask)
    
    
    
    
    newTask.appendChild(deleteTask)
    TasksList.appendChild(taskWrapper);
    
    let taskID = el.id
    localStorage.setItem("Tasks", JSON.stringify(Tasks))
}


function addTask(){
    let TaskName = document.getElementById("TaskName");
    if (TaskName.value.trim() === "") {
    return
}
    let taskWrapper = document.createElement("div")
    taskWrapper.style.minWidth = "50%"
    taskWrapper.style.alignItems = "center"
    
    let newTask = document.createElement("div")
    newTask.style.border = "solid";
    newTask.style.borderWidth = "5px"
    newTask.style.minHeight = "50px"
    newTask.style.backgroundColor = "white"
    newTask.style.minWidth = "100%"
    newTask.style.borderRadius = "10px"
    newTask.style.display = "flex";
    newTask.style.alignItems = "center";
    newTask.style.boxSizing = "border-box"
    let newTaskName = document.createElement("input")
    newTaskName.style.border = "none"
    newTaskName.style.background = "none"
    newTaskName.disabled = true
    newTaskName.style.color = "black"
    newTaskName.value = TaskName.value
    newTaskName.style.marginRight = "auto"
    newTaskName.style.maxWidth = "60%"
    newTaskName.style.textOverflow = "ellipsis"
    newTaskName.style.pointerEvents = "none"
    newTaskName.style.overflow = "hidden"
    newTask.appendChild(newTaskName)
    
    let createdTime = document.createElement("label")
    createdTime.textContent = "Created: " + new Date().toLocaleTimeString()
    createdTime.style.fontSize = "15px"
    createdTime.style.fontWeight = "bold"
    createdTime.style.backgroundColor = "white"
    createdTime.style.border = "solid"
    createdTime.style.borderWidth = "5px"
    createdTime.style.display = "block"
    createdTime.style.userSelect = "none"
    createdTime.style.maxWidth = "80%"
    createdTime.style.marginLeft = "auto"
    createdTime.style.marginRight = "auto"
    createdTime.style.minHeight = "18px"
    createdTime.style.borderRadius = "10px"
    
    let deleteTask = document.createElement("button")
    deleteTask.textContent = "X"
    deleteTask.style.display = "flex"
    deleteTask.style.userSelect = "none"
    deleteTask.style.flexShrink = "0"
    deleteTask.style.marginLeft = "auto";
    deleteTask.style.margin = "2px"
    deleteTask.style.justifyContent = "center"
    deleteTask.style.alignItems = "center"
    deleteTask.style.fontWeight = "bolder"
    deleteTask.addEventListener("mouseenter", function(){
        deleteTask.style.backgroundColor = "red"
    })
    deleteTask.addEventListener("mouseleave", function(){
        deleteTask.style.background = "none"
    })
    deleteTask.addEventListener("click", function(){
        deleteTask.style.backgroundColor = "darkred"
        taskWrapper.remove();
        Tasks = Tasks.filter(task => task.id !== taskID)
        
        localStorage.setItem("Tasks", JSON.stringify(Tasks))
    })
    deleteTask.style.background = "none"
    deleteTask.style.border = "solid"
    deleteTask.style.borderWidth = "5px"
    deleteTask.style.width = "30px"
    deleteTask.style.height = "30px"
    
    taskWrapper.appendChild(createdTime)
    taskWrapper.appendChild(newTask)
    
    
    
    
    newTask.appendChild(deleteTask)
    TasksList.appendChild(taskWrapper);
    
    
    Tasks.push({
        name: newTaskName.value, time: createdTime.textContent, id: Date.now()
    })
    let taskID = Tasks[Tasks.length - 1].id
    localStorage.setItem("Tasks", JSON.stringify(Tasks))
}

function clearTasks(){
    localStorage.removeItem("Tasks")
    Tasks = []
    TasksList.innerHTML = []
}