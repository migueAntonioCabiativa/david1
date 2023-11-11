'use strict'
let tasks = document.getElementById('tasks');

const printTasks = async () => {
    let data = await MLUtility.GET('assets/eject/tasks.php');
    console.log(data);
    if (data.status == 200) {
        data.Result.forEach(task => {
            tasks.appendChild(taskHTML(task));
        });
    }
}

const clearTasks = async () => {
    let TaskList = document.getElementsByClassName('list-group-item');
    console.log(TaskList);
    while (TaskList.length > 0) {
        tasks.removeChild(TaskList[0]);
    }
    console.log("Pantalla limpiada");
}

const refeshTasks = async () => {
    clearTasks();
    printTasks();
}


const readProperties = async () => {
    let data2 = await MLUtility.GET('assets/eject/priorities.php');
    console.log(data2);
    data2.Result.forEach(priority => {
        document.getElementById("properties-priority").appendChild(priorityHTML(priority));
    })
}
let modal = document.getElementById("taskModal");
let title = document.getElementById("modalTitle");
let description = document.getElementById("modalContent");
let btnSave = document.getElementById("btnSave");
let btnDelete = document.getElementById("btnDelete");

btnDelete.addEventListener("click", async (e) => {
    let data = JSON.parse(e.target.value);
    await deleteTask(data.Task_Id);
    console.log("Delete Task -> " + data.Task_Id);
    hideProperties();
});

const EditTask = async (task = null) => {

    let titleText;
    let descriptionText;
    let saveTitle = false;
    let saveDescription = false;

    btnDelete.textContent = "Borrar";
    btnDelete.classList.add("btn-danger");
    btnDelete.value = JSON.stringify(task);
    btnSave.textContent = "Guardar";
    btnSave.classList.add("btn-success");
    btnSave.addEventListener("click", () => {
        let data = {
            title: title.value,
            description: description.value
        };
        console.log(data);
        updateTask(data);

    });
    title.style.border = "0px";
    description.style.border = "0px";
    title.placeholder = "Agrega un titulo";
    description.placeholder = "Agrega una Descripcion";
    if (task != null) {
        titleText = task.Task_Name;
        descriptionText = task.Task_Description;
        title.value = titleText;
        description.value = descriptionText;
    }
    title.addEventListener("keyup", () => {
        console.log(title.textContent);
        if (title.value != titleText) {
            modal.style.zIndex = 11;
            btnSave.style.display = 'block';
            modal.classList.remove("ms-md-5");
            saveTitle = true;
        } else {
            saveTitle = false;
            if (!saveDescription) {
                modal.style.zIndex = 9;
                modal.classList.add("ms-md-5");
                btnSave.style.display = 'none';
            }
        }
    })
    title.addEventListener("focusout", () => {
        console.log(saveTitle);
        if (saveTitle) {
            title.style.border = "1px solid #02c9a8";
        } else {
            title.style.border = "0px";
        }
    })
    description.addEventListener("keyup", () => {
        if (description.value != descriptionText) {
            modal.style.zIndex = 11;
            btnSave.style.display = 'block';
            modal.classList.remove("ms-md-5");
            saveDescription = true;
        } else {
            saveDescription = false;
            if (!saveTitle) {
                modal.style.zIndex = 9;
                btnSave.style.display = 'none';
                modal.classList.add("ms-md-5");
            }
        }
    })

    description.addEventListener("focusout", () => {
        console.log(saveDescription);
        if (saveDescription) {
            description.style.border = "1px solid #02c9a8";
        } else {
            description.style.border = "0px";
        }
    })
    updatePriority(task.Priority_Id);


    btnSave.style.display = 'none';
    modal.style.display = 'block';
}

const updatePriority = (Priority_Id) => {
    document.getElementById("btn-priority").textContent = "Prioridad -> " + Priority_Id;
}

