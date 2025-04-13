












// // ✅ Optimized and Corrected script.js for To-Do App with Dark Mode, Validation, Prefilled Edit Form & Reset Add Form

// document.addEventListener("DOMContentLoaded", () => {
//     hideAllSections();
// });

// let currentTaskId = null;

// function hideAllSections() {
//     document.getElementById("addTaskForm").classList.add("d-none");
//     document.getElementById("editTaskForm").classList.add("d-none");
//     document.getElementById("taskList").classList.add("d-none");
// }

// function showAddTask() {
//     resetAddTaskForm();
//     hideAllSections();
//     document.getElementById("addTaskForm").classList.remove("d-none");
// }

// function showTaskList() {
//     hideAllSections();
//     document.getElementById("taskList").classList.remove("d-none");
//     loadTasks();
// }

// function resetAddTaskForm() {
//     document.getElementById("taskTitle").value = "";
//     document.getElementById("taskDescription").value = "";
//     document.getElementById("taskDueDate").value = "";
//     document.getElementById("taskTitleError").textContent = "";
//     document.getElementById("taskDescriptionError").textContent = "";
//     document.getElementById("taskDueDateError").textContent = "";
// }

// function resetEditForm() {
//     document.getElementById("editTaskTitle").value = "";
//     document.getElementById("editTaskDescription").value = "";
//     document.getElementById("editTaskDueDate").value = "";
//     document.getElementById("editTaskTitleError").textContent = "";
//     document.getElementById("editTaskDescriptionError").textContent = "";
//     document.getElementById("editTaskDueDateError").textContent = "";
// }

// function validateForm(title, description, dueDate, prefix) {
//     let hasError = false;

//     if (!title.trim()) {
//         document.getElementById(`${prefix}TitleError`).textContent = "Title is required.";
//         hasError = true;
//     } else {
//         document.getElementById(`${prefix}TitleError`).textContent = "";
//     }

//     if (!description.trim()) {
//         document.getElementById(`${prefix}DescriptionError`).textContent = "Description is required.";
//         hasError = true;
//     } else {
//         document.getElementById(`${prefix}DescriptionError`).textContent = "";
//     }

//     if (!dueDate) {
//         document.getElementById(`${prefix}DueDateError`).textContent = "Due date is required.";
//         hasError = true;
//     } else {
//         document.getElementById(`${prefix}DueDateError`).textContent = "";
//     }

//     return !hasError;
// }

// async function addTask() {
//     const title = document.getElementById("taskTitle").value;
//     const description = document.getElementById("taskDescription").value;
//     const dueDate = document.getElementById("taskDueDate").value;

//     if (!validateForm(title, description, dueDate, "task")) return;

//     const task = { title, description, dueDate, completed: false };

//     try {
//         const res = await fetch("http://localhost:8080/api/tasks", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(task),
//         });

//         if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

//         alert("✅ Task added!");
//         resetAddTaskForm();
//         showTaskList();
//     } catch (err) {
//         alert("❌ Error adding task: " + err.message);
//     }
// }

// async function loadTasks() {
//     try {
//         const res = await fetch("http://localhost:8080/api/tasks");
//         if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
//         const tasks = await res.json();
//         renderTasks(tasks);
//     } catch (err) {
//         alert("Error loading tasks: " + err.message);
//     }
// }

// function renderTasks(tasks) {
//     const container = document.getElementById("tasksContainer");
//     container.innerHTML = "";

//     tasks.forEach(task => {
//         const now = new Date();
//         const dueDate = new Date(task.dueDate);
//         const daysUntilDue = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24));
//         const dueSoon = daysUntilDue <= 2 && !task.completed;

