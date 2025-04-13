# TaskSphere 🧠✅

**TaskSphere** is a feature-rich, modern to-do list application designed to help users manage their tasks effectively and collaboratively. With a clean UI and powerful backend, TaskSphere includes essential task management features along with advanced functionality like analytics, prioritization, commenting, and multi-user support.

---

## 🚀 Features

### 🔧 Core Features
- **Task Management**
  - Add, edit, delete tasks.
  - Mark tasks as completed or pending.
  - Set due dates for better tracking.
  
- **Comments**
  - Add, view, and delete comments on tasks.

- **Task Filtering**
  - Filter by task title, status (completed/pending), and due dates (today, overdue, upcoming).

- **Progress Tracking**
  - Visual progress bar showing task completion percentage.

- **Dark Mode**
  - Toggle between light and dark themes for better user experience.

---


## ⚙️ Setup Instructions

### ✅ Prerequisites

- Java 17 or above
- Maven 3.6+
- MariaDB or MySQL
- IDE (e.g., IntelliJ IDEA or Eclipse)

### 📦 Steps to Run

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-list-app
## ⚙️ Configure the Database

Edit `src/main/resources/application.properties` and update your DB credentials:

spring.datasource.url=jdbc:mariadb://localhost:3306/todolistdb
spring.datasource.username=<your-username>
spring.datasource.password=<your-password>
spring.jpa.hibernate.ddl-auto=update

---

## 📦 Build the Project

mvn clean install

---

## 🚀 Run the Application

mvn spring-boot:run

---

## 🌐 Access the App

http://localhost:8080

---

## 🔌 API Endpoints

### 🧍 Authentication (/api/auth)

Method   | Endpoint   | Description
-------- | ---------- | -------------------------
POST     | /signup    | Register a user
POST     | /login     | User login

---

### 📝 Tasks (/api/tasks)

Method   | Endpoint   | Description
-------- | ---------- | -------------------------
GET      | /          | Get all tasks
POST     | /          | Create a new task
PUT      | /{id}      | Update a task
DELETE   | /{id}      | Delete a task

---

### 💬 Comments (/api/comments)

Method   | Endpoint              | Description
-------- | --------------------- | ------------------------------
GET      | /task/{taskId}        | Get comments for a task
POST     | /                     | Add a comment
DELETE   | /{id}                 | Delete a comment

---

## 🛠 Technologies Used

- **Backend**: Spring Boot, Spring Security, Spring Data JPA
- **Database**: MariaDB / MySQL (H2 optional for testing)
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Tools**: Maven, Lombok, IntelliJ IDEA / Eclipse

---

## 🔮 Future Enhancements

- OAuth2 login (Google, Facebook)
- Real-time updates with WebSockets
- Drag-and-drop task reordering
- Advanced analytics with charts and graphs

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature-name`)
3. Commit your changes
4. Submit a pull request