const hideProperties = async () => {
    let modal = document.getElementById("taskModal");
    modal.style.display = 'none';
    modal.style.zIndex = 9;
    modal.classList.add("ms-md-5");
}

const updateTask = async (data) => {
    let response = await MLUtility.POST('assets/eject/tasks.php', data);
    console.log(response);
}

const startTask = async (task) => {
    console.log("Start " + task.Task_Name);
}

const completeTask = async (task) => {
    console.log("completeTask " + task.Task_Name);
}

const reStartTask = async (task) => {
    console.log("reStartTask " + task.Task_Name);
}

const deleteTask = async (taskId) => {
    let response = await MLUtility.DELETE('assets/eject/tasks.php', taskId);
    let task = document.getElementById("TaskId-" + taskId);
    tasks.removeChild(task);
    console.log(response);
}


//let data = await MLUtility.DELETE('assets/eject/tasks.php', datos);
//console.log(data);

const taskHTML = (task) => {
    const container = document.createElement("label");
    const span1 = document.createElement("span");
    const strong = document.createElement("strong");
    const small1 = document.createElement("small");
    const spanStatus = document.createElement("span");
    const small2 = document.createElement("small");
    const span2 = document.createElement("span");
    const div = document.createElement("DIV");
    const h4 = document.createElement("h4");
    const span3 = document.createElement("span");
    const button1 = document.createElement("a");
    const button2 = document.createElement("a");
    const buttonText1 = document.createElement("p");
    const buttonText2 = document.createElement("p");

    container.setAttribute("id", "TaskId-" + task.Task_Id);

    container.classList.add("list-group-item", "d-flex", "justify-content-around", "gap-3", "my-2");
    span1.classList.add("pt-1", "w-50");
    small1.classList.add("d-block", "text-body-secondary");
    small2.classList.add("d-block", "text-body-secondary", "nowrap-ellipsis");
    span2.classList.add("d-flex", "justify-content-center", "align-items-center", "w-20");
    div.classList.add("priority");
    div.style.background = task.Task_Priority_Color;
    spanStatus.style.color = task.Task_Status_Color;
    span3.classList.add("d-flex", "justify-content-center", "align-items-center", "pt-1", "w-30");
    button1.classList.add("btn", "btn-task");
    button2.classList.add("btn", "btn-task");


    buttonText1.textContent = "editar";
    button1.addEventListener("click", () => {
        EditTask(task);
    });
    switch (task.Status_Id) {
        case "1":
            buttonText2.textContent = "Iniciar";
            button2.addEventListener("click", () => {
                startTask(task);
            });
            break;
        case "2":
            buttonText2.textContent = "completar";
            button2.addEventListener("click", () => {
                completeTask(task);
            });
            break;
        case "4":
            buttonText2.textContent = "Reiniciar";
            button2.addEventListener("click", () => {
                reStartTask(task);
            });
            break;
        default:
            break;
    }

    h4.textContent = task.Priority_Id;

    strong.textContent = task.Task_Name;
    small1.textContent = "Estado -> ";
    spanStatus.textContent = task.Task_Status;
    small2.textContent = task.Task_Description;

    button1.appendChild(buttonText1);
    button2.appendChild(buttonText2);
    span3.appendChild(button1);
    span3.appendChild(button2);

    div.appendChild(h4);

    span2.appendChild(div);

    span1.appendChild(strong);
    small1.appendChild(spanStatus);
    span1.appendChild(small1);
    span1.appendChild(small2);

    container.appendChild(span1);
    container.appendChild(span2);
    container.appendChild(span3);

    return container;
}

const priorityHTML = (priority) => {
    const li = document.createElement("li");
    const a = document.createElement("a");


    a.classList.add("dropdown-item");

    a.textContent = priority.Id + " - " + priority.Name;
    a.addEventListener("click", () => {
        updatePriority(priority.Id);
    });

    li.appendChild(a);


    return li;
}


printTasks();
readProperties();

