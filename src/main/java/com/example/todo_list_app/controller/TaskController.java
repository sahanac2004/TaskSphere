
// package com.example.todo_list_app.controller;

// import java.time.LocalDate;
// import java.util.List;

// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.todo_list_app.model.Task;
// import com.example.todo_list_app.repository.TaskRepository;

// @RestController
// @RequestMapping("/api/tasks")
// @CrossOrigin("*")
// public class TaskController {

//     private final TaskRepository taskRepository;

//     public TaskController(TaskRepository taskRepository) {
//         this.taskRepository = taskRepository;
//     }

//     @GetMapping
//     public List<Task> getAllTasks() {
//         return taskRepository.findAll();
//     }

//     @PostMapping
//     public Task createTask(@RequestBody Task task) {
//         task.setCompleted(false);
//         task.setCreatedDate(LocalDate.now());
//         return taskRepository.save(task);
//     }

//     @PutMapping("/{id}")
//     public Task updateTask(@PathVariable Long id, @RequestBody Task updatedTask) {
//         return taskRepository.findById(id).map(task -> {
//             task.setTitle(updatedTask.getTitle());
//             task.setDescription(updatedTask.getDescription());
//             task.setDueDate(updatedTask.getDueDate());
//             task.setPriority(updatedTask.getPriority());
//             task.setCategory(updatedTask.getCategory());
//             task.setComments(updatedTask.getComments());
//             task.setCompleted(updatedTask.isCompleted());
//             return taskRepository.save(task);
//         }).orElse(null);
//     }

//     @DeleteMapping("/{id}")
//     public void deleteTask(@PathVariable Long id) {
//         taskRepository.deleteById(id);
//     }

//     @GetMapping("/{id}")
//     public Task getTaskById(@PathVariable Long id) {
//         return taskRepository.findById(id).orElse(null);
//     }
// }








package com.example.todo_list_app.controller;

import java.time.LocalDate;
 import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
 import org.springframework.web.bind.annotation.DeleteMapping;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.PathVariable;
 import org.springframework.web.bind.annotation.PostMapping;
 import org.springframework.web.bind.annotation.PutMapping;
 import org.springframework.web.bind.annotation.RequestBody;
 import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.RestController;

import com.example.todo_list_app.model.Task;
 import com.example.todo_list_app.repository.TaskRepository;

@RestController @RequestMapping("/api/tasks") @CrossOrigin("*") public class TaskController {

private final TaskRepository taskRepository;

public TaskController(TaskRepository taskRepository) {
    this.taskRepository = taskRepository;
}

@GetMapping
public List<Task> getAllTasks() {
    return taskRepository.findAll();
}

@PostMapping
public Task createTask(@RequestBody Task task) {
    task.setCompleted(false);
    task.setCreatedDate(LocalDate.now());
    return taskRepository.save(task);
}

@PutMapping("/{id}")
public Task updateTask(@PathVariable Long id, @RequestBody Task updatedTask) { return taskRepository.findById(id).map(task -> { task.setTitle(updatedTask.getTitle()); task.setDescription(updatedTask.getDescription()); task.setDueDate(updatedTask.getDueDate()); task.setPriority(updatedTask.getPriority()); task.setCategory(updatedTask.getCategory()); task.setProgress(updatedTask.getProgress()); task.setCompleted(updatedTask.isCompleted());

    // DO NOT update comments directly here — manage them separately
    return taskRepository.save(task);
}).orElse(null);
}

@DeleteMapping("/{id}") public void deleteTask(@PathVariable Long id) { System.out.println("Attempting to delete task with ID: " + id); if (!taskRepository.existsById(id)) { System.out.println("Task ID not found: " + id); return; } try { taskRepository.deleteById(id); System.out.println("Deleted task ID: " + id); } catch (Exception e) { } }

@GetMapping("/{id}")
public Task getTaskById(@PathVariable Long id) {
    return taskRepository.findById(id).orElse(null);
}
}