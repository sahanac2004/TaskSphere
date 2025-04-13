// package com.example.todo_list_app.controller;

// import java.time.LocalDateTime;
// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.todo_list_app.model.Comment;
// import com.example.todo_list_app.repository.CommentRepository;

// @RestController
// @RequestMapping("/api/comments")
// @CrossOrigin("*")
// public class CommentController {

//     @Autowired
//     private CommentRepository commentRepository;

//     @PostMapping
//     public Comment addComment(@RequestBody Comment comment) {
//         comment.setTimestamp(LocalDateTime.now());
//         return commentRepository.save(comment);
//     }

//     @GetMapping("/task/{taskId}")
//     public List<Comment> getCommentsByTask(@PathVariable Long taskId) {
//         return commentRepository.findByTaskId(taskId);
//     }
// }


package com.example.todo_list_app.controller;

import java.time.LocalDateTime;
 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.web.bind.annotation.CrossOrigin;
 import org.springframework.web.bind.annotation.DeleteMapping;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.PathVariable;
 import org.springframework.web.bind.annotation.PostMapping;
 import org.springframework.web.bind.annotation.RequestBody;
 import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.RestController;

import com.example.todo_list_app.model.Comment;
 import com.example.todo_list_app.repository.CommentRepository;

@RestController @RequestMapping("/api/comments") @CrossOrigin("*") public class CommentController {

@Autowired
private CommentRepository commentRepository;

@PostMapping
public Comment addComment(@RequestBody Comment comment) {
    comment.setTimestamp(LocalDateTime.now());
    return commentRepository.save(comment);
}

@GetMapping("/task/{taskId}")
public List<Comment> getCommentsByTask(@PathVariable Long taskId) {
    return commentRepository.findByTaskId(taskId);
}
@DeleteMapping("/{id}")
public void deleteComment(@PathVariable Long id) {
    commentRepository.deleteById(id);
}
}