//         const card = document.createElement("div");
//         card.className = "col-md-6";
//         card.innerHTML = `
//             <div class="card task-card shadow">
//                 <div class="card-body">
//                     <div class="form-check">
//                         <input class="form-check-input" type="checkbox" id="completed-${task.id}" ${task.completed ? "checked" : ""} onchange="toggleTaskStatus(${task.id}, this)">
//                         <label class="form-check-label" for="completed-${task.id}">
//                             <h5 class="card-title">${task.title}</h5>
//                         </label>
//                     </div>
//                     <h6 class="card-subtitle mb-2 text-muted ${dueSoon ? "due-soon" : ""}">Due: ${task.dueDate} ${dueSoon ? "<span class='due-soon'>Due Soon!</span>" : ""}</h6>
//                     <p class="card-text">${task.description || "No description."}</p>
//                     <div class="mt-3">
//                         <button class="btn btn-sm btn-outline-primary me-1" onclick="showEditTaskForm(${task.id})">Edit</button>
//                         <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${task.id})">Delete</button>
//                     </div>
//                     <hr>
//                     <div>
//                         <h6>💬 Comments</h6>
//                         <div id="comments-${task.id}" class="mb-2"></div>
//                         <textarea class="form-control mb-2" id="commentText-${task.id}" rows="2" placeholder="Add a comment..."></textarea>
//                         <button class="btn btn-sm btn-secondary" onclick="postComment(${task.id})">Post</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         container.appendChild(card);
//         loadComments(task.id);
//     });
//     updateProgressBar(tasks);
// }

// async function showEditTaskForm(id) {
//     const task = await fetchTaskById(id);
//     if (!task) return;

//     currentTaskId = id;
//     document.getElementById("editTaskTitle").value = task.title;
//     document.getElementById("editTaskDescription").value = task.description;
//     document.getElementById("editTaskDueDate").value = task.dueDate;
//     resetEditForm();

//     hideAllSections();
//     document.getElementById("editTaskForm").classList.remove("d-none");
// }

// async function updateTask() {
//     const title = document.getElementById("editTaskTitle").value;
//     const description = document.getElementById("editTaskDescription").value;
//     const dueDate = document.getElementById("editTaskDueDate").value;

//     if (!validateForm(title, description, dueDate, "editTask")) return;

//     const updated = { id: currentTaskId, title, description, dueDate };

//     try {
//         const res = await fetch(`http://localhost:8080/api/tasks/${currentTaskId}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(updated),
//         });
//         if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
//         resetEditForm();
//         showTaskList();
//     } catch (err) {
//         alert("❌ Error updating task: " + err.message);
//     }
// }

// async function toggleTaskStatus(id, checkbox) {
//     const task = await fetchTaskById(id);
//     if (!task) return;
//     const updated = { ...task, completed: checkbox.checked };
//     await fetch(`http://localhost:8080/api/tasks/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updated),
//     });
//     loadTasks();
// }

// async function deleteTask(id) {
//     if (!confirm("Are you sure you want to delete this task?")) return;
//     await fetch(`http://localhost:8080/api/tasks/${id}`, { method: "DELETE" });
//     loadTasks();
// }

// async function fetchTaskById(id) {
//     const res = await fetch(`http://localhost:8080/api/tasks/${id}`);
//     return res.ok ? res.json() : null;
// }

// async function deleteComment(commentId, taskId) {
//     await fetch(`http://localhost:8080/api/comments/${commentId}`, { method: "DELETE" });
//     loadComments(taskId);
// }

// async function loadComments(taskId) {
//     const res = await fetch(`http://localhost:8080/api/comments/task/${taskId}`);
//     const comments = await res.json();
//     const container = document.getElementById(`comments-${taskId}`);
//     container.innerHTML = comments.map(c => `
//         <div class="comment">
//             <small>🕒 ${new Date(c.timestamp).toLocaleString()}</small>
//             <div class="d-flex justify-content-between">
//                 <div>${c.content}</div>
//                 <button class="btn btn-sm btn-outline-danger" onclick="deleteComment(${c.id}, ${taskId})">❌</button>
//             </div>
//         </div>`).join("");
// }

