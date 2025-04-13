// package com.example.todo_list_app.model;

// import java.time.LocalDateTime;

// import com.fasterxml.jackson.annotation.JsonBackReference;

// import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// @Entity
// @Getter
// @Setter
// @NoArgsConstructor
// public class Comment {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String content;
//     private LocalDateTime timestamp;

//     @ManyToOne(fetch = FetchType.LAZY)
// @JoinColumn(name = "task_id")
// @JsonBackReference
// private Task task;

// }



package com.example.todo_list_app.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
 import jakarta.persistence.FetchType;
 import jakarta.persistence.GeneratedValue;
 import jakarta.persistence.GenerationType;
 import jakarta.persistence.Id;
 import jakarta.persistence.JoinColumn;
 import jakarta.persistence.ManyToOne;
 import lombok.Getter;
 import lombok.NoArgsConstructor;
 import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor public class Comment {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private String content;
private LocalDateTime timestamp;

@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "task_id") @JsonBackReference private Task task;

}