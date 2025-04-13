// package com.example.todo_list_app.model;

// import java.time.LocalDate;
// import java.util.ArrayList;
// import java.util.List;

// import com.fasterxml.jackson.annotation.JsonManagedReference;

// import jakarta.persistence.CascadeType;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.OneToMany;
// import lombok.Getter;
// import lombok.Setter;

// @Entity
// @Getter
// @Setter
// public class Task {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String title;
//     private String description;
//     private boolean completed;
//     private LocalDate createdDate;
//     private LocalDate dueDate;
    
//     private String priority; // High, Medium, Low
//     private String category; // Personal, Work, etc.
//     private String priorityColor; // e.g., "#FF0000" for high priority (red)

//   @OneToMany(mappedBy = "task", cascade = CascadeType.ALL, orphanRemoval = true)
// @JsonManagedReference
// private List<Comment> comments = new ArrayList<>();

//     private int progress; // 0-100 (optional)
// }







package com.example.todo_list_app.model;

import java.time.LocalDate;
 import java.util.ArrayList;
 import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
 import jakarta.persistence.Entity;
 import jakarta.persistence.GeneratedValue;
 import jakarta.persistence.GenerationType;
 import jakarta.persistence.Id;
 import jakarta.persistence.OneToMany;
 import lombok.Getter;
 import lombok.Setter;

@Entity @Getter @Setter public class Task {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private String title;
private String description;
private boolean completed;
private LocalDate createdDate;
private LocalDate dueDate;

private String priority; // High, Medium, Low
private String category; // Personal, Work, etc.
private String priorityColor; // e.g., "#FF0000" for high priority (red)
@OneToMany(mappedBy = "task", cascade = CascadeType.ALL, orphanRemoval = true) @JsonManagedReference private List<Comment> comments = new ArrayList<>();

private int progress; // 0-100 (optional)
}