// async function postComment(taskId) {
//     const content = document.getElementById(`commentText-${taskId}`).value.trim();
//     if (!content) return;

//     const comment = { content, task: { id: taskId } };
//     await fetch("http://localhost:8080/api/comments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(comment),
//     });
//     document.getElementById(`commentText-${taskId}`).value = "";
//     loadComments(taskId);
// }

// function filterTasks() {
//     const search = document.getElementById("searchTitle").value.trim().toLowerCase();
//     const status = document.getElementById("statusFilter").value;
//     const dueFilter = document.getElementById("dueFilter").value;

//     fetch("http://localhost:8080/api/tasks")
//         .then(res => res.json())
//         .then(tasks => {
//             const now = new Date();
//             const filtered = tasks.filter(task => {
//                 let match = task.title.toLowerCase().includes(search);
//                 if (status !== "all") {
//                     match = match && (status === "completed" ? task.completed : !task.completed);
//                 }
//                 if (dueFilter !== "all") {
//                     const dueDate = new Date(task.dueDate);
//                     if (dueFilter === "today") {
//                         match = match && dueDate.toDateString() === now.toDateString();
//                     } else if (dueFilter === "overdue") {
//                         match = match && dueDate < now;
//                     } else if (dueFilter === "upcoming") {
//                         match = match && dueDate > now;
//                     }
//                 }
//                 return match;
//             });
//             renderTasks(filtered);
//         });
// }

// function toggleDarkMode() {
//     const isDark = document.getElementById('darkModeToggle').checked;
//     const body = document.body;
//     const navbar = document.querySelector('.navbar');

//     body.classList.toggle('bg-dark', isDark);
//     body.classList.toggle('text-light', isDark);
//     navbar.classList.toggle('navbar-dark', isDark);
//     navbar.classList.toggle('bg-dark', isDark);
//     navbar.classList.toggle('navbar-light', !isDark);
//     navbar.classList.toggle('bg-light', !isDark);

//     document.querySelectorAll('.card, .card-body, .form-control').forEach(el => {
//         el.classList.toggle('bg-dark', isDark);
//         el.classList.toggle('text-light', isDark);
//         el.classList.toggle('border-light', isDark);
//     });

//     document.querySelectorAll('.btn').forEach(btn => {
//         btn.classList.toggle('btn-light', !isDark);
//         btn.classList.toggle('btn-dark', isDark);
//     });
// }

// function updateProgressBar(tasks) {
//     const total = tasks.length;
//     const completed = tasks.filter(task => task.completed).length;
//     const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
//     const bar = document.getElementById('progressBar');
//     bar.style.width = `${percent}%`;
//     bar.textContent = `${percent}%`;
// }






document.addEventListener("DOMContentLoaded", () => {
    hideAllSections();
});

let currentTaskId = null;

function hideAllSections() {
    document.getElementById("addTaskForm").classList.add("d-none");
    document.getElementById("editTaskForm").classList.add("d-none");
    document.getElementById("taskList").classList.add("d-none");
}

function showAddTask() {
    resetAddTaskForm();
    hideAllSections();
    document.getElementById("addTaskForm").classList.remove("d-none");
}

function showTaskList() {
    hideAllSections();
    document.getElementById("taskList").classList.remove("d-none");
    loadTasks();
}

function resetAddTaskForm() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskDueDate").value = "";
    document.getElementById("taskTitleError").textContent = "";
    document.getElementById("taskDescriptionError").textContent = "";
    document.getElementById("taskDueDateError").textContent = "";
}

function resetEditForm() {
    document.getElementById("editTaskTitle").value = "";
    document.getElementById("editTaskDescription").value = "";
    document.getElementById("editTaskDueDate").value = "";
    document.getElementById("editTaskTitleError").textContent = "";
    document.getElementById("editTaskDescriptionError").textContent = "";
    document.getElementById("editTaskDueDateError").textContent = "";
}

