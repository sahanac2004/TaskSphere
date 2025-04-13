package com.example.todo_list_app.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todo_list_app.model.Comment;
import com.example.todo_list_app.repository.CommentRepository;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public Comment addComment(Comment comment) {
        comment.setTimestamp(LocalDateTime.now());
        return commentRepository.save(comment);
    }

    public List<Comment> getCommentsByTaskId(Long taskId) {
        if (taskId == null) return List.of();
        return commentRepository.findByTaskId(taskId);
    }
    
}