function validateForm(title, description, dueDate, prefix) {
    let hasError = false;

    if (!title.trim()) {
        document.getElementById(`${prefix}TitleError`).textContent = "Title is required.";
        hasError = true;
    } else {
        document.getElementById(`${prefix}TitleError`).textContent = "";
    }

    if (!description.trim()) {
        document.getElementById(`${prefix}DescriptionError`).textContent = "Description is required.";
        hasError = true;
    } else {
        document.getElementById(`${prefix}DescriptionError`).textContent = "";
    }

    if (!dueDate) {
        document.getElementById(`${prefix}DueDateError`).textContent = "Due date is required.";
        hasError = true;
    } else {
        document.getElementById(`${prefix}DueDateError`).textContent = "";
    }

    return !hasError;
}

async function addTask() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const dueDate = document.getElementById("taskDueDate").value;

    if (!validateForm(title, description, dueDate, "task")) return;

    const task = { title, description, dueDate, completed: false };

    try {
        const res = await fetch("http://localhost:8080/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });

        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        alert("✅ Task added!");
        resetAddTaskForm();
        showTaskList();
    } catch (err) {
        alert("❌ Error adding task: " + err.message);
    }
}

async function loadTasks() {
    try {
        const res = await fetch("http://localhost:8080/api/tasks");
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const tasks = await res.json();
        renderTasks(tasks);
    } catch (err) {
        alert("Error loading tasks: " + err.message);
    }
}

function renderTasks(tasks) {
    const container = document.getElementById("tasksContainer");
    container.innerHTML = "";

    tasks.forEach(task => {
        const now = new Date();
        const dueDate = new Date(task.dueDate);
        const daysUntilDue = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24));
        const dueSoon = daysUntilDue <= 2 && !task.completed;

        const card = document.createElement("div");
        card.className = "col-md-6";
        card.innerHTML = `
            <div class="card task-card shadow">
                <div class="card-body">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="completed-${task.id}" ${task.completed ? "checked" : ""} onchange="toggleTaskStatus(${task.id}, this)">
                        <label class="form-check-label" for="completed-${task.id}">
                            <h5 class="card-title">${task.title}</h5>
                        </label>
                    </div>
                    <h6 class="card-subtitle mb-2 text-muted ${dueSoon ? "due-soon" : ""}">Due: ${task.dueDate} ${dueSoon ? "<span class='due-soon'>Due Soon!</span>" : ""}</h6>
                    <p class="card-text">${task.description || "No description."}</p>
                    <div class="mt-3">
                        <button class="btn btn-sm btn-outline-primary me-1" onclick="showEditTaskForm(${task.id})">Edit</button>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${task.id})">Delete</button>
                    </div>
                    <hr>
                    <div>
                        <h6>💬 Comments</h6>
                        <div id="comments-${task.id}" class="mb-2"></div>
                        <textarea class="form-control mb-2" id="commentText-${task.id}" rows="2" placeholder="Add a comment..."></textarea>
                        <button class="btn btn-sm btn-secondary" onclick="postComment(${task.id})">Post</button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
        loadComments(task.id);
    });
    updateProgressBar(tasks);
}

async function showEditTaskForm(id) {
    const task = await fetchTaskById(id);
    if (!task) return;

    currentTaskId = id;
    hideAllSections();
    document.getElementById("editTaskForm").classList.remove("d-none");

    document.getElementById("editTaskTitle").value = task.title;
    document.getElementById("editTaskDescription").value = task.description;
    document.getElementById("editTaskDueDate").value = task.dueDate;

    document.getElementById("editTaskTitleError").textContent = "";
    document.getElementById("editTaskDescriptionError").textContent = "";
    document.getElementById("editTaskDueDateError").textContent = "";
}

async function updateTask() {
    const title = document.getElementById("editTaskTitle").value;
    const description = document.getElementById("editTaskDescription").value;
    const dueDate = document.getElementById("editTaskDueDate").value;

    if (!validateForm(title, description, dueDate, "editTask")) return;

    const updated = { id: currentTaskId, title, description, dueDate };

    try {
        const res = await fetch(`http://localhost:8080/api/tasks/${currentTaskId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updated),
        });

        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        resetEditForm();
        showTaskList();
    } catch (err) {
        alert("❌ Error updating task: " + err.message);
    }
}

async function toggleTaskStatus(id, checkbox) {
    const task = await fetchTaskById(id);
    if (!task) return;
    const updated = { ...task, completed: checkbox.checked };
    await fetch(`http://localhost:8080/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
    });
    loadTasks();
}

async function deleteTask(id) {
    if (!confirm("Are you sure you want to delete this task?")) return;
    await fetch(`http://localhost:8080/api/tasks/${id}`, { method: "DELETE" });
    loadTasks();
}

async function fetchTaskById(id) {
    const res = await fetch(`http://localhost:8080/api/tasks/${id}`);
    return res.ok ? res.json() : null;
}

async function deleteComment(commentId, taskId) {
    await fetch(`http://localhost:8080/api/comments/${commentId}`, { method: "DELETE" });
    loadComments(taskId);
}

async function loadComments(taskId) {
    const res = await fetch(`http://localhost:8080/api/comments/task/${taskId}`);
    const comments = await res.json();
    const container = document.getElementById(`comments-${taskId}`);
    container.innerHTML = comments.map(c => `
        <div class="comment">
            <small>🕒 ${new Date(c.timestamp).toLocaleString()}</small>
            <div class="d-flex justify-content-between">
                <div>${c.content}</div>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteComment(${c.id}, ${taskId})">❌</button>
            </div>
        </div>`).join("");
}

async function postComment(taskId) {
    const content = document.getElementById(`commentText-${taskId}`).value.trim();
    if (!content) return;

    const comment = { content, task: { id: taskId } };
    await fetch("http://localhost:8080/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    });
    document.getElementById(`commentText-${taskId}`).value = "";
    loadComments(taskId);
}

function filterTasks() {
    const search = document.getElementById("searchTitle").value.trim().toLowerCase();
    const status = document.getElementById("statusFilter").value;
    const dueFilter = document.getElementById("dueFilter").value;

    fetch("http://localhost:8080/api/tasks")
        .then(res => res.json())
        .then(tasks => {
            const now = new Date();
            const filtered = tasks.filter(task => {
                let match = task.title.toLowerCase().includes(search);
                if (status !== "all") {
                    match = match && (status === "completed" ? task.completed : !task.completed);
                }
                if (dueFilter !== "all") {
                    const dueDate = new Date(task.dueDate);
                    if (dueFilter === "today") {
                        match = match && dueDate.toDateString() === now.toDateString();
                    } else if (dueFilter === "overdue") {
                        match = match && dueDate < now;
                    } else if (dueFilter === "upcoming") {
                        match = match && dueDate > now;
                    }
                }
                return match;
            });
            renderTasks(filtered);
        });
}

function toggleDarkMode() {
    const isDark = document.getElementById('darkModeToggle').checked;
    const body = document.body;
    const navbar = document.querySelector('.navbar');

    body.classList.toggle('bg-dark', isDark);
    body.classList.toggle('text-light', isDark);
    navbar.classList.toggle('navbar-dark', isDark);
    navbar.classList.toggle('bg-dark', isDark);
    navbar.classList.toggle('navbar-light', !isDark);
    navbar.classList.toggle('bg-light', !isDark);

    document.querySelectorAll('.card, .card-body, .form-control').forEach(el => {
        el.classList.toggle('bg-dark', isDark);
        el.classList.toggle('text-light', isDark);
        el.classList.toggle('border-light', isDark);
    });

    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.toggle('btn-light', !isDark);
        btn.classList.toggle('btn-dark', isDark);
    });
}

function updateProgressBar(tasks) {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    const bar = document.getElementById('progressBar');
    bar.style.width = `${percent}%`;
    bar.textContent = `${percent}%`;
